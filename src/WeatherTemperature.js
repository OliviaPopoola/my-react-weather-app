import React from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  return (
    <div className="tempInfo">
      {Math.round(props.celsius)} <span className="degrees">°C</span>
    </div>
  );
}
