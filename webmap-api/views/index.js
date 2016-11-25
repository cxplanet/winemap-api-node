<!-- index.ejs -->  
<% include _header %>  
<div id='map'></div>
<script>
mapboxgl.accessToken = '<your access token here>';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v9', //stylesheet location
    center: [-74.50, 40], // starting position
    zoom: 9 // starting zoom
});
</script>
<% include _footer %> 
