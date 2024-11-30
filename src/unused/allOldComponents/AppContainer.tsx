import { Box, Grid } from "@mui/joy";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { ConnectionChecker } from "./components/connectionChecker";
import { Footer } from "./components/footer";
import { Sidebar } from "./components/sidebar";
import { AwesomeSink } from "./views/awesomeSink";
import { Drones } from "./views/drones";
import { DetailedFactoryView } from "./views/factoryView";
import { DetailedGeneratorView } from "./views/generatorView";
import { PowerMain } from "./views/powerMain";
import { FactorysSwitch } from "./views/production";
import { Settings } from "./views/settings";
import { Start } from "./views/start";
import { StorageView } from "./views/storageView";
import { Trains } from "./views/trains";
import { Vehicles } from "./views/vehicles";

export const AppContainer: React.FC = () => {
  return (
    <Grid
      container
      sx={{ position: "relative", height: "100%" }}
    >
      <Grid sx={{ minWidth: "50px" }}>
        <Sidebar />
      </Grid>
      <Grid
        xs
        sx={{ height: "100%" }}
      >
        <Box>
          <ConnectionChecker>
            <Routes>
              <Route
                path="/"
                element={<Start />}
              />
              <Route
                path="/power"
                element={<PowerMain />}
              />
              <Route
                path="/generator"
                element={<DetailedGeneratorView />}
              />
              <Route
                path="/production"
                element={<FactorysSwitch />}
              />
              <Route
                path="/factory"
                element={<DetailedFactoryView />}
              />
              <Route
                path="/vehicles"
                element={<Vehicles />}
              />
              <Route
                path="/drones"
                element={<Drones />}
              />
              <Route
                path="/trains"
                element={<Trains />}
              />
              <Route
                path="/storageView"
                element={<StorageView />}
              />
              <Route
                path="/awesomeSink"
                element={<AwesomeSink />}
              />
              <Route
                path="/settings"
                element={<Settings />}
              />
              <Route
                path="*"
                element={
                  <Navigate
                    to="/"
                    replace
                  />
                }
              />
            </Routes>
          </ConnectionChecker>
          <Footer />
        </Box>
      </Grid>
    </Grid>
  );
};
