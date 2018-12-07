import React, { Component } from 'react';
import NavBarTop from '../navbar.top';
import Footer from '../footer';
import ReactMapboxGl, { Layer, Feature, ZoomControl } from "react-mapbox-gl";
import { ToastContainer, toast } from 'react-toastify';
import './mapbox-v051.css';
import './map.css';
import PosMeIcon from "../images/geolocation_marker.png";
import PosFriendIcon from "../images/geolocation_marker_red.png";

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        center: [-0.109970527, 51.52916347],
        bearing: 0,
        pitch: 0,
        width: 500,
        height: 500,
        zoom: [18]
      }
    };
    this.map = ReactMapboxGl({
      accessToken: "pk.eyJ1IjoicmljY2FyZG9uZSIsImEiOiJqbXBIcDlFIn0.SuzRGlZwV_OJKyNH9DtJJg"
    });
    // preserve the initial state in a new object
    this.baseState = this.state;
  }

  componentWillMount() {
    var _this = this;
    _this._locateUser();
  }

  componentDidMount() {
    // var _this = this;
    // setInterval(function () {
    //   _this._locateUser();     
    // }, 3000);
  }

  login() {
    this.props.auth.login();
  }

  onMapLoad = (map) => {
    // map.addControl(Navigation({
    //   positionOptions: {
    //     enableHighAccuracy: true
    //   },
    //   trackUserLocation: true
    // }));
    //this._locateUser();
    map.resize();
  };

  _onClickMap(map, evt) {
    //console.log(evt.lngLat);
    // var img = new Image(22, 22);
    // img.src = PosFriendIcon;
    map.flyTo({ center: [evt.lngLat.lng, evt.lngLat.lat] });
    //var ciccio = map.getlayers();
    // map.addLayer({
    //   id: 'friend',
    //   type: 'symbol',
    //   layout: { "icon-image": "myImage", "icon-allow-overlap": true },
    //   images: ["myImage", img]
    // source: {
    //   type:'geojson',
    //   data: {
    //     type: 'Feature',
    //     properties: {},
    //     geometry: {
    //       coordinates: [evt.lngLat.lng, evt.lngLat.lat]
    //     }
    //   }
    // }
    //feature: { coordinates: [evt.lngLat.lng, evt.lngLat.lat] }
    // });
  }

  _locateUser() {
    navigator.geolocation.getCurrentPosition(position => {
      var state = this.state.viewport;
      state.center = [position.coords.longitude, position.coords.latitude];
      this.setState({ viewport: state });
    });
  }

  _updateViewport(coords) {
    var state = this.state.viewport;
    state.longitude = coords.longitude;
    state.latitude = coords.latitude;
    this.setState({ viewport: state });
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    const { zoom, center } = this.state.viewport;

    // const Map = ReactMapboxGl({
    //   accessToken: "pk.eyJ1IjoicmljY2FyZG9uZSIsImEiOiJqbXBIcDlFIn0.SuzRGlZwV_OJKyNH9DtJJg"
    // });

    const Map = this.map;

    const image = new Image(22, 22);
    image.src = PosMeIcon;

    const friendImg = new Image(22, 22);
    friendImg.src = PosFriendIcon;

    const images = ["myImage", image];
    const imagesForFriend = ["myFriendImage", friendImg];

    return (
      <div>
        <NavBarTop auth={this.props.auth} {...this.props} />
        <div className="container map">
          <ToastContainer
              hideProgressBar
              newestOnTop
          />
          {
            isAuthenticated() &&
            <Map
              //{...this.state.viewport}                
                style="mapbox://styles/mapbox/streets-v9"
                containerStyle={{
                height: "100vh",
                width: "100vw"
              }}
                movingMethod="flyTo"
                center={center}
                zoom={zoom}
                onStyleLoad={this.onMapLoad}
                onClick={this._onClickMap}
            >
              <Layer
                  type="symbol"
                  id="marker"
                  layout={{ "icon-image": "myImage", "icon-allow-overlap": true }}
                  images={images}
              >
                <Feature coordinates={center} />
              </Layer>
              <Layer
                  type="symbol"
                  id="friend"
                  layout={{ "icon-image": "myFriendImage", "icon-allow-overlap": true }}
                  images={imagesForFriend}
              >
                {/* <Feature coordinates={center} /> */}
              </Layer>
              <ZoomControl />
            </Map>
          }
          {
            !isAuthenticated() &&
            <h4>
              You are not logged in! Please{' '}
              <a
                  style={{ cursor: 'pointer' }}
                  onClick={this.login.bind(this)}
              >
                Log In
                </a>
              {' '}to continue.
              </h4>
          }
        </div>
        <Footer />
      </div>
    );
  }
}

export default Map;
