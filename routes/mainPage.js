const express = require("express");
const router = express();
const businessModel = require("../Models/business");
const uploader = require("../config/cloudinary");

router.get("/mainPage", (req, res) => {
  businessModel
    .find()
    .then(dbRes => {
      const businesses = dbRes;
      const kindOfBusinesses = [...new Set(dbRes.map(b => b.business))];
      const zipcodes = [...new Set(dbRes.map(b => b.lieu.zipcode))].sort(
        (a, b) => a - b
      );
      console.log("zip", zipcodes)
      res.render("mainPage", {
        js: ["app", "filter"],
        css: ["baseStyle", "mainPage"],
        businesses: businesses,
        kindOfBusinesses: kindOfBusinesses,
        zipcodes: zipcodes
      });
    })

    .catch(err => console.log(err));
});

router.post("/filter-mainPage", (req, res) => {
  const query = {};
  // check if req.body.data.zipicode no length;
  // else query.zipCode = req.body.data.zipCode,
  // check if business length
  // query.Business = req.....


  // { zipCode: [feafefafa], business: [faefafeafaefa]},
  // {business: ["d"'"'"'"]}
  // {}
  if (req.body.zipcode != undefined) {
    query.zipcode = req.body.zipcode;
    if (req.body.zipcode.length === 0) {
      businessModel.find().then(dbRes2 => {
        const allbusinesses = dbRes2;
        res.send(allbusinesses);
      });
    } else
      businessModel
      .find({
        "lieu.zipcode": query.zipcode
      })
      .then(dbRes => {
        res.send(dbRes);
      })
      .catch(err => console.log(err));
  } else if (req.body.kob != undefined) {
    query.kob = req.body.kob;
    if (req.body.kob.length === 0) {
      businessModel.find().then(dbRes2 => {
        const allbusinesses = dbRes2;
        res.send(allbusinesses);
      });
    } else {
      businessModel
        .find({
          business: query.kob
        })
        .then(dbRes => {
          res.send(dbRes);
        })
        .catch(err => console.log(err));
    }
  } else if (req.body.kob != undefined && req.body.zipcode != undefined) {
    query.kob = req.body.kob;
    query.zipcode = req.body.zipcode;
    if (req.body.kob.lengt === 0) {
      businessModel.find({
        $and: [{
          "lieu.zipcode": query.zipcode
        }, {
          "business": query.kob
        }]
      }).then(dBres3 => {
        console.log(dbRes3)
      })
    }
  }
});

// router.post("/filter-mainPage", (req, res) => {
//   const query = {};



//   console.log(query.zipcode);
//   console.log(query.kob)
//   query.zipcode = req.body.zipcode;
//   query.kob = req.body.kob;
//   if (req.body.zipcode.length === 0 && req.body.kob.length === 0) {
//     businessModel.find().then(dbRes => {
//       const allbusinesses = dbRes;
//       res.send(allbusinesses);
//     });
//   } else if (req.body.kob.length === 0) {
//     businessModel
//       .find({
//         "lieu.zipcode": query.zipcode
//       })
//       .then(dbRes => {
//         res.send(dbRes);
//       })
//       .catch(err => console.log(err));
//   } else if (req.body.zipcode.length === 0) {
//     businessModel
//       .find({
//         business: query.kob
//       })
//       .then(dbRes => {
//         res.send(dbRes);
//       })
//       .catch(err => console.log(err));
//   } else {
//     businessModel
//       .find({
//         $and: [{
//           "lieu.zipcode": query.zipcode
//         }, {
//           "business": query.kob
//         }]
//       })
//       .then(dbRes => console.log(dbRes))
//       .catch(err => console.lof(err))
//   }
// });


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