import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import "./SearchWeather.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="mini-header">
          CURRENT WEATHER | Last updated at
          <span className="time">
            <FormattedDate date={props.data.date} />
          </span>
        </div>
        <div className="col-6 current-temp-left">
          <h1>{props.data.city}</h1>
          <h4>
            <FormattedDate date={props.data.date} />
          </h4>
          <h5 className="weather-description">{props.data.description}</h5>
          <p className="humidity-wind">
            Humidity: {Math.round(props.data.humidity)}% Wind:{" "}
            {Math.round(props.data.wind)}km/h
          </p>
        </div>

        <div className="col-6 temp-unit">
          <img
            src={props.data.icon}
            class="current-weather-icon"
            alt="weathericon"
          />
          <span>
            <WeatherTemperature celsius={props.data.temperature} />
          </span>
        </div>
      </div>
    </div>
  );
}
