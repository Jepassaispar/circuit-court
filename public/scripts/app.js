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
  market: iconBase + "markettest_gs1jqp.png",
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
        scaledSize: new google.maps.Size(32, 32)
      },

      map: map,
      title: Business.name
    });
  });
}

////////////////////////////POP-UP ADDRESSES////////////////////////////

var schedules = document.querySelectorAll(".schedules");
var closePopUps = document.querySelectorAll(".closePopUps");

function toggleVisibility(i) {
  var popuptextId = document.getElementById(`popuptext${i}`);
  var popupId = document.getElementById(`popup${i}`);

  popupId.classList.toggle("show");
  popuptextId.classList.toggle("show");
}

function setListeners() {
  var schedules = document.querySelectorAll(".schedules");
  schedules.forEach((schedule, i) => {
    schedule.onclick = function() {
      console.log("yo");
      toggleVisibility(i);
    };
  });
}

setListeners();

function popUpsListeners() {
  var closePopUps = document.querySelectorAll(".closePopUps");
  closePopUps.forEach((closePopUp, i) => {
    closePopUp.onclick = function toggleVisibility() {
      var popuptextId = document.getElementById(`popuptext${i}`);
      var popupId = document.getElementById(`popup${i}`);
      popupId.classList.toggle("show");
      popuptextId.classList.toggle("show");
    };
  });
}

popUpsListeners();

export { setListeners, popUpsListeners, getBusinesses };
