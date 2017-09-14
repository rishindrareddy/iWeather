import React, { Component } from "react";

class GoogleMap extends Component {

  // adding embedded google map
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  // creating ref for google maps to bubble up on
  render() {
    return <div ref="map" />;
  }
}

export default GoogleMap;
