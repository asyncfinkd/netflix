import React, { StrictMode } from "react";
import { render } from "react-dom";
import App from "./app";
import { GlobalStyles } from "./global-styles";
import "normalize.css";
import "./index.css";
import { firebase } from "./lib/firebase.prod";

render(
  <>
    <GlobalStyles />
    <StrictMode>
      <App />
    </StrictMode>
  </>,
  document.getElementById("root")
);
