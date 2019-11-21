const express = require("express");
const router = express();
const businessModel = require("../Models/business");
const uploader = require("../config/cloudinary");

router.get("/mainPage", (req, res) => {
  businessModel
    .find()
    .then(dbRes => {
      const businesses = dbRes;
      const kindOfBusinesses = [...new Set(dbRes.map(b => b.kindOfBusines))];
      res.render("mainPage", {
        js: ["app", "filter"],
        css: ["baseStyle", "mainPage"],
        businesses: businesses,
        kindOfBusinesses: kindOfBusinesses
      });
    })

    .catch(err => console.log(err));
});

router.post("/filter-mainPage", (req, res) => {
  const query = {};
  if (req.body.zipcode.length > 0) {
    query.zipcode = req.body.zipcode;
    businessModel
      .find({
        "lieu.zipcode": query.zipcode
      })
      .then(dbRes => {
        res.send(dbRes);
      })
      .catch(err => console.log(err));
  } else {
    businessModel.find().then(dbRes2 => {
      const allbusinesses = dbRes2;
      res.send(allbusinesses);
    });
  }
});

router.get("/mainPage/:id", (req, res, next) => {
  businessModel
    .findById(req.params.id)
    .then(dbRes => {
      const business = dbRes;
      res.render("one-business", {
        business: business,
        css: ["baseStyle", "mainPage", "one-business"],
        js: "app"
      });
    })
    .catch(err => console.log("err"));
});

module.exports = router;
