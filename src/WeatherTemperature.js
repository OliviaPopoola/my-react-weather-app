import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="tempInfo">
        {Math.round(props.celsius)}{" "}
        <span className="degrees">
          °C |{" "}
          <a href="\" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="tempInfo">
        {Math.round(fahrenheit())}{" "}
        <span className="degrees">
          <a href="\" onClick={showCelsius}>
            °C{" "}
          </a>
          | °F
        </span>
      </div>
    );
  }
}
