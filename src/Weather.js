import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      description: response.data.condition.description,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      icon_url: response.data.condition.icon_url,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <h1 className="text-capitalize">{weatherData.city}</h1>
          <div className="text-muted">
            <FormattedDate date={weatherData.date} />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-9">
              <ul>
                <img
                  className="clearfix d-flex"
                  src={weatherData.icon_url}
                  alt={weatherData.description}
                />
                <li>{Math.round(weatherData.temperature)}°</li>
                <li className="text-capitalize">{weatherData.description}</li>
              </ul>
            </div>

            <div className="col-3">
              <ul>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {Math.round(weatherData.wind)}km/ms</li>
              </ul>
            </div>
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
