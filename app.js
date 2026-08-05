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

app.get('/', (req, res) => {
    res.render('home')
})


// This is to show all of the cards in the collection.
app.get('/cards', catchAsync(async (req, res) => {
    const cards = await Card.find({});
    res.render('cards/index', { cards });
}))

// This is to show the new view to add a new card to the card collection
app.get('/cards/new', (req, res) => {
    res.render('cards/new');
})

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

// SCRYFALL TESTING MIDDLEWARE
/*
app.get('/scryfall-test', catchAsync(async (req, res) => {
    const card = await fetchCardFromScryfall('Sol Ring');

    res.json(card);
}))
*/

// This is a Post function to add a new card to the collection.  it takes a form with multiple inputs and creates a new card object in the database
app.post("/cards", catchAsync(async (req, res) => {
    const cardData = buildCardData(req);

    const card = new Card(cardData);
    await card.save();

    res.redirect(`/cards/${card._id}`);
}));

// This is to show the show view that shows all relevant information of the card you chose (each card is a link to their respected show page)
app.get('/cards/:id', catchAsync(async (req, res) => {
    const card = await findCardOrThrow(req.params.id);
    res.render('cards/show', { card });
}))

// This is to show the edit view for an existing card.
app.get('/cards/:id/edit', catchAsync(async (req, res) => {
    const card = await findCardOrThrow(req.params.id);
    res.render('cards/edit', { card });
}))

// Middleware that updates all editable information for an existing card.
// Mongoose validators are run before the updated information is saved.
app.put("/cards/:id", catchAsync(async (req, res) => {
    const { id } = req.params;

    await findCardOrThrow(id);

    const cardData = buildCardData(req);

    await Card.findByIdAndUpdate(id, cardData, {
        runValidators: true
    });

    res.redirect(`/cards/${id}`);
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
            new: true
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

// Helper function that converts submitted form information into card data.
// It builds the type line and separates supertypes, card types, and subtypes.
function buildCardData(req) {
    const leftWords = req.body.leftType
        .trim()
        .split(/\s+/)
        .filter(Boolean);

    const rightWords = (req.body.rightType || "")
        .trim()
        .split(/\s+/)
        .filter(Boolean);

    const supertypes = leftWords.filter(word =>
        SUPERTYPES.includes(word)
    );

    const cardTypes = leftWords.filter(word =>
        !SUPERTYPES.includes(word)
    );

    const typeLine =
        leftWords.join(" ") +
        (rightWords.length
            ? ` — ${rightWords.join(" ")}`
            : "");

    const cardData = {
        ...req.body.card,
        typeLine,
        supertypes,
        cardTypes,
        subtypes: rightWords,
        colors: req.body.card.colors || [],
        colorIdentity: req.body.card.colorIdentity || []
    };

    if (cardData.rarity === '') {
        delete cardData.rarity;
    }

    return cardData;
}

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


// Helper function that retrieves card information from the Scryfall API.
// Throws an error if Scryfall cannot find or return the requested card.
async function fetchCardFromScryfall(cardName) {
    const response = await fetch(
        `https://api.scryfall.com/cards/named?fuzzy=${encodeURIComponent(cardName)}`,
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
            data.details || 'Unable to find that card on Scryfall.'
        );

        error.statusCode = response.status;
        throw error;
    }

    return data;
}

app.listen(3000, () => {
    console.log('Hello There!');
})