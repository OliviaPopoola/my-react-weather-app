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
      <div className="container">
        <div className="container">
          <div className="row mt-5">
            <div className="weather-box col-4">
              <div className="tempInfo">
                <WeatherTemperature celsius={props.data.temperature} />
              </div>
            </div>
            <div className="weather-box col-4">
              <ul>
                <div className="d-flex float-middle">
                  <WeatherIcon code={props.data.icon} size={75} />
                </div>
                <li className="text-capitalize">{props.data.description}</li>
              </ul>
            </div>

            <div className="weather-box col-4">
              <ul>
                <li>Humidity: {props.data.humidity}%</li>
                <li>Wind: {Math.round(props.data.wind)} km/ms</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
