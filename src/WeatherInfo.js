import React from "react";
import FormattedDate from "./FormattedDate";
import "./WeatherInfo.css";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="text-capitalize">{props.data.city}</h1>
      <h2 className="text-muted">
        <FormattedDate date={props.data.date} />
      </h2>

      <div className="container mb-3">
        <div className="row mt-5">
          <div className="weather-box col-4">
            <WeatherTemperature celsius={props.data.temperature} />
          </div>

          <div className="weather-box col-4">
            <ul>
              <li className="d-flex float-middle">
                <WeatherIcon code={props.data.icon} size={75} />
              </li>
              <li className="text-capitalize">{props.data.description}</li>
            </ul>
          </div>

          <div className="weather-box col-4">
            <ul>
              <li>Humidity: {props.data.humidity}%</li>
              <li className="mt-2">
                Wind: {Math.round(props.data.wind)} km/ms
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
