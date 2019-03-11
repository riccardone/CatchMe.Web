import React, { Component } from "react";
import MapboxGl from "mapbox-gl";
import "./mapbox-v051.css";
import "./map.css";
import PosMeIcon from "../images/geolocation_marker.png";
import PosFriendIcon from "../images/geolocation_marker_red.png";

class MapPresentational extends Component {
    componentDidMount() {
        MapboxGl.accessToken = 'pk.eyJ1IjoicmljY2FyZG9uZSIsImEiOiJqbXBIcDlFIn0.SuzRGlZwV_OJKyNH9DtJJg'
        var _this = this;
        _this.map = new MapboxGl.Map(_this.props.viewport)
        _this.map.addControl(new MapboxGl.AttributionControl(), "top-right")
        _this.map.addControl(new MapboxGl.NavigationControl())
        // Add geolocate control to the map.
        _this.map.addControl(new MapboxGl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: true,
            showUserLocation: true
        }));

        var ciccio = this.map.addMarker;

        var currentUserMarker = {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-77.032, 38.913]
            }
        };

        var geojson = {
            type: 'FeatureCollection',
            features: [{
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [-77.032, 38.913]
                },
                properties: {
                    title: 'Mapbox',
                    description: 'Washington, D.C.'
                }
            },
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [-122.414, 37.776]
                },
                properties: {
                    title: 'Mapbox',
                    description: 'San Francisco, California'
                }
            }]
        };
        // new MapboxGl.Marker(el)
        //     .setLngLat(marker.geometry.coordinates)
        //     .addTo(_this.map);

        const image = new Image(22, 22);
        image.src = PosMeIcon;

        const friendImg = new Image(22, 22);
        friendImg.src = PosFriendIcon;

        const images = ["myImage", image];
        const imagesForFriend = ["myFriendImage", friendImg];

        // add markers to map
        geojson.features.forEach(function (marker) {

            // create a HTML element for each feature
            var el = document.createElement('div');
            el.className = 'marker';

            // make a marker for each feature and add to the map
            new MapboxGl.Marker(el)
                .setLngLat(marker.geometry.coordinates)
                .addTo(_this.map);
        });
    }

    componentWillReceiveProps(nextprops) {
        this.map.setCenter(nextprops.viewport.center);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
        // return (
        //     nextProps.viewport.center !== this.props.viewport.center
        // )
    }

    render() {
        const { isAuthenticated } = this.props.auth;

        const style = {
            top: 0,
            bottom: 0,
            margin: 0,
            padding: 0,
            height: "82vh",
            width: "100vw"
        };

        return (
            <div>
                {isAuthenticated() && <div id="map" style={style} />}
            </div>
        );
    }
}

export default MapPresentational;
