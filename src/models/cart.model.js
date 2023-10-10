const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true
        },
        code: {
            type: Number,
            trim: 0,
        },
        price: {
            type: Number,
            default: 0,
        },
        User:{
            type:mongoose.Types.ObjectId,
             ref:"User",
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

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;