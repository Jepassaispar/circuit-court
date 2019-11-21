require("dotenv").config();
require("./config/mongodb");

const express = require("express");
const app = express();
const hbs = require("hbs");
const session = require("express-session");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo")(session);
const path = require("path");

app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
app.use(express.static("public"));
hbs.registerPartials(__dirname + "/views/partials");
app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    cookie: {
      maxAge: 60000
    }, // in millisec
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 24 * 60 * 60 // 1 day
    }),
    saveUninitialized: true,
    resave: true
  })
);

function checkloginStatus(req, res, next) {
  res.locals.user = req.session.currentUser ? req.session.currentUser : null;
  // access this value @ {{user}} or {{user.prop}} in .hbs
  res.locals.isLoggedIn = Boolean(req.session.currentUser);
  // access this value @ {{isLoggedIn}} in .hbs
  next(); // continue to the requested route
}

function eraseSessionMessage() {
  var count = 0; // initialize counter in parent scope and use it in inner function
  return function (req, res, next) {
    if (req.session.msg) {
      // only increment if session contains msg
      if (count) {
        // if count greater than 0
        count = 0; // reset counter
        req.session.msg = null; // reset message
      }
      ++count; // increment counter
    }
    next(); // continue to the requested route
  };
};

app.use(checkloginStatus);
app.use(eraseSessionMessage());

const bcrypt = require("bcryptjs");
const saltRounds = 10;

app.locals.site_url = process.env.SITE_URL;

const listener = app.listen(process.env.PORT, () => {
  console.log(`app started at ${process.env.SITE_URL}:${process.env.PORT}`);
});

const index = require("./routes/index");
const mainPage = require("./routes/mainPage");
const sign = require("./routes/sign");
const manageBusinesses = require("./routes/manage-businesses");

app.use("/", index);
app.use("/", mainPage);
app.use("/", sign)
app.use("/", manageBusinesses)

module.exports = app;