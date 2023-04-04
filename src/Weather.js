import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h1>Mexico</h1>
      <ul>
        <li>10th March 2023</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/058/625/original/9772477_weather_humidity_rain_forecast_cloud_icon.png?1671040093"
            width="30"
            alt="humidity-icon"
          />
          20 °C
        </div>
        <div className="col-6">
          <ul>
            <li>Percipitation:15</li>
            <li>Humidity: 40%</li>
            <li>Wind: 12 km/ms</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
