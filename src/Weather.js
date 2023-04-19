import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      description: response.data.condition.description,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      icon: response.data.condition.icon,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "64f17b5a3404993ab8co5054f3c7bt29";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="top-wrapper">
          <nav className="navbar bg-clear">
            <div className="container-fluid search-bar">
              <form
                className="d-flex"
                role="search"
                id="search-form"
                onSubmit={handleSubmit}
              >
                <input
                  className="form-control me-2"
                  type="text"
                  placeholder="Search for a location..."
                  aria-label="Search"
                  autoComplete="off"
                  id="search-input"
                  onChange={handleCityChange}
                />
                <button className="btn search-button" type="submit">
                  <div className="search-icon">
                    <img
                      src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/058/624/original/9026843_magnifying_glass_thin_icon.png?1671039227"
                      alt="search-icon"
                      type="submit"
                      width="30"
                    />
                  </div>
                </button>
              </form>
              <button className="btn current-button" id="current-button">
                <div className="pin-icon">
                  <img
                    src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/058/621/original/9026779_map_pin_thin_icon.png?1671038725"
                    alt="pin-icon"
                    width="30"
                  />
                </div>
              </button>
            </div>
          </nav>
        </div>
        <WeatherInfo data={weatherData} />;
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
