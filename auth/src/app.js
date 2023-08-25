const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

app.use(bodyParser.json());

app.get("*", (req, res) => {
  res.status(200).send({});
});

module.exports = app;
