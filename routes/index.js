const express = require("express");
const router = express();
// const marche = require("../Models/marche");

router.get("/", (req, res) => {
  res.render("index", {
    js: "app",
    css: ["baseStyle", "index"]
  });
});

router.get("/mainPage", (req, res) => {
  res.render("mainPage", {
    js: "app",
    css: ["baseStyle", "mainPage"]
  });
});

router.get("/signUp", (req, res) => {
  res.render("signUp", {
    css: ["sign", "baseStyle"]
  });
});

router.get("/logIn", (req, res) => {
  res.render("logIn", {
    css: ["sign", "baseStyle"]
  });
});

module.exports = router;
