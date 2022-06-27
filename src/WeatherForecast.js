import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day"></div>
          <img
            src={props.data.icon}
            class="current-weather-icon"
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
