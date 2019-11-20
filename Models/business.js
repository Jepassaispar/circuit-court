const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const businessSchema = new Schema({
  name: String,
  business: {
    type: String,
    enum: ["garden", "market", "amap"]
  },
  location: {
    type: {
      type: String
    },
    coordinates: [Number]
  },
  bio: Boolean,
  lieu: {
    adress: String,
    zipcode: Number
  },
  phone: String,
  infos: String,
  site: String,
  mail: String,
  ouverture: {
    Lundi: String,
    Mardi: String,
    Mercredi: String,
    Jeudi: String,
    Vendredi: String,
    Samedi: String,
    Dimanche: String
  },
  image: {
    type: String,
    default:
      "https://static.aujardin.info/cache/th/img8/potager-carres-600x450.webp?1"
  }
});

businessSchema.index({
  location: "2dsphere"
});
const business = mongoose.model("business", businessSchema);
module.exports = business;
