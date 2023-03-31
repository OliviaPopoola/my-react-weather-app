import React from "react";
import "./Temperature.css";

export default function Temperature() {
  return (
    <div className="row-cols-1 col">
      <div className="current-temperature">
        <span className="degrees" id="current-degrees">
          80
        </span>
        <span>
          <a href="#" id="celsius-link" className="active c-symbol">
            °C
          </a>
        </span>
        |
        <span>
          <a href="#" id="fahrenheit-link" className="f-symbol">
            °F
          </a>
        </span>
      </div>
    </div>
  );
}
