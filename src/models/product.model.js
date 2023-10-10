const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true
        },
        description: {
            type: String,
            trim: true
        },
        price: {
            type: Number,
            default: 0,
        },
        quality: {
            type: String,
            trim: true,
        },
        is_active: {
            type: Boolean,
            true: true,
        }

    },
    {
        timeseries: true,
        versionKey: false,
    }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;