const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CardSchema = new Schema(
{
    name: {
        type: String,
        required: [true, "Card name is required."],
        trim: true
    },

    // Scryfall ID identifies the exact printing of the card.
    scryfallId: {
        type: String,
        default: "",
        trim: true
    },

    // Oracle ID identifies the card across all of its different printings.
    oracleId: {
        type: String,
        default: "",
        trim: true
    },

    // Stores information about the specific printing of the card.
    setCode: {
        type: String,
        default: "",
        trim: true
    },

    setName: {
        type: String,
        default: "",
        trim: true
    },

    collectorNumber: {
        type: String,
        default: "",
        trim: true
    },

    manaCost: {
        type: String,
        default: "",
        trim: true
    },

    typeLine: {
        type: String,
        required: [true, "Type line is required."],
        trim: true
    },

    supertypes: {
        type: [String],
        default: []
    },

    cardTypes: {
        type: [String],
        default: []
    },

    subtypes: {
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

    legalities: {
        type: Map,
        of: String,
        default: {}
    },

    rarity: {
        type: String,
        enum: {
            values: ["Common", "Uncommon", "Rare", "Mythic"],
            message: "{VALUE} is not a valid rarity."
        }
    },

    quantity: {
        type: Number,
        default: 1,
        min: [1, "Quantity must be at least 1."],
        validate: {
            validator: Number.isInteger,
            message: "Quantity must be a whole number."
        }
    },

    imageUrl: {
        type: String,
        default: "",
        trim: true
    },

    backImageUrl: {
        type: String,
        default: ""
    },

    finish: {
    type: String,
    enum: {
        values: ['nonfoil', 'foil', 'etched'],
        message: '{VALUE} is not a valid finish.'
    },
    default: 'nonfoil'
    }
},
{
    timestamps: true
}
);

module.exports = mongoose.model("Card", CardSchema);