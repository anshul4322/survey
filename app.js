const express = require("express");
const routes = require("./routes/v1");
const compression = require("compression");
const helmet = require("helmet");
const cors = require("cors");

const app = express();

app.use(helmet());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(compression());

app.use(cors());
app.options("*", cors());

app.use("/v1",routes)

module.exports = app;