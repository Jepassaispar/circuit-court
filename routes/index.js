const express = require("express");
const router = express();
const businessModel = require("../Models/business");
const uploader = require("../config/cloudinary");

// const marche = require("../Models/marche");

router.get("/", (req, res) => {
  res.render("index", {
    js: ["index"],
    css: ["baseStyle", "index"]
  });
});

router.get("/api", (req, res, next) => {
  businessModel.find({}, (error, allbusinessesFromDB) => {
    if (error) {
      next(error);
    } else {
      res.status(200).json({
        businesses: allbusinessesFromDB
      });
    }
  });
});

router.get("/about", (req, res) => {
  res.render("about", {
    css: ["baseStyle", "about"]
  })
})


module.exports = router;