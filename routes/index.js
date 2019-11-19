const express = require("express");
const router = express();
const amapModel = require("../Models/amap");
const gardenModel = require("../Models/jardin");
const marketModel = require("../Models/marche");

// const marche = require("../Models/marche");

router.get("/", (req, res) => {
  res.render("index", {
    js: "app",
    css: ["baseStyle", "index"]
  });
});

router.post("/");

router.get("/mainPage", (req, res) => {
  gardenModel
    .find()
    .then(dbRes => {
      const gardens = dbRes;
      amapModel
        .find()
        .then(dbRes2 => {
          const amaps = dbRes2;
          marketModel
            .find()
            .then(dbRes3 => {
              const markets = dbRes3;
              res.render("mainPage", {
                js: "app",
                css: ["baseStyle", "mainPage"],
                gardens: gardens,
                amaps: amaps,
                markets: markets
              });
            })
            .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
});

router.get("/logIn", (req, res) => {
  res.render("logIn", {
    css: ["baseStyle", "sign"]
  });
});

router.get("/signUp", (req, res) => {
  res.render("signUp", {
    css: ["baseStyle", "sign"]
  });
});

module.exports = router;
