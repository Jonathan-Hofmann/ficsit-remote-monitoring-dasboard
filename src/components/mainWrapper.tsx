import { Box, Typography } from "@mui/material";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Building } from "../views/building";
import { Drones } from "../views/drones";
import { PowerMain } from "../views/powerMain";
import { Factorys } from "../views/productionMain";
import { Start } from "../views/start";
import SearchAppBar from "./topBar";

export const MainWrapper:React.FC = (props) => {
    return(
        <main>
            <SearchAppBar/>
            <Routes>
                {/* <Route path="/" element={<Start />} /> */}
                <Route path="/power" element={<PowerMain />} />
                <Route path="/production" element={<Factorys />} />
                <Route path="/building" element={<Building />} />
                <Route path="/drones" element={<Drones />} />
            </Routes>
        </main>
    )
}