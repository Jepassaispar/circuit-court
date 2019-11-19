const mongoose = require('mongoose')
const gardenModel = require('../Models/jardin')

const gardens = [{
    name: "Le Potager de la Lune",
    location: {
      type: "Point",
      coordinates: [48.869834, 2.349906] // longitude, latitude
    },
    bio: true,
    lieu: {
      adress: "18 rue de la lune",
      zipcode: 75002
    },
    phone: "",
    infos: "Jardin partagé situé dans le square Bidault.",
    site: "www.facebook.com/potager2lalune",
    mail: "potagerdelalune@gmail.com",
    ouverture: {
      Lundi: "8:15-20:15",
      Mardi: "8:15-20:15",
      Mercredi: "8:15-20:15",
      Jeudi: "8:15-20:15",
      Vendredi: "8:15-20:15",
      Samedi: "9:00-20:15",
      Dimanche: "9:00-20:15"
    }
  },
  {
    name: "Le Potager des Oiseaux",
    location: {
      type: "Point",
      coordinates: [48.863062, 2.361531] // longitude, latitude
    },
    bio: true,
    lieu: {
      adress: "2-4 Rue des Oiseaux",
      zipcode: 75003
    },
    phone: "",
    infos: "Le Potager des Oiseaux, dans le 3e arrondissement, a été créé en 2004 dans un petit espace (120m2), jusque là en friche, et situé près du marché des Enfants rouges. Le projet de jardin partagé avait été affiché dès novembre 2003 après consultation du conseil de quartier Temple. L’association des Jardiniers du 3e s’est constituée en mars et le jardin a ouvert à la mi-mai. Les 10 rectangles (de chacun 3 parcelles de 1m2) ont été aménagés par le Service Espaces Verts de la Ville de Paris, sur le modèle adopté par le Jardin Nomade et par Papilles et papillons. L’association comprend aujourd’hui (2012) une quarantaine de membres. Il fonctionne sur le principe d’une gestion collective du jardin : 2 parcelles sont attribuées aux crèches et aux écoles, les 27 autres font l’objet d’un programme annuel de plantations avec un plan en couleurs affiché à l’entrée du jardin. On peut aussi y voir un jardin suspendu sur le toit de la cabane à outils, un micro jardin japonais, aménagé et entretenu par des jardiniers japonais de Paris ; le jardin comporte également un composteur, une fontaine.",
    site: "http://potagerdesoiseaux.blogspot.com/",
    mail: "potagerdesoiseaux@gmail.com",
    ouverture: {
      Lundi: "closed",
      Mardi: "closed",
      Mercredi: "closed",
      Jeudi: "closed",
      Vendredi: "closed",
      Samedi: "11:00-13:00",
      Dimanche: "11:00-13:00"
    }
  },
  {
    name: "Le Poireau Agile",
    location: {
      type: "Point",
      coordinates: [48.874618, 2.362334] // longitude, latitude
    },
    bio: true,
    lieu: {
      adress: "6 rue des Récollets",
      zipcode: 75010
    },
    phone: "",
    infos: "Jardin partagé géré par l’association `Ville Main Jardin` disposant de 50 parcelles pour une surface d’environ 220 m² de surface cultivable.",
    site: "https://sites.google.com/site/poireauagile/",
    mail: "lepoireauagile@yahoo.fr",
    ouverture: {
      Lundi: "8:00-20:30",
      Mardi: "8:00-20:30",
      Mercredi: "8:00-20:30",
      Jeudi: "8:00-20:30",
      Vendredi: "8:00-20:30",
      Samedi: "8:00-20:30",
      Dimanche: "8:00-20:30"
    }
  }
];

mongoose
  .connect('mongodb://localhost/circuit-court', {
    userNewUrlParser: true
  })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

gardenModel.insertMany(gardens)
  .then(console.log("amaps have been sent to database"))
  .catch(err => console.log(err))