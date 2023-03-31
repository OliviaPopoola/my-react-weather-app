import React from "react";
import "./Location.css";

export default function Location() {
  return (
    <div className="location-date col">
      <div className="location" id="current-location">
        Mexico
      </div>
      <div className="date" id="current-date">
        10th March 2023
      </div>
    </div>
  );
}
