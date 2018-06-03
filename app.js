const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes/index");

// create our Express app
const app = express();

// set the template engine
app.set("view engine", "pug");

// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Fixing cors origin resource
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// After allllll that above middleware, we finally handle our own routes!
app.use("/", routes);

// done! we export it so we can start the site in start.js
module.exports = app;
