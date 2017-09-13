import axios from 'axios';

const API_KEY = 'a5cb55de8f1ec2881a64c31978d58a25';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

  const url =  `${ROOT_URL}&q=${city}`;
  const req = axios.get(url);

// req here is a promise, when redux-promise middleware receives this promise
// it resolves the promise and send the result obtained to the reducer.
// in simple terms, redux-promise is man in middle to resolve promises and send data to reducer.
// COOL !!
  return {
    type: FETCH_WEATHER,
    payload: req
  };
}
