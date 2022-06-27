import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function converToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function converToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <span>
        <span className="current-temp-right">{Math.round(props.celsius)}</span>
        <span className="unit">
          {" "}
          °C |
          <a href="/" onClick={converToFahrenheit}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <span>
        <span className="current-temp-right">{Math.round(fahrenheit)}</span>
        <span className="unit">
          <a href="/" onClick={converToCelsius}>
            {" "}
            °C{" "}
          </a>
          | °F
        </span>
      </span>
    );
  }
}
