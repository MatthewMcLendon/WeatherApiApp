import settings from "../.settings.js";

let weather = [];

export const useWeather = () => {
  return weather;
};

export const getWeather = (selectedZip) => {
  return fetch(
    `http://api.openweathermap.org/data/2.5/forecast?APPID=${settings.weatherKey}&zip=${selectedZip}&units=imperial`
  )
    .then((response) => response.json())
    .then((pasedWeather) => {
      console.table(pasedWeather);
      weather = pasedWeather.list.slice();
    });
};
