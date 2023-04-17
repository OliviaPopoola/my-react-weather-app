import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.city,
      description: response.condition.description,
      temperature: response.temperature.current,
      wind: response.wind.speed,
      humidity: response.temperature.humidity,
      date: "15th June",
      icon_url: response.condition.icon_url,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <h1 className="text-capitalize">{weatherData.city}</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img
              src={weatherData.icon_url}
              width="30"
              alt={weatherData.description}
            />
            {Math.round(weatherData.temperature)}
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind}km/ms</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "64f17b5a3404993ab8co5054f3c7bt29";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
