const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const marcheSchema = new Schema({
  name: String,
  location: {
    type: [Number], // longitude, latitude
    index: "2d"
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
    default: ""
  }
});

const Marche = mongoose.model("Marche", marcheSchema);
module.exports = Marche;