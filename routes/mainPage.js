const express = require("express");
const router = express();
const businessModel = require("../Models/business");
const uploader = require("../config/cloudinary");

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

router.get("/mainPage/:id", (req, res, next) => {
    businessModel
        .findById(req.params.id)
        .then(dbRes => {
            const business = dbRes;
            res.render("one-business", {
                business: business,
                css: ["baseStyle", "mainPage"],
                js: "app"
            });
        })
        .catch(err => console.log("err"))
})

module.exports = router;