const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jardinSchema = new Schema({
  name: String,
  location: { type: { type: String }, coordinates: [Number] },
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

jardinSchema.index({ location: "2dsphere" });

const Jardin = mongoose.model("Jardin", jardinSchema);
module.exports = Jardin;
