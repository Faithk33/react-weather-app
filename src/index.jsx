import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <h1>WEATHER SEARCH</h1>
    <App />
    <footer><a href="https://github.com/Faithk33/react-weather-app">This page is hosted on Github</a></footer>
  </StrictMode>
);
