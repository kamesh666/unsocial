const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

app.use(bodyParser.json());

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(
    `Server is running on ${process.env.NODE_ENV} mode at http://localhost:${port}`
  );
});
