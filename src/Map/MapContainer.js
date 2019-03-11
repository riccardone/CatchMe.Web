import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import MapPresentational from "./MapPresentational";
import NavBarTop from "../navbar.top";
import Footer from "../footer";

const positionOptions = {
  timeout: Infinity,
  maximumAge: 30000,
  enableHighAccuracy: true
};

class MapContainer extends Component {
  constructor() {
    super();
    this.state = {
      viewport: {
        container: "map",
        font: "500 20px/26px 'Helvetica Neue', Helvetica, Arial, Sans-serif",
        style: 'mapbox://styles/mapbox/streets-v9',
        bearing: 0,
        pitch: 0,
        zoom: [18]
      }
    };
    this.intervalId = null;
    this.setCurrentPosition = this.setCurrentPosition.bind(this);
    this.catchError = this.catchError.bind(this);
    if (navigator.geolocation)  // Supported
    {
      // Obtain the initial location one-off
      navigator.geolocation.getCurrentPosition(this.setCurrentPosition, this.catchError,
        positionOptions);
    } else  // Not supported
    {
      toast.error("Oop! This browser does not support HTML5 Geolocation.");
    }
  }

  componentDidMount() {
    this.startWatchingPosition();
  }

  componentWillUnmount() {
    this.stopWatchingPosition();
  }

  startWatchingPosition() {
    if (this.intervalId) {
      return;
    }
    this.intervalId = navigator.geolocation.watchPosition(this.setCurrentPosition, this.catchError, positionOptions);
    console.log("Watch for friends set");
  }

  catchError(error) {
    var err = "";
    switch (error.code) {
      case error.TIMEOUT:
        err = "The request to get user location has aborted as it has taken too long.";
        break;
      case error.POSITION_UNAVAILABLE:
        err = "Location information is not available.";
        break;
      case error.PERMISSION_DENIED:
        err = "Permission to share location information has been denied!";
        break;
      default:
        err = "An unknown error occurred.";
    }
    toast.error(err);
  }

  setCurrentPosition() {
    var position = arguments[0];
    if (position) {
      var state = this.state.viewport;
      state.center = [position.coords.longitude, position.coords.latitude];
      this.setState({ viewport: state });
    }
  }

  login() {
    this.props.auth.login();
  }

  stopWatchingPosition() {
    clearInterval(this.intervalId);
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        <NavBarTop auth={this.props.auth} {...this.props} />
        <ToastContainer hideProgressBar newestOnTop />
        {isAuthenticated() && <MapPresentational auth={this.props.auth} viewport={this.state.viewport} />}
        {!isAuthenticated() && (
          <h4>
            You are not logged in! Please{" "}
            <a style={{ cursor: "pointer" }} onClick={this.login.bind(this)}>
              Log In
          </a>{" "}
            to continue.
        </h4>
        )}
        <Footer />
      </div>
    )
  }
}

export default MapContainer
