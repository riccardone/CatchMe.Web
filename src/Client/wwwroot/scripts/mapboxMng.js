window.mapBoxFunctions = {
    initMapBox: function () {
        if ("geolocation" in navigator) {
            mapboxgl.accessToken = 'pk.eyJ1IjoicmljY2FyZG9uZSIsImEiOiJqbXBIcDlFIn0.SuzRGlZwV_OJKyNH9DtJJg';
            var defaultZoom = 14;
            navigator.geolocation.getCurrentPosition(position => {
                window.myMap = new mapboxgl.Map({
                    container: 'map',
                    style: 'mapbox://styles/mapbox/streets-v11',
                    center: [position.coords.longitude, position.coords.latitude],
                    zoom: defaultZoom
                });
                var geoLocate = new mapboxgl.GeolocateControl({
                    positionOptions: {
                        enableHighAccuracy: true
                    },
                    trackUserLocation: true
                });
                geoLocate.on('geolocate', function (e) {
                    myMap.setZoom(defaultZoom);
                });
                window.myMap.addControl(geoLocate);
                window.myMap.on('load',
                    function () {
                        myMap.resize();
                        geoLocate.trigger();
                        
                    });
            });
        } else {
            /* geolocation IS NOT available, handle it */
            console.log("not available");
        }

        return;
    }
};