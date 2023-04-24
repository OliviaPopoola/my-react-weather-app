import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {}

  const apiKey = "64f17b5a3404993ab8co5054f3c7bt29";
  let lon = props.coordinates.lon;
  let lat = props.coordinates.lat;
  let forecastUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;

  axios.get(forecastUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thurs</div>
          <WeatherIcon code="mist-day" size={32} />
          <div className="WeatherForecast-temperatures">
            <span>19°</span> / <span className="text-muted ml-3">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
