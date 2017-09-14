import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from "../components/google_map";

class WeatherList extends Component {

  renderWeather(cityData) {
    const name = cityData.city.name;
    // we are looping through series of data (3 hr interval), extract temperatures out of it
    const temps = cityData.list.map(weather => (weather.main.temp * (9/5)) -459.67);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const {lon, lat} = cityData.city.coord;
    return(
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat}/></td>
        <td><Chart data={temps} color='red' units="F"/></td>
        <td><Chart data={pressures} color='green' units="hPa"/></td>
        <td><Chart data={humidities} color='blue'units="%"/></td>
      </tr>
    );

  }

  render(){

    //  for each city of the weather object, we will be creating list regarding weather data
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (F)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>

        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>

        </table>
    );
  }
}

//
function mapStateToProps({weather}){
//  return {weather:state.weather};
// above is equal to below
// return {weather : weather}
// above is equal to below

return {weather};
}

export default connect(mapStateToProps)(WeatherList);
