const mongoose = require("mongoose");
const config = require("../config/config");

const connectDB = async () => {
    mongoose
        .connect(config.mongodb.url, config.mongodb.option)
        .then((data) => {
            console.log("Database connected successfully!");
        })
        .catch((error) => {
            console.log("Database connection error")
        });
};

module.exports = { connectDB };