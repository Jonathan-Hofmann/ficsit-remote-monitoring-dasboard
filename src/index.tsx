import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { AppContainer } from "./react/AppContainer";
import { ThemeWrapper } from "./react/components/themeWrapper";
import { ToggleTheme } from "./react/components/toggleTheme";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <ThemeWrapper>
      <ToggleTheme>
        <BrowserRouter>
          <AppContainer />
        </BrowserRouter>
      </ToggleTheme>
    </ThemeWrapper>
  </React.StrictMode>,
);
