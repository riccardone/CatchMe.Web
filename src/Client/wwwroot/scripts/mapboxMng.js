window.mapBoxFunctions = {
    initMapBox: function () {
        mapboxgl.accessToken = 'pk.eyJ1IjoicmljY2FyZG9uZSIsImEiOiJqbXBIcDlFIn0.SuzRGlZwV_OJKyNH9DtJJg';
        window.myMap = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [34.047, 63.779],
            zoom: 4.41
        });
        return;
    }
};