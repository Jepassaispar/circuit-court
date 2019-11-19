// import {
//   unlink
// } from "/fs";

let map = document.querySelector("#map");

function initMap() {
  const map2 = new google.maps.Map(document.getElementById("map"), {
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
    map: map2,
    title: "I'm here"
  });
}

if (map !== null) {
  initMap();
}

///////////////////////////////////////////////////