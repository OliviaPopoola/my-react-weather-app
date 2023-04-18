import React from "react";
import FormattedDate from "./FormattedDate";

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
            <div className="col-4-date col-4">
              <ul>
                <li>{Math.round(props.data.temperature)}°</li>
              </ul>
            </div>
            <div className="col-4-date col-4">
              <ul>
                <img
                  className="d-flex"
                  src={props.data.icon_url}
                  alt={props.data.description}
                />
                <li className="text-capitalize">{props.data.description}</li>
              </ul>
            </div>

            <div className="col-4-date col-4">
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
