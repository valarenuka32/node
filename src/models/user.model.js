const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true
        },
        email: {
            type: Number,
            trim: 0,
        },
        password: {
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

const User = mongoose.model("User", UserSchema);
module.exports = User;