import React from "react";
import "./Temperature.css";

export default function Temperature() {
  return (
    <div className="row-cols-1 col">
      <div className="current-temperature">
        <span className="degrees" id="current-degrees">
          80
        </span>
        <span>°C</span>|<span>°F</span>
      </div>
    </div>
  );
}
