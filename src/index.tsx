import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { AppContainer } from "./react/AppContainer";
import { CssVarsProvider } from "@mui/joy";
import FRMDtheme from "./constants/theme";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <CssVarsProvider defaultColorScheme={"dark"} defaultMode="dark" theme={FRMDtheme}>
      <BrowserRouter>
        <AppContainer />
      </BrowserRouter>
    </CssVarsProvider>
  </React.StrictMode>,
);
