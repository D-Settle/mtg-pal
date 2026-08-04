const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CardSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "Card name is required."],
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
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Card", CardSchema);