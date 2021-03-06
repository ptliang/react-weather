import axios from 'axios';

const API_KEY = '79acf9d24c7287bc54faadde1afb5d9b';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = Symbol('FETCH_WEATHER');

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const response = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: response
  }
}
