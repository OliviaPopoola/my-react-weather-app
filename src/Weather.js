import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

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
      date: "15th June",
      icon_url: response.data.condition.icon_url,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <h1 className="text-capitalize">{weatherData.city}</h1>
        <div className="container">
          <div className="row">
            <ul>
              <li>{weatherData.date}</li>
              <li className="text-capitalize">{weatherData.description}</li>
            </ul>
            <div className="col-6">{Math.round(weatherData.temperature)}°</div>

            <div className="col-6">
              <ul>
                <img src={weatherData.icon_url} alt={weatherData.description} />
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind}km/ms</li>
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
