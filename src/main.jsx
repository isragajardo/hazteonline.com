import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";
import { TemplateProvider } from "./context/TemplateContext";
import "./styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <TemplateProvider>
        <HashRouter>

          <App />
        </HashRouter>

      </TemplateProvider>
    </ThemeProvider>
  </React.StrictMode>
);
