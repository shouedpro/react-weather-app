import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./SearchWeather.css";
import WeatherForecast from "./WeatherForecast";

export default function SearchWeather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "a43101e0424a3e682b9d1a16a6e9590e";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div>
        <form onSubmit={handleSubmit} className="input-group mb-5 search">
          <input
            type="search"
            className="form-control"
            placeholder="Enter a city"
            autoFocus="on"
            onChange={updateCity}
          />
          <input
            type="submit"
            className="btn btn-outline-secondary"
            value="Search"
          />
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast data={WeatherForecast} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
