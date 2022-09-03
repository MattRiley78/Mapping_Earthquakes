// Create the map object with a center and zoom level.
let map = L.map("mapid", {
    center: [37.5, -122.5],
    zoom: 10
  });

// // Coordinates for each point to be used in the line.
// let line =[
//   [37.6213, -122.3790],
//   [30.1975, -97.6664],
//   [35.0421, -89.9792],
//   [43.6777, -79.6248],
//   [40.6413, -73.7781]
// ];
// // Create a polyline using the line coordinates and make the line blue and dashed.
// L.polyline(line, {
//   color: "blue",
//   dashArray: '10, 10'
// }).addTo(map);

// TILE LAYER METHOD 1:  FROM LEAFLET QUICK START GUIDE
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox/streets-v11',
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken: API_KEY
// });
// // Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);


// TILE LAYER METHOD 2: MAPBOX STYLES API
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-night-v1/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// // Get array of cities data from cities.js
// let cityData = cities;

// // Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//   console.log(city)
//   L.circleMarker(city.location, {
//     radius: city.population/100000,
//     color: "orange",
//     lineweight: 4

//   })
//   .bindPopup("<h2>" + city.city + ", " + city.state + "</h2><hr> <h3> Population: " + city.population.toLocaleString() + "</h3")
//   .addTo(map);
//  });

// // Grabbing our GeoJSON data, using pointToLayer function.
// L.geoJSON(sanFranAirport, {
//   // Turn each feature into a marker on the map.
//   pointToLayer: function(feature, latlng) {
//     console.log(feature);
//     return L.marker(latlng)
//     .bindPopup("<h2>" + feature.properties.name + "</h2><hr><h3>" + feature.properties.city +", " + feature.properties.country + "</h3>");
//   }
// }).addTo(map);

// Grabbing our GeoJSON data, using onEachFeature function.
L.geoJSON(sanFranAirport, {
  onEachFeature: function(feature, layer) {
    console.log(layer);
    layer.bindPopup("<h3>Airport Code: " + feature.properties.faa + "</h3><hr><h4>Airport Name: " + feature.properties.name + "</h4>");
  }
}).addTo(map);

// Add console.log to check to see if our code is working.
console.log("working");