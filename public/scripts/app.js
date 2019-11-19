let mapDisplay = document.querySelector("#mapDisplay");

function initMap() {
  const map = new google.maps.Map(document.getElementById("mapDisplay"), {
    center: {
      lat: 48.865965,
      lng: 2.341197
    },
    zoom: 12
  });
  const myMarker = new google.maps.Marker({
    position: {
      lat: 48.882793,
      lng: 2.323771
    },
    map: map,
    title: "I'm here"
  });
}

if (mapDisplay !== null) {
  initMap();
}
