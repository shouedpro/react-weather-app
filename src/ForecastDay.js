import React from "react";
import SearchWeather from "./SearchWeather";

export default function ForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <SearchWeather src={props.data.weather[0].icon} />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">
          {Math.round(props[0].data.temp.max)}
        </span>
        <span className="WeatherForecast-temperature-min">
          {Math.round(props[0].data.temp.min)}
        </span>
      </div>
    </div>
  );
}
