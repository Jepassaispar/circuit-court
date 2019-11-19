let mapDisplay = document.querySelector("#mapDisplay");
const map = new google.maps.Map(document.getElementById("mapDisplay"), {
  center: {
    lat: 48.865965,
    lng: 2.341197
  },
  zoom: 12
});

var iconBase =
  "https://res.cloudinary.com/dawdmintj/image/upload/v1573824978/user-pictures/";
var icons = {
  market: iconBase + "greenmarker_gancfg.png",
  amap: iconBase + "google-map-icon-png-8_bloyi7.png",
  garden: iconBase + "yellowmarker2_m5ah3a.png"
};

function initMap() {
  getBusinesses();
}

if (mapDisplay !== null) {
  initMap();
}

function getBusinesses() {
  axios
    .get("/api")
    .then(apiRes => {
      console.log(apiRes);
      placeBusinesses(apiRes.data.businesses);
    })
    .catch(error => {
      console.log(error);
    });
}

function placeBusinesses(dataBusinesses) {
  dataBusinesses.forEach(Business => {
    const longitude = Business.location.coordinates[1];
    const latitude = Business.location.coordinates[0];
    const type = Business.business;
    const markers = new google.maps.Marker({
      position: {
        lat: latitude,
        lng: longitude
      },
      icon: {
        url: icons[type],
        scaledSize: new google.maps.Size(20, 32)
      },

      map: map,
      title: Business.name
    });
  });
}
