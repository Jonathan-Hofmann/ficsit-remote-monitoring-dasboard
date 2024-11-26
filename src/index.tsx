import "./index.css";

import { CssVarsProvider } from "@mui/joy";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { FRMDtheme } from "./constants/theme";
import { AppContainer } from "./react/AppContainer";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <CssVarsProvider
      defaultColorScheme="dark"
      defaultMode="dark"
      theme={FRMDtheme}
    >
      <BrowserRouter>
        <AppContainer />
      </BrowserRouter>
    </CssVarsProvider>
  </React.StrictMode>,
);
