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

    typeLine: {
        type: String,
        required: true
    },

    superTypes: {
        type: [String],
        default: []
    },

    cardTypes: {
        type: [String],
        default: []
    },

    subTypes: {
        type: [String],
        default: []
    },

    oracleText: {
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

    rarity: {
        type: String,
        default: ""
    },

    imgUrl: {
        type: String,
        default: ""
    }
});

module.exports = mongoose.model('Card', CardSchema);