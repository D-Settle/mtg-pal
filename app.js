const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
const Card = require('./models/card');

const SUPERTYPES = [
    "Basic",
    "Legendary",
    "Snow",
    "World",
    "Ongoing",
    "Elite"
];

mongoose.connect('mongodb://localhost:27017/card-collection');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Database connected');
})

const app = express();

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true}));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

// Makes the current request path available to all EJS views.
app.use((req, res, next) => {
    res.locals.currentPath = req.path;
    next();
});

app.get('/', (req, res) => {
    res.render('home')
})


// This is to show all of the cards in the collection.
app.get('/cards', catchAsync(async (req, res) => {
    const cards = await Card.find({});
    res.render('cards/index', { cards });
}))


// Middleware that retrieves card name suggestions from the Scryfall API.
// Used to provide live autocomplete while the user types a card name.
app.get('/cards/autocomplete', catchAsync(async (req, res) => {
    const query = (req.query.q || '').trim();

    if (query.length < 2) {
        return res.json([]);
    }

    const response = await fetch(
        `https://api.scryfall.com/cards/autocomplete?q=${encodeURIComponent(query)}`,
        {
            headers: {
                'User-Agent': 'mtg-pal/1.0',
                'Accept': 'application/json'
            }
        }
    );

    const data = await response.json();

    if (!response.ok) {
        const error = new Error(
            data.details || 'Unable to search for cards.'
        );
        error.statusCode = response.status;
        throw error;
    }

    res.json(data.data);
}))

// Middleware that retrieves complete card information from the Scryfall API.
// This information is used to automatically fill out the new card form.
app.get('/cards/scryfall-card', catchAsync(async (req, res) => {
    const cardName = (req.query.name || '').trim();

    if (!cardName) {
        const error = new Error('Please provide a card name.');
        error.statusCode = 400;
        throw error;
    }

    const response = await fetch(
        `https://api.scryfall.com/cards/named?exact=${encodeURIComponent(cardName)}`,
        {
            headers: {
                'User-Agent': 'mtg-pal/1.0',
                'Accept': 'application/json'
            }
        }
    );

    const card = await response.json();

    if (!response.ok) {
        const error = new Error(
            card.details || 'Unable to find that card.'
        );
        error.statusCode = response.status;
        throw error;
    }

    res.json(card);
}))

app.get('/cards/printings/:oracleId', catchAsync(async (req, res) => {
    const { oracleId } = req.params;

    const query = encodeURIComponent(`oracleid:${oracleId}`);

    const response = await fetch(
        `https://api.scryfall.com/cards/search?unique=prints&order=released&q=${query}`,
        {
            headers: {
                'User-Agent': 'mtg-pal/1.0',
                'Accept': 'application/json'
            }
        }
    );

    const data = await response.json();

    if (!response.ok) {
        const error = new Error(
            data.details || 'Unable to load card printings.'
        );

        error.statusCode = response.status;
        throw error;
    }

    res.json(data.data);
}))

// Middleware that retrieves one specific card printing using its Scryfall ID.
app.get('/cards/printing/:scryfallId', catchAsync(async (req, res) => {
    const { scryfallId } = req.params;

    const response = await fetch(
        `https://api.scryfall.com/cards/${encodeURIComponent(scryfallId)}`,
        {
            headers: {
                'User-Agent': 'mtg-pal/1.0',
                'Accept': 'application/json'
            }
        }
    );

    const card = await response.json();

    if (!response.ok) {
        const error = new Error(
            card.details || 'Unable to load that printing.'
        );

        error.statusCode = response.status;
        throw error;
    }

    res.json(card);
}))

// Adds a new card to the collection.
// If the exact printing and finish already exist, its quantity is increased instead.
app.post('/cards', catchAsync(async (req, res) => {
    const scryfallId =
        (req.body.scryfallId || '').trim();

    const finish =
        (req.body.finish || '').trim();

    const quantity =
        Number(req.body.quantity);

    if (!scryfallId) {
        const error =
            new Error('Scryfall printing ID is required.');

        error.statusCode = 400;
        throw error;
    }

    if (
        !Number.isInteger(quantity) ||
        quantity < 1
    ) {
        const error =
            new Error(
                'Quantity must be a whole number of at least 1.'
            );

        error.statusCode = 400;
        throw error;
    }

    const cardData =
        await buildCardDataFromScryfall(
            scryfallId,
            finish,
            quantity
        );

    const existingCard = await Card.findOne({
        scryfallId: cardData.scryfallId,
        finish: cardData.finish
    });

    if (existingCard) {
        existingCard.quantity += quantity;

        await existingCard.save();

        return res.redirect('/cards');
    }

    const card = new Card(cardData);

    await card.save();

    res.redirect('/cards');
}));

// Middleware that returns one card as JSON.
// Used to populate the card details modal on the collection page.
app.get('/cards/:id/data', catchAsync(async (req, res) => {
    const card = await findCardOrThrow(req.params.id);

    res.json(card);
}))

// Updates a card's printing, finish, and quantity.
app.patch('/cards/:id', catchAsync(async (req, res) => {
    const { id } = req.params;

    await findCardOrThrow(id);

    const scryfallId =
        (req.body.scryfallId || '').trim();

    const finish =
        (req.body.finish || '').trim();

    const quantity =
        Number(req.body.quantity);

    if (
        !Number.isInteger(quantity) ||
        quantity < 1
    ) {
        const error =
            new Error(
                'Quantity must be a whole number of at least 1.'
            );

        error.statusCode = 400;
        throw error;
    }

    if (!scryfallId) {
        const error =
            new Error('Scryfall printing ID is required.');

        error.statusCode = 400;
        throw error;
    }

    const cardData =
        await buildCardDataFromScryfall(
            scryfallId,
            finish,
            quantity
        );

    // Checks whether another collection entry already uses
    // the selected printing and finish.
    const existingCard = await Card.findOne({
        _id: { $ne: id },
        scryfallId: cardData.scryfallId,
        finish: cardData.finish
    });

    // If it already exists, merge the quantities and
    // remove the card being edited.
    if (existingCard) {
        existingCard.quantity += quantity;

        await existingCard.save();

        await Card.findByIdAndDelete(id);

        return res.json({
            success: true,
            merged: true,
            cardId: existingCard._id
        });
    }

    // Otherwise, update the current card normally.
    const updatedCard = await Card.findByIdAndUpdate(
        id,
        cardData,
        {
            runValidators: true,
            returnDocument: 'after'
        }
    );

    res.json({
        success: true,
        merged: false,
        cardId: updatedCard._id
    });
}));

// Middleware that updates only the quantity of an existing card.
// Returns JSON so the quantity can be updated using AJAX without reloading the page.
app.patch('/cards/:id/quantity', catchAsync(async (req, res) => {
    const { id } = req.params;

    await findCardOrThrow(id);

    const updatedCard = await Card.findByIdAndUpdate(
        id,
        {
            quantity: req.body.quantity
        },
        {
            runValidators: true,
            returnDocument: 'after'
        }
    );

    res.json({
        success: true,
        quantity: updatedCard.quantity
    });
}));

// Middleware that deletes an existing card from the collection.
app.delete('/cards/:id', catchAsync(async (req, res) => {
    const { id } = req.params;

    await findCardOrThrow(id);
    await Card.findByIdAndDelete(id);

    res.redirect('/cards');
}))

// A higher-order function that returns another function
// which acts as Express middleware for async route handlers.
function catchAsync(fn) {
    return function (req, res, next) {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
}

// Helper function used by route middleware to validate card IDs.
// Throws errors for invalid or nonexistent cards.
async function findCardOrThrow(id) {
    if (!mongoose.isValidObjectId(id)) {
        const error = new Error('Invalid card ID.');
        error.statusCode = 400;
        throw error;
    }

    const card = await Card.findById(id);

    if (!card) {
        const error = new Error('Card not found.');
        error.statusCode = 404;
        throw error;
    }

    return card;
}

// Builds a complete MongoDB card object from one exact Scryfall printing.
async function buildCardDataFromScryfall(
    scryfallId,
    finish,
    quantity
) {
    const response = await fetch(
        `https://api.scryfall.com/cards/${encodeURIComponent(scryfallId)}`,
        {
            headers: {
                'User-Agent': 'mtg-pal/1.0',
                'Accept': 'application/json'
            }
        }
    );

    const printing = await response.json();

    if (!response.ok) {
        const error = new Error(
            printing.details ||
            'Unable to load selected printing.'
        );

        error.statusCode = response.status;
        throw error;
    }

    if (
        !printing.finishes ||
        !printing.finishes.includes(finish)
    ) {
        const error =
            new Error(
                'The selected finish is not available for this printing.'
            );

        error.statusCode = 400;
        throw error;
    }

    const parts =
        (printing.type_line || '')
            .split(/\s+[—–-]\s+/);

    const leftWords =
        (parts[0] || '')
            .trim()
            .split(/\s+/)
            .filter(Boolean);

    const rightWords =
        (parts[1] || '')
            .trim()
            .split(/\s+/)
            .filter(Boolean);

    const supertypes =
        leftWords.filter(word =>
            SUPERTYPES.includes(word)
        );

    const cardTypes =
        leftWords.filter(word =>
            !SUPERTYPES.includes(word)
        );

    return {
        name: printing.name,

        scryfallId: printing.id,
        oracleId: printing.oracle_id,

        setCode: printing.set,
        setName: printing.set_name,
        collectorNumber:
            printing.collector_number,

        manaCost:
            printing.mana_cost || '',

        typeLine:
            printing.type_line || '',

        supertypes,
        cardTypes,
        subtypes: rightWords,

        oracleText:
            printing.oracle_text || '',

        colors:
            printing.colors || [],

        colorIdentity:
            printing.color_identity || [],

        legalities:
            printing.legalities || {},

        rarity:
            printing.rarity
                ? printing.rarity.charAt(0).toUpperCase() +
                  printing.rarity.slice(1)
                : undefined,

        quantity,
        finish,

        imageUrl:
            printing.image_uris?.display || ''
    };
}

// Middleware that catches requests to nonexistent routes
// and forwards a 404 error to the centralized error handler.
app.use((req, res, next) => {
    const error = new Error('Page not found.');
    error.statusCode = 404;
    next(error);
});

// Centralized error-handling middleware.
// Handles all application errors and returns the appropriate HTTP response.
app.use((err, req, res, next) => {
    console.error(err);

    let statusCode = err.statusCode || 500;
    let message = err.message || 'Something went wrong.';

    if (err.name === 'ValidationError') {
        statusCode = 400;

        message = Object.values(err.errors)
            .map(validationError => validationError.message)
            .join(' ');
    }

    if (err.name === 'CastError') {
        statusCode = 400;
        message = 'Invalid card ID.';
    }

    res.status(statusCode).send(message);
});

app.listen(3000, () => {
    console.log('Hello There!');
})