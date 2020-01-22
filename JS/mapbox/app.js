// https://docs.mapbox.com/help/tutorials/local-search-geocoding-api/

mapboxgl.accessToken = 'pk.eyJ1Ijoic3lsdmFpbmxhbmdsZXIiLCJhIjoiY2s1aHdkaGlpMDdsZjNlbW0xaTF4cmI4cCJ9.6xV3Kw-7vjCks2xbbjcT-w';
  var map = new mapboxgl.Map({
    container: 'map', // Container ID
    style: 'mapbox://styles/mapbox/streets-v11', // Map style to use
    center: [2.539257, 46.584586 ], // Starting position [lng, lat]
    zoom: 5, // Starting zoom level
});