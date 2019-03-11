import React, { Component } from "react";
import mapboxgl from "mapbox-gl";
import moment from "moment";
import NavBarTop from "../navbar.top";
import Footer from "../footer";
import { ToastContainer, toast } from "react-toastify";
import Bus from "../bus";
import "./mapbox-v051.css";
import "./map.css";
// import PosMeIcon from "../images/geolocation_marker.png";
// import PosFriendIcon from "../images/geolocation_marker_red.png";
var bus = Bus();
var friendSessionOn = false;

mapboxgl.accessToken =
  "pk.eyJ1IjoicmljY2FyZG9uZSIsImEiOiJqbXBIcDlFIn0.SuzRGlZwV_OJKyNH9DtJJg";

class Map2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        center: [0, 0],
        bearing: 0,
        pitch: 0,
        zoom: [18],
        container: "map",
        style: "mapbox://styles/mapbox/streets-v9"
      }
    };
    // preserve the initial state in a new object
    this.baseState = this.state;
    this.subscribeForEvents();
  }

  componentDidMount() {
    this._initMap();
  }

  componentWillUnmount() {
    if (this.map) {
      this.map.remove();
    }
  }

  subscribeForEvents = () => {
    var _this = this;
    bus.subscribe("UserAuthenticated", function () {
      setInterval(function () {
        _this._locateUser();
      }, 5000);
    });
  }

  login() {
    this.props.auth.login();
  }

  _locateUser() {
    if (friendSessionOn) {
      navigator.geolocation.getCurrentPosition(position => {
        this._updatePosition(position);
      });
    }
  }

  _initMap = () => {
    var _this = this;
    navigator.geolocation.getCurrentPosition(position => {
      var state = _this.state.viewport;
      this._updatePosition(position);
      _this.map = new mapboxgl.Map(_this.state.viewport);
      _this.map.addControl(new mapboxgl.NavigationControl());
      this.map.flyTo({
        center: state.center
      });

      var geojson = {
        type: 'FeatureCollection',
        features: [{
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: state.center
          },
          properties: {
            title: 'CatchMe',
            description: 'You',
            icon: {
              'iconUrl': 'https://raw.githubusercontent.com/riccardone/CatchMe.Web/master/src/images/geolocation_marker.png',
              'iconSize': [22, 22],
              className: 'dot'
            }
          }
        }]
      };

      geojson.features.forEach(function (marker) {
        // create a HTML element for each feature
        var el = document.createElement('div');
        el.className = 'marker';
        el.style.backgroundImage = 'url(' + marker.properties.icon.iconUrl + ')';
        el.style.width = marker.properties.icon.iconSize[0] + 'px';
        el.style.height = marker.properties.icon.iconSize[1] + 'px';
        // make a marker for each feature and add to the map
        new mapboxgl.Marker(el)
          .setLngLat(marker.geometry.coordinates)
          .addTo(_this.map);
      });
    });
  }

  _updatePosition(position) {
    var state = this.state.viewport;
    if (state.center[0] !== position.coords.longitude || state.center[1] !== position.coords.latitude) {
      state.center = [position.coords.longitude, position.coords.latitude];
      bus.publish("PositionUpdated", { 
        applies: moment.utc().toDate().toUTCString(), 
        position: state.center, 
        accuracy: position.coords.accuracy, 
        altitude: position.coords.altitude, 
        heading: position.coords.heading,
        speed: position.coords.speed,
        timestamp: position.timestamp
      });
      this.setState({ viewport: state });
    }
  }

  _updateViewport(coords) {
    var state = this.state.viewport;
    state.longitude = coords.longitude;
    state.latitude = coords.latitude;
    this.setState({ viewport: state });
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    const style = {
      top: 0,
      bottom: 0,
      height: "90vh",
      width: "100vw",
      font: "500 20px/26px 'Helvetica Neue', Helvetica, Arial, Sans-serif"
    };

    const marker = {
      backgroundImage: "url('mapbox-icon.png')",
      backgroundSize: "cover",
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      cursor: "pointer"
    };

    return (
      <div>
        <NavBarTop auth={this.props.auth} {...this.props} />
        <div className="container map">
          <ToastContainer hideProgressBar newestOnTop />         
          {isAuthenticated() && <div style={style} id={"map"} />}
          {!isAuthenticated() && (
            <h4>
              You are not logged in! Please{" "}
              <a style={{ cursor: "pointer" }} onClick={this.login.bind(this)}>
                Log In
              </a>{" "}
              to continue.
            </h4>
          )}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Map2;
