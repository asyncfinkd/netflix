import React, { StrictMode } from "react";
import { render } from "react-dom";
import App from "./app";
import { GlobalStyles } from "./global-styles";
import "normalize.css";
import "./index.css";
import { firebase } from "./lib/firebase.prod";
import { FirebaseContext } from "./context/firebase";

render(
  <>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <StrictMode>
        <App />
      </StrictMode>
    </FirebaseContext.Provider>
  </>,
  document.getElementById("root")
);
