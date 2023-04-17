import React from "react";
import "./Navigation.css";

export default function Navigation() {
  return (
    <div className="Navigation">
      <div className="top-wrapper">
        <nav className="navbar bg-clear">
          <div className="container-fluid search-bar">
            <form className="d-flex" role="search" id="search-form">
              <input
                className="form-control me-2"
                type="text"
                placeholder="Search for a location..."
                aria-label="Search"
                autocomplete="off"
                id="search-input"
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
    </div>
  );
}
