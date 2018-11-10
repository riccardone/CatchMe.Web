import React, { Component } from 'react';
import NavBarTop from '../navbar.top';
import Footer from '../footer';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import { ToastContainer, toast } from 'react-toastify';
import './map.css';
import './mapbox-v051.css';


class Map extends Component {
  constructor(props) {
    super(props);
    // preserve the initial state in a new object
    this.baseState = this.state;
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
  };

  _onClickMap(map, evt) {
    console.log(evt.lngLat);
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    const Map = ReactMapboxGl({
      accessToken: "pk.eyJ1IjoicmljY2FyZG9uZSIsImEiOiJqbXBIcDlFIn0.SuzRGlZwV_OJKyNH9DtJJg"
    });

    return (
      <div>
        <NavBarTop auth={this.props.auth} {...this.props} />
        <div className="container">
          <ToastContainer
              hideProgressBar
              newestOnTop
          />
          {
            isAuthenticated() &&
            <div>
              <MapContainer>
              <Map
                  style="mapbox://styles/mapbox/streets-v9"
                  containerStyle={{
                  height: "100vh",
                  width: "100vw"                  
                }}
                  onStyleLoad={this.onMapLoad}
                  onClick={this._onClickMap}
              >
                <Layer
                    type="symbol"
                    id="marker"
                    layout={{ "icon-image": "marker-15" }}
                >
                  <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
                </Layer>
              </Map>
              </MapContainer>
              <br />
            </div>
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
