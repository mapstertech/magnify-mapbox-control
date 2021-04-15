import addMagnifyingGlass from "./magnifyingGlass.js";
// const addMadnifyingGlass = require('addMadnifyingGlass');
mapboxgl.accessToken = 'pk.eyJ1IjoidGlwYW50aXphIiwiYSI6ImNrbXdoenRvajBmNm0ydnBmajF4dTFuMGwifQ._cjSUJ1hCE9U1jIudDJdTQ';


var map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/mapbox/streets-v11', // style URL
  center: [-74.5, 40], // starting position [lng, lat]
  zoom: 9 // starting zoom
});

addMagnifyingGlass(map)
