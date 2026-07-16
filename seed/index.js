const mongoose = require('mongoose');
const Card = require('../models/card');
const cards = require('./cards');

mongoose.connect('mongodb://localhost:27017/card-collection');

const seedDB = async () => {
    await Card.deleteMany({});
    await Card.insertMany(cards);
    console.log('cards seeded');
    mongoose.connection.close();
}

seedDB();