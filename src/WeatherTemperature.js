import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventdefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventdefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <div className="tempIcon">{Math.round(props.celsius)} </div>
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
      <div className="WeatherTemperature">
        {Math.round(fahrenheit())}
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
