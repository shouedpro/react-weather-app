import React, { useState } from "react";
import axios from "axios";

export default function Form() {
  function formatTime(timestamp) {
    const now = new Date(timestamp);
    const hours = now.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    const minutes = now.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    return `${hours}:${minutes}`;
  }

  function formatDay(timestamp) {
    const now = new Date(timestamp);
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const day = days[now.getDay()];
    return `${day}`;
  }

  function currentLocation() {
    navigator.geolocation.getCurrentPosition(pullLocation);
  }

  function pullLocation(location) {
    let lat = location.coords.latitude;
    let lon = location.coords.longitude;
    let endPoint = "https://api.openweathermap.org/data/2.5/weather?";
    let apiKey = "a43101e0424a3e682b9d1a16a6e9590e";
    let units = "metric";
    let apiUrl = `${endPoint}lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;

    axios.get(apiUrl).then(showResult);
  }

  const [city, setCity] = useState(null);
  const [temp, setTemp] = useState(null);
  const [description, setDescription] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [icon, setIcon] = useState(null);
  const [result, setResult] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    setResult(
      <div class="row">
        <div class="current-temperature col-8 current-temp-left">
          <h1>{city}</h1>
          <h4>{formatDay}</h4>
          <h5 class="weather-description">{description}</h5>
          <p class="humidity-wind">
            Humidity: {Math.round(humidity)}% Wind: {Math.round(wind)}km/h
          </p>
        </div>

        <div class="col-4 current-temp-right">
          <img src={icon} class="current-weather-icon" alt={description} />
          <span class="current-temperature">{Math.round(temp)}</span>
          <span class="degree-btn">
            {" "}
            <a href="#" class="celsius-btn active" id="celsius-btn">
              {" "}
              °C
            </a>
          </span>
        </div>
      </div>
    );
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function showResult(response) {
    setTemp(response.data.main.temp);
    setHumidity(response.data.main.humidity);
    setDescription(response.data.weather[0].description);
    setWind(response.data.wind.speed);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a43101e0424a3e682b9d1a16a6e9590e&units=metric`;
  axios.get(url).then(showResult);

  return (
    <div>
      <form onSubmit={handleSubmit} class="input-group mb-5 search">
        <input
          type="search"
          class="form-control"
          placeholder="Type a city"
          onChange={updateCity}
        />
        <input type="submit" class="btn btn-outline-secondary" value="Search" />
        <button
          type="button"
          class="btn btn-outline-info current-location-btn"
          onSubmit={currentLocation}
        >
          Current Location
        </button>
      </form>
      <div class="mini-header">
        CURRENT WEATHER | Last updated at
        <span class="time">{formatTime}</span>
      </div>
      {result}
    </div>
  );
}
