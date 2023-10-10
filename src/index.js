const express = require("express");
const http = require("http");
const fs = require("fs");
const { connectDB } = require("./db/dbconnecion")
const config = require("./config/config");
const routes = require("./routes");
const bodyParser=require("body-parser");

const app = express();

connectDB();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use("/v1", routes);

const server = http.createServer(app);

server.listen(config.port, () => {
    console.log(`server connrcted successfully!${config.port}`);
});