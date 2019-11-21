const express = require("express");
const router = express();
const businessModel = require("../Models/business");
const uploader = require("../config/cloudinary");

router.get("/manage-businesses", (req, res, next) => {
  businessModel.find().then(dbRes => {
    const businesses = dbRes;
    res.render("manage-businesses", {
      css: ["baseStyle", "mainPage", "manage-businesses"],
      businesses: businesses
    });
  });
});

module.exports = router;

router.post("/create-product", (req, res) => {
  const createdBusiness = {
    name: req.body.name,
    business: req.body.category,
    bio: req.body.bio.checked,
    lieu: {
      adress: req.body.adress,
      zipcode: req.body.zipcode
    },
    phone: req.body.phone,
    infos: req.body.info,
    site: req.body.site,
    mail: req.body.mail,
    ouverture: {
      lundi: req.body.lundi,
      mardi: req.body.mardi,
      mercredi: req.body.mercredi,
      jeudi: req.body.jeudi,
      vendredi: req.body.vendredi,
      samedi: req.body.samedi,
      dimanche: req.body.dimanche
    },
    image: req.body.image
  };
  businessModel
    .create(createdBusiness)
    .then(dbRes => {
      console.log("data well entered in database");
      res.redirect("/mainPage");
    })
    .catch(err => console.log(err));
});

router.post("/product-delete/:id", (req, res) => {
  businessModel
    .findByIdAndDelete(req.params.id)
    .then(res.redirect("/manage-businesses"));
});

router.get("/product-edit/:id", (req, res) => {
  Promise.all([businessModel.findById(req.params.id)])
    .then(dbRes => {
      const business = dbRes[0];
      res.render("product_edit", {
        business
      });
    })
    .catch(err => console.log(err));
});

router.post("/product-edit/:id", (req, res) => {
  const editedBusiness = {
    name: req.body.name,
    business: req.body.category,
    bio: req.body.bio.checked,
    lieu: {
      adress: req.body.adress,
      zipcode: req.body.zipcode
    },
    phone: req.body.phone,
    infos: req.body.info,
    site: req.body.site,
    mail: req.body.mail,
    ouverture: {
      lundi: req.body.lundi,
      mardi: req.body.mardi,
      mercredi: req.body.mercredi,
      jeudi: req.body.jeudi,
      vendredi: req.body.vendredi,
      samedi: req.body.samedi,
      dimanche: req.body.dimanche
    },
    image:
      "https://static.aujardin.info/cache/th/img8/potager-carres-600x450.webp?1"
  };
  if (req.file) {
    editedBusiness.image = req.file.secure_url;
  } else
    businessModel
      .findByIdAndUpdate(req.params.id, editedBusiness)
      .then(dbRes => {
        res.redirect("/");
      });
});
