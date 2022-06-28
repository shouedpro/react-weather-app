import axios from "axios";
import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "a43101e0424a3e682b9d1a16a6e9590e";
  let lat = props.coordinates.lat;
  let lon = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day"></div>
          <img
            src={props.data.icon}
            className="current-weather-icon"
            alt="weathericon"
          />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">30</span>
            <span className="WeatherForecast-temperature-min">20</span>
          </div>
        </div>
      </div>
    </div>
  );
}
