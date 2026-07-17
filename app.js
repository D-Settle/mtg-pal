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

app.get('/', (req, res) => {
    res.render('home')
})


// This is to show all of the cards in the collection.
app.get('/cards', async (req, res) => {
    const cards = await Card.find({});
    res.render('cards/index', { cards });
})

// This is to show the new view to add a new card to the card collection
app.get('/cards/new', (req, res) => {
    res.render('cards/new');
})

// This is a Post function to add a new card to the collection.  it takes a form with multiple inputs and creates a new card object in the database
app.post("/cards", async (req, res) => {
    const cardData = buildCardData(req);

    const card = new Card(cardData);
    await card.save();

    res.redirect(`/cards/${card._id}`);
});

// This is to show the show view that shows all relevant information of the card you chose (each card is a link to their respected show page)
app.get('/cards/:id', async (req, res) => {
    const card = await Card.findById(req.params.id);
    res.render('cards/show', { card });
})

app.get('/cards/:id/edit', async (req, res) => {
    const card = await Card.findById(req.params.id);
    res.render('cards/edit', { card });
})

app.put("/cards/:id", async (req, res) => {
    const { id } = req.params;

    const cardData = buildCardData(req);

    await Card.findByIdAndUpdate(id, cardData);

    res.redirect(`/cards/${id}`);
});

app.delete('/cards/:id', async (req, res) => {
    const { id } = req.params;
    await Card.findByIdAndDelete(id);
    res.redirect('/cards');
})

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

    return {
        ...req.body.card,
        typeLine,
        supertypes,
        cardTypes,
        subtypes: rightWords,
        colors: req.body.card.colors || [],
        colorIdentity: req.body.card.colorIdentity || []
    };
}

app.listen(3000, () => {
    console.log('Hello There!');
})