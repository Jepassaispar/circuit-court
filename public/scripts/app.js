let map = document.querySelector("#map");

function initMap() {
  const map2 = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8
  });
}

if (map !== null) {
  initMap();
}
