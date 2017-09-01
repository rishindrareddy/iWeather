import React, {Component} from 'react';

export default class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state={term:''};

    // binds onInputChange function with the instance object of SearchBar
    // now assign it to the function present in the SearchBar instance.
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event){
    this.setState({term: event.target.value})
  }

  // fetch weather data
  onFormSubmit(event){
    event.preventDefault();
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
