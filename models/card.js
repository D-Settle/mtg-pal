const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CardSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    manaCost: {
        type: String,
        default: ""
    },

    cardType: {
        type: String,
        required: true
    },

    textBox: {
        type: String,
        default: ""
    },

    rarity: {
        type: String,
        default: ""
    },

    colors: {
        type: [String],
        default: []
    },

    colorIdentity: {
        type: [String],
        default: []
    },

    imgUrl: {
        type: String,
        default: ""
    }
});

module.exports = mongoose.model('Card', CardSchema);