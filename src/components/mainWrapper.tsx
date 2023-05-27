import { Box, Typography } from "@mui/material";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Building } from "../views/building";
import { Drones } from "../views/drones";
import {Trains } from "../views/trains";
import { PowerMain } from "../views/powerMain";
import { Factorys } from "../views/productionMain";
import { Start } from "../views/start";
import SearchAppBar from "./topBar";
import {Sidebar} from "./sidebar";
import { Vehicles } from "../views/vehicles";
import { SocketTestSite } from "../views/testingSocket";
import { FactorysSwitch } from "../views/production";
import { DetailedFactoryView } from "../views/factoryView";
import { StorageView } from "../views/storageView";
import { AwesomeSink } from "./awesomeSink";
import { Grid } from "@mui/joy";
import { Settings } from "../views/settings";
import { ConnectionCheckerProvider } from "../context/connectionChecker";
import { Footer } from "./footer";
import Map_Comp from "../views/map";

export const MainWrapper:React.FC = (props) => {
    return(
        <>
            <Grid container sx={{position: 'relative', height: '100%'}}>
                <Grid sx={{minWidth: '50px'}}>
                    <Sidebar/>
                </Grid>
                <Grid xs sx={{height: '100%'}}>
                    <Box>
                        <ConnectionCheckerProvider>
                            <Routes>
                                <Route path="/" element={<Start />} />
                                <Route path="/power" element={<PowerMain />} />
                                <Route path="/settings" element={<Settings />} />
                                <Route path="/production" element={<FactorysSwitch />} />
                                <Route path="/factory" element={<DetailedFactoryView />} />
                                <Route path="/map" element={<Map_Comp />} />
                                <Route path="/building" element={<Building />} />
                                <Route path="/drones" element={<Drones />} />
                                <Route path="/trains" element={<Trains />} />
                                <Route path="/vehicles" element={<Vehicles />} />
                                <Route path="/storageView" element={<StorageView />} />
                                <Route path="/awesomeSink" element={<AwesomeSink />} />
                                <Route path="/test" element={<SocketTestSite />} />
                            </Routes>
                        </ConnectionCheckerProvider>
                        <Footer/>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}