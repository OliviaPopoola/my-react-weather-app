import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import reportWebVitals from "./reportWebVitals";
import Weather from "./Weather";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <main>
      <div className="body-area container">
        <div className="main-container row">
          <Weather defaultCity="Berlin" />
        </div>
      </div>

      <footer className="bottom-page">
        <a
          href="https://www.linkedin.com/in/olivia-popoola-095op"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/058/058/original/9026840_linkedin_logo_thin_icon.png?1670861656"
            alt="linkedin"
            width="40"
          />
        </a>
        <a
          href="https://github.com/OliviaPopoola"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/058/057/original/9026804_github_logo_thin_icon.png?1670861626"
            alt="github"
            width="40"
          />
        </a>
        <a
          href="https://www.instagram.com/livvy.codes/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/058/056/original/9026811_instagram_logo_thin_icon.png?1670861619"
            alt="instagram"
            width="40"
          />
        </a>

        <div className="tagline">made with 💗 by Olivia</div>
      </footer>
    </main>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
