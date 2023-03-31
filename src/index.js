import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

import reportWebVitals from "./reportWebVitals";
import Navigation from "./Navigation";
import Location from "./Location";
import Temperature from "./Temperature";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <body>
      <div className="container">
        <Navigation />
        <div className="main-container">
          <Location /> <Temperature />
        </div>
      </div>
    </body>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
