import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { MainWrapper } from "./components/mainWrapper";
import { ThemeWrapper } from "./components/themeWrapper";
import { ToggleTheme } from "./components/toggleTheme";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <ThemeWrapper>
      <ToggleTheme>
        <BrowserRouter>
          <MainWrapper />
        </BrowserRouter>
      </ToggleTheme>
    </ThemeWrapper>
  </React.StrictMode>,
);
