import React, {Component} from 'react';
import {connect} from 'react-redux'; // connects SearchBar container to redux so that this container can fire actions
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state={term:''};

    // binds onInputChange function with the instance object of SearchBar
    // now assign it to the function present in the SearchBar instance.
    this.onInputChange = this.onInputChange.bind(this);

    // to bind the SearchBar object instance with the onFormSubmit function
    // so that 'this' can be accessed in funciton scope
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event){
    this.setState({term: event.target.value});
  }

  // fetch weather data
  onFormSubmit(event){
    event.preventDefault();

    this.props.fetchWeather(this.state.term);
    this.setState({term:''});
  }


  render(){
    return(
        <form onSubmit={this.onFormSubmit} className="input-group">
          <input
            placeholder = "Get a five-day forecast for your favorite cities"
            className="form-control"
            value={this.state.term}
            onChange={this.onInputChange}/>
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">
            Submit </button>
          </span>
        </form>
    );
  }
}

// to wire the fetchWeather function to the action.
// we are bindind the action to this fetchWeather function
function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchWeather}, dispatch);
}

// 1st argument for state, so we are not mapping state to props so null
// 2nd arg is about mapping dispatch to props
export default connect(null, mapDispatchToProps)(SearchBar);
