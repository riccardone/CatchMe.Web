import React, { Component } from 'react';
import NavBarTop from '../navbar.top';
import Footer from '../footer';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import './map.css';
import './mapbox-v051.css';


class Map extends Component {
  constructor(props) {
    super(props);
    // preserve the initial state in a new object
    this.baseState = this.state;
  }

  render() {
    const Map = ReactMapboxGl({
      accessToken: "pk.eyJ1IjoicmljY2FyZG9uZSIsImEiOiJqbXBIcDlFIn0.SuzRGlZwV_OJKyNH9DtJJg"
    });

    return (
      <div>
        <NavBarTop auth={this.props.auth} {...this.props} />
        <div className="container">
          <h1 className="page-title">Map</h1>
          <div className="border-left">
            <h3 className="page-subtitle">
              <Map
                  style="mapbox://styles/mapbox/streets-v9"
                  containerStyle={{
                  height: "100vh",
                  width: "100vw"
                }}
              >
                <Layer
                    type="symbol"
                    id="marker"
                    layout={{ "icon-image": "marker-15" }}
                >
                  <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
                </Layer>
              </Map>
            </h3>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Map;
