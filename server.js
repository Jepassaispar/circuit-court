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
