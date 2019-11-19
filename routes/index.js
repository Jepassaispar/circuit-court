const express = require("express");
const router = express();
const businessModel = require("../Models/business");

// const marche = require("../Models/marche");

router.get("/", (req, res) => {
  res.render("index", {
    js: "app",
    css: ["baseStyle", "index"]
  });
});

router.post("/");

router.get("/mainPage", (req, res) => {
  businessModel
    .find()
    .then(dbRes => {
      const businesses = dbRes;
      res.render("mainPage", {
        js: "app",
        css: ["baseStyle", "mainPage"],
        businesses: businesses
      });
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

<<<<<<< HEAD

module.exports = router;
=======
router.get("/api", (req, res, next) => {
  businessModel.find({}, (error, allbusinessesFromDB) => {
    if (error) {
      next(error);
    } else {
      res.status(200).json({ businesses: allbusinessesFromDB });
    }
  });
});

module.exports = router;
>>>>>>> 9bf1bd657967c0457549152398254542213ce456
