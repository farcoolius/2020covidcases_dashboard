mapboxgl.accessToken = "pk.eyJ1IjoiZmFyaGFzcyIsImEiOiJjbW0xOWt1b2MwN2s0MnNvYzFhNW5tZXRjIn0.woofAfgLav-FoAG30Mo0pg";

const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/light-v11",
    center: [-122.33, 47.61],
    zoom: 10
});

map.on("load", () => {

    map.addSource("collisions", {
        type: "geojson",
        data: "assets/collisions2024.geojson"
    });

    map.addLayer({
        id: "collisions-layer",
        type: "circle",
        source: "collisions",
        paint: {
            "circle-radius": 4,
            "circle-color": "red",
            "circle-opacity": 0.6
        }
    });

});
