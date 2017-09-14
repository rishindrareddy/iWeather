import React, {Component} from 'react';
import {connect} from 'react-redux';
import chart from '../components/chart';

class WeatherList extends Component {

  renderWeather(cityData) {
    const name = cityData.city.name;
    // we are looping through series of data (3 hr interval), extract temperatures out of it
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);

    return(
      <tr key={name}>
        <td>{name}</td>
        <td><chart data={temps} color='orange'/></td>
        <td><chart data={pressures} color='yellow'/></td>
        <td><chart data={humidities} color='green'/></td>
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
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
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
