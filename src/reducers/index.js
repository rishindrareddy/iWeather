import { combineReducers } from 'redux';
import weatherReducer from './reducer_weather';

// maps reducer_weather reducer to weather.
// this is a centrl unit that manages reducers and maps to objects
// The combineReducers helper function turns an object whose values
// are different reducing functions into a single reducing function you can pass to createStore
const rootReducer = combineReducers({
  weather : weatherReducer
});

export default rootReducer;
