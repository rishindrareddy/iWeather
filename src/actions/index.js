import axios from 'axios';

const API_KEY = 'a5cb55de8f1ec2881a64c31978d58a25';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

  const url =  `${ROOT_URL}&q=${city}`;
  const req = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: req
  };
}
