const amapModel = require("../Models/amap");
const mongoose = require("mongoose");

const amaps = [
  {
    name: "Amap Du Marais",
    location: {
      type: "Point",
      coordinates: [48.867402, 2.356607] // longitude, latitude
    },
    bio: true,
    lieu: {
      adress: "58 Rue du Vertbois",
      zipcode: 75003
    },
    phone: "09 52 91 79 95",
    infos:
      "Nous aimons les légumes à la folie ! Mais sans maraicher.e pas de bon légumes... alors nous avons décidé de soutenir Loïc et Delphine agriculteurs, en leur achetant en direct et en avance, tomates, choux, betteraves, courgettes et potirons !",
    site: "http://amapdumarais.over-blog.com/",
    mail: "amap.marais@gmail.com",
    ouverture: {
      Lundi: "closed",
      Mardi: "18:00-20:30",
      Mercredi: "closed",
      Jeudi: "closed",
      Vendredi: "closed",
      Samedi: "closed",
      Dimanche: "closed"
    }
  },
  {
    name: "AMAP Ménil'sème",
    location: {
      type: "Point",
      coordinates: [48.866202, 2.394171] // longitude, latitude
    },
    bio: true,
    lieu: {
      adress: "4 Rue d'Annam",
      zipcode: 75020
    },
    phone: "06 41 51 20 91",
    infos:
      "Créée en 2008 dans le 20ème arrondissement de Paris, l’AMAP Ménil’sème propose des contrats de légumes, fruits, viande, volaille, pain, oeuf, huile, miel et tisanes. Nous sommes actuellement 60 adhérents et il nous reste encore des places et de nouveaux contrats à mettre en place. Venez nous rejoindre!",
    site: "https://menilseme.com/",
    mail: "menilseme@gmail.com",
    ouverture: {
      Lundi: "closed",
      Mardi: "closed",
      Mercredi: "closed",
      Jeudi: "18:00-20:00",
      Vendredi: "closed",
      Samedi: "closed",
      Dimanche: "closed"
    }
  },
  {
    name: "AMAP Trognons de la Nation",
    location: {
      type: "Point",
      coordinates: [48.848376, 2.37966] // longitude, latitude
    },
    bio: true,
    lieu: {
      adress: "8 Impasse Crozatier",
      zipcode: 75012
    },
    phone: "",
    infos:
      "L'association propose des contrats annuels avec un maraîcher bio (Jean Pacheco) dont la ferme est située dans le 77 ainsi qu'avec une boulangerie bio du 78 (Budibio). À cela s'ajoute des commandes ponctuels de différents produits (huile d'olive, miel, champignons, café zapatiste, spiruline, etc.)",
    site: "http://www.trognons.org/",
    mail: "amap.nation@gmail.com",
    ouverture: {
      Lundi: "closed",
      Mardi: "closed",
      Mercredi: "19:00-20:30",
      Jeudi: "closed",
      Vendredi: "closed",
      Samedi: "closed",
      Dimanche: "closed"
    }
  }
];

mongoose
  .connect("mongodb://localhost/circuit-court", {
    userNewUrlParser: true
  })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

amapModel
  .insertMany(amaps)
  .then(console.log("amaps have been sent to database"))
  .catch(err => console.log(err));
