import React from "react";
import ReactDOM from "react-dom/client";
import "./GradientBody.css";
import reportWebVitals from "./reportWebVitals";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import BootstrapNavBar from "./components/Header";


import "./GradientBody.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BootstrapNavBar />
      <App />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
