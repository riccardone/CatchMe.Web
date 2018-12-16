import React, { Component } from "react";
import ReactDOM from "react-dom";
import mapboxgl from "mapbox-gl";
import Tooltip from "./components/tooltip";
import NavBarTop from "../navbar.top";
import Footer from "../footer";
import { ToastContainer, toast } from "react-toastify";
import "./mapbox-v051.css";
import "./map.css";
import PosMeIcon from "../images/geolocation_marker.png";
import PosFriendIcon from "../images/geolocation_marker_red.png";

mapboxgl.accessToken =
  "pk.eyJ1IjoicmljY2FyZG9uZSIsImEiOiJqbXBIcDlFIn0.SuzRGlZwV_OJKyNH9DtJJg";

class Map2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        bearing: 0,
        pitch: 0,
        zoom: [9],
        container: "map",
        style: "mapbox://styles/mapbox/streets-v9"
      }
    };
    // preserve the initial state in a new object
    this.baseState = this.state;
  }

  componentDidMount() {
    this.map = new mapboxgl.Map(this.state.viewport);
    this.map.addControl(new mapboxgl.AttributionControl(), "top-right");
    this.map.addControl(new mapboxgl.NavigationControl());
    var _this = this;
    setInterval(function() {
      _this._locateUser();
    }, 3000);
  }

  componentWillUnmount() {
    this.map.remove();
  }

  login() {
    this.props.auth.login();
  }

  _locateUser() {
    navigator.geolocation.getCurrentPosition(position => {
      // var state = this.state.viewport;
      // state.center = [position.coords.longitude, position.coords.latitude];
      // this.setState({ viewport: state });
      this.map.flyTo({
        center: [position.coords.longitude, position.coords.latitude]
      });
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

    const style = {
      top: 0,
      bottom: 0,
      height: "90vh",
      width: "100vw",
      font: "500 20px/26px 'Helvetica Neue', Helvetica, Arial, Sans-serif"
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
