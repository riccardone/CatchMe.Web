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
                    window.myMap.setZoom(defaultZoom);
                });
                window.myMap.addControl(geoLocate);
                window.myMap.on('load',
                    function () {
                        window.myMap.resize();
                        geoLocate.trigger();
                    });
            });
            // TODO set the central interval to handle positions
            //setInterval(function () {
            //    navigator.geolocation.getCurrentPosition(position => {
            //        console.log("position is longitude: " + position.coords.longitude + " latitude: " + position.coords.latitude);
            //        DotNet.invokeMethodAsync('CatchMe.Web.Client', 'RefreshCurrentUserAsync')
            //            .then(data => {
            //                data.push(position);
            //                console.log(data);
            //            });
            //    });
            //}, 5000);
        } else {
            /* geolocation IS NOT available, handle it */
            console.log("not available");
        }

        return;
    },
    getLocation: function () {
        console.log("getlocation called");
        var myPromise = new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
                position => {
                    let geoLocation = {
                        Latitude: position.coords.latitude,
                        Longitude: position.coords.longitude,
                        Accuracy: position.coords.accuracy
                        //Altitude: position.coords.altitude.toString()
                    }
                    console.log("location found");
                    resolve(geoLocation);
                },
                error => {
                    console.log(error);
                    reject(error);
                }
            );
        }).catch(error => error);
        return myPromise;
    }
};