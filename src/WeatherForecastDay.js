import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maximumTemp() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }
  function minimumTemp() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.temperature.day * 1000);
    let day = date.getDay();
    let days = ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"];
    return days[day];
  }
  return (
    <div className="WeatherForecastDay">
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIcon code={props.data.condition.icon} size={32} />
      <div className="WeatherForecast-temperatures">
        <span>{maximumTemp()}</span> /{" "}
        <span className="text-muted ml-3">{minimumTemp()}</span>
      </div>
    </div>
  );
}
