import React, { useState } from "react";
import axios from "axios";

export default function Form() {
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
      <ul>
        <li>Temperature: {Math.round(temp)}°C</li>
        <li>Description: {description}</li>
        <li>Humidity: {Math.round(humidity)}%</li>
        <li>Wind: {Math.round(wind)}km/h</li>
        <li>
          <img src={icon} alt={description} />
        </li>
      </ul>
    );
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function showResult(response) {
    setTemp(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a43101e0424a3e682b9d1a16a6e9590e&units=metric`;
  axios.get(url).then(showResult);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Type a city" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      {result}
    </div>
  );
}
