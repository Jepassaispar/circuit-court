const businessModel = require("../Models/business");
const mongoose = require("mongoose");

const businesses = [
  {
    name: "Amap Du Marais",
    business: "amap",
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
    business: "amap",
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
    business: "amap",
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
  },
  {
    name: "Le Potager de la Lune",
    business: "garden",
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
    business: "garden",
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
    infos:
      "Le Potager des Oiseaux, dans le 3e arrondissement, a été créé en 2004 dans un petit espace (120m2), jusque là en friche, et situé près du marché des Enfants rouges. Le projet de jardin partagé avait été affiché dès novembre 2003 après consultation du conseil de quartier Temple. L’association des Jardiniers du 3e s’est constituée en mars et le jardin a ouvert à la mi-mai. Les 10 rectangles (de chacun 3 parcelles de 1m2) ont été aménagés par le Service Espaces Verts de la Ville de Paris, sur le modèle adopté par le Jardin Nomade et par Papilles et papillons. L’association comprend aujourd’hui (2012) une quarantaine de membres. Il fonctionne sur le principe d’une gestion collective du jardin : 2 parcelles sont attribuées aux crèches et aux écoles, les 27 autres font l’objet d’un programme annuel de plantations avec un plan en couleurs affiché à l’entrée du jardin. On peut aussi y voir un jardin suspendu sur le toit de la cabane à outils, un micro jardin japonais, aménagé et entretenu par des jardiniers japonais de Paris ; le jardin comporte également un composteur, une fontaine.",
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
    business: "garden",
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
    infos:
      "Jardin partagé géré par l’association `Ville Main Jardin` disposant de 50 parcelles pour une surface d’environ 220 m² de surface cultivable.",
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
  },
  {
    name: "Marché bio de La Halle Aubervilliers",
    business: "market",
    location: {
      type: "Point",
      coordinates: [48.88999, 2.37151] // longitude, latitude
    },
    bio: true,
    lieu: {
      adress: "5 Rue Curial",
      zipcode: 75019
    },
    phone: "01 53 35 50 00",
    infos:
      "Tous les samedis, de 11h à 14h dans le 19ème arrondissement de Paris, la Halle Aubervilliers se transforme en marché bio et local. Devant vous, un large choix de produits locaux, artisanaux, directement venu des fermes d’Ile de France. Vous trouverez des fruits et légumes bio de saison, à des prix raisonnables. Pour quinze euros environ vous remplirez un très grand panier de légumes irréguliers, avec généralement un peu de terre dessus (et c’est ça les vrais légumes !). L'un des meilleurs marchés bio de Paris !",
    site: "http://www.104.fr/",
    mail: "contact@104.fr.",
    ouverture: {
      Lundi: "closed",
      Mardi: "closed",
      Mercredi: "closed",
      Jeudi: "closed",
      Vendredi: "closed",
      Samedi: "11:00-15:00",
      Dimanche: "closed"
    }
  },
  {
    name: "Marché biologique de Brancusi",
    business: "market",
    location: {
      type: "Point",
      coordinates: [48.836987, 2.320946] // longitude, latitude
    },
    bio: true,
    lieu: {
      adress: "Place Constantin Brancusi",
      zipcode: 75014
    },
    phone: "01 48 85 93 30",
    infos:
      "Dans le 14ème arrondissement de Paris, place Constantin Brancusi, le petit marché bio de quartier qui s’y trouve tous les samedis est un véritable repère pour les amoureux des circuits courts.",
    site: "https://www.paris.fr/equipements/marche-biologique-brancusi-4516",
    mail: "",
    ouverture: {
      Lundi: "closed",
      Mardi: "closed",
      Mercredi: "closed",
      Jeudi: "closed",
      Vendredi: "closed",
      Samedi: "9:00-15:00",
      Dimanche: "closed"
    }
  },
  {
    name: "Marché bio des Batignolles",
    business: "market",
    location: {
      type: "Point",
      coordinates: [48.882793, 2.323771] // longitude, latitude
    },
    bio: true,
    lieu: {
      adress: "34 Boulevard des Batignolles",
      zipcode: 75008
    },
    phone: "01 45 11 71 11",
    infos:
      "Le marché bio des Batignolles propose le meilleur, dans une ambiance familiale et conviviale. Chaque samedi matin, en vous promenant le long des stands des producteurs vous trouverez mille et une saveurs, senteurs et couleurs. Plus d’une cinquantaine de commerçants et producteurs tiennent la place pour vanter leurs marchandises aussi belles que saines. Difficile de ne pas céder à la tentation et à la gourmandise en sachant que tous les produits sont aussi bons.",
    site:
      "https://www.parisinfo.com/shopping/73862/Marche-biologique-des-Batignolles",
    mail: "",
    ouverture: {
      Lundi: "closed",
      Mardi: "closed",
      Mercredi: "closed",
      Jeudi: "closed",
      Vendredi: "closed",
      Samedi: "8:00-13:30",
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

businessModel
  .insertMany(businesses)
  .then(console.log("amaps have been sent to database"))
  .catch(err => console.log(err));
