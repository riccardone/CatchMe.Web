import { Component, PropTypes } from "react";
import { connect } from "react-redux";

// This is my action creator function
// It takes three parameters: hours, minutes, seconds
import { updateTime } from "../actions";

// This component come from this
// https://kyleshevlin.com/renderless-components/
// TODO and continue reading this
// https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0

class UpdatePositionContainer extends Component {
  constructor() {
    super();
    this.intervalId = null;
    this.startWatchingPosition = this.startWatchingPosition.bind(this);
    this.stopWatchingPosition = this.stopWatchingPosition.bind(this);
    this.getCurrentPosition = this.getCurrentPosition.bind(this);
  }

  componentDidMount() {
    this.startWatchingPosition();
  }

  componentWillUnmount() {
    this.stopWatchingPosition();
  }

  startWatchingPosition() {
    //this.intervalId = setInterval(this.getCurrentTime, 5000);

    if (this.intervalId) {
      return;
    }
    var options = {
      frequency: 5000,
      enableHighAccuracy: true
    };
    this.intervalId = navigator.geolocation.watchPosition(this.setCurrentPosition, function () {
      _onError(arguments);
    }, options);
    console.log("Watch for friends set");

    var _onError = function (error) {
      var err = "";
      if (error.message) {
        err = "Error watching your position: " + error.message;
      } else {
        err = "Error watching your position: " + error;
      }
      console.log(err);
      app.showError(err);
    }
  }

  getCurrentPosition() {
    var position = arguments[0];
    if (position) {
      this.props.updatePosition(position);
    }
  }

  stopWatchingPosition() {
    clearInterval(this.intervalId);
  }

  render() {
    return null;
  }
}

UpdatePositionContainer.propTypes = {
  updatePosition: PropTypes.func
};

const mapDispatchToProps = {
  updatePosition
};

export default connect(
  null,
  mapDispatchToProps
)(UpdatePositionContainer);
