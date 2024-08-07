import { Box, Card, CardContent, Chip, CircularProgress, Container, Grid, IconButton, Typography, LinearProgress, Stack, Tooltip } from "@mui/joy";
import React, { useContext, useEffect, useState } from "react";
import {BsExclamationCircle, BsX, BsArrowRightShort, BsXCircle, BsQuestionCircle} from 'react-icons/bs';
import axios from 'axios';
import { SettingsContext } from "../context/Settings";

import { Link } from "react-router-dom";
import { Skeleton } from "@mui/material";
import { useLocalStorage } from "../hooks/localStorage";
import { defaultSettingsData } from "./settings";


export const Vehicles:React.FC = (props) => {
    
    const [doLoadData, setLoadData] = useState(true);
    const [vehicles, setVehicles] = useState<undefined | any>(undefined);
    const [settings, _] = useLocalStorage("rmd_settings", defaultSettingsData);

    const loadData = async () => {
        if (doLoadData === true) {

            const response = await axios.get("http://127.0.0.1:8080/getVehicles");
            setVehicles(response.data);
            // console.log(response.data);

            setTimeout(() => {
                loadData();
            }, settings.interval);
        }
    };
    
    useEffect(()=>{
        loadData();
    }, [])

    return(
        <Container sx={{paddingTop:'50px'}}>
            <Card variant="outlined" sx={{paddingBottom: '0px', marginBottom: '30px'}}>
                <CardContent>
                    <Grid container display={'flex'} alignItems={'center'} marginBottom={'20px'}>
                        <Grid xs>
                            <Typography level="h2" fontWeight={600} >
                                All Vehicles
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>


            {vehicles ? 
                <>

                    <Grid container spacing={3} sx={{marginBottomY: '30px'}} display={'flex'} alignItems={'center'}>
                        {vehicles.map((vehicle:any, index:number)=>{
                            return ( 
                                <Grid xs={3}>
                                    <a href={"#"+index} style={{textDecoration: 'none'}}>
                                        <Card  variant="outlined" sx={{position:'relative', paddingY: 0, '&:hover': {
                                            borderColor: 'var(--joy-palette-neutral-700)'
                                        }, cursor: 'pointer'}}>
                                            <CardContent>                                                                                
                                                <Grid container spacing={4} sx={{paddingX: 0}} >
                                                    <Grid>
                                                        {vehicle.VehicleType === "Explorer" &&  <img src="./assets/Vehicles/Explorer_256.png" alt="image" style={{height: '70px', width: '70px'}}></img>  }
                                                        {vehicle.VehicleType === "Truck" &&  <img src="./assets/Vehicles/Truck_256.png" alt="image" style={{height: '70px', width: '70px'}}></img>  }
                                                        {vehicle.VehicleType === "Tractor" &&  <img src="./assets/Vehicles/Tractor_256.png" alt="image" style={{height: '70px', width: '70px'}}></img>  }
                                                    </Grid>

                                                    <Grid xs>
                                                        <Box sx={{marginBottom: '10px'}}>
                                                            {vehicle.AutoPilot === false ? 
                                                                <Chip color="primary" size="sm" variant="outlined" sx={{backgroundColor: "rgba(255, 255, 255, 0.1)", borderColor: "rgba(255, 255, 255, 0.1)"}}>Manual</Chip>
                                                            :
                                                                <Chip color="neutral" size="sm" variant="outlined" sx={{backgroundColor: "rgba(47, 128, 237, 0.1)", borderColor: "rgba(47, 128, 237, 0.1)"}}>Autopilot</Chip>
                                                            }
                                                        </Box>  
                                                        <Typography sx={{color: 'rgba(255,255,255,0.9)'}}>Speed: {parseInt(vehicle.ForwardSpeed)} km/h</Typography>
                                                        
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                        </Card>
                                    </a>
                                </Grid>
                            )

                        })}
                    </Grid> 

                    {/* Show all vehicles that are in manual drive mode */}
                    <Typography level="h2" fontWeight={600} marginTop={'40px'} marginBottom={'20px'}>Manual Vehicles</Typography>
                    
                    <Grid container spacing={3} sx={{marginBottomY: '30px'}} display={'flex'} alignItems={'center'}>
                        {vehicles.map((vehicle:any, index:number)=>{
                            if(vehicle.AutoPilot != false){
                                // Mode Manual -> show
                                return(<></>)
                            } else {
                                // Mode Autopilot -> hide
                                return ( 
                                    <Grid xs={4}>
                                        <div id={index.toString()}></div>
                                        <Card sx={{position:'relative', paddingBottom: 0}} variant="outlined">
                                            <CardContent>
                                                <Stack display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
                                                    {vehicle.VehicleType === "Explorer" &&  <img src="./assets/Vehicles/Explorer_256.png" alt="image" style={{height: '100px', width: '100px'}}></img>  }
                                                    {vehicle.VehicleType === "Truck" &&  <img src="./assets/Vehicles/Truck_256.png" alt="image" style={{height: '100px', width: '100px'}}></img>  }
                                                    {vehicle.VehicleType === "Tractor" &&  <img src="./assets/Vehicles/Tractor_256.png" alt="image" style={{height: '100px', width: '100px'}}></img>  }
                                                    <Box sx={{position: 'relative'}}>
                                                        <Grid container spacing={1} display={'flex'} alignItems={'center'}>
                                                            <Grid>
                                                                {vehicle.Airborne === false ? 
                                                                    <Chip color="success" size="sm" variant="outlined" sx={{backgroundColor: "rgba(33, 150, 83, 0.1)", borderColor: "rgba(33, 150, 83, 0.1)"}}>No Problems</Chip>
                                                                :
                                                                    <Chip color="danger" size="sm" variant="outlined" sx={{backgroundColor: "rgba(235, 87, 87, 0.12)", borderColor: "rgba(235, 87, 87, 0.12)"}}>Airborne</Chip>
                                                                }               
                                                            </Grid>
                                                            <Grid>
                                                            {vehicle.AutoPilot === false ? 
                                                                    <Chip color="primary" size="sm" variant="outlined" sx={{backgroundColor: "rgba(255, 255, 255, 0.1)", borderColor: "rgba(255, 255, 255, 0.1)"}}>Manual</Chip>
                                                                :
                                                                    <Chip color="neutral" size="sm" variant="outlined" sx={{backgroundColor: "rgba(47, 128, 237, 0.1)", borderColor: "rgba(47, 128, 237, 0.1)"}}>Autopilot</Chip>
                                                                }
                                                            </Grid>
                                                        </Grid>
                                                    </Box>
                                                    <Typography marginLeft={'5px'} level="body2">VehicleID: #{vehicle.ID}</Typography>
                                                </Stack>


                                                                                
                                                <Grid container spacing={2} sx={{paddingX: 0}} >
                                                    <Grid xs>
                                                        <Grid container>
                                                            <Grid xs>
                                                                <Typography sx={{color: 'rgba(255,255,255,0.5)'}}>Speed</Typography>
                                                            </Grid>
                                                            <Grid>
                                                                <Typography sx={{color: 'rgba(255,255,255,0.9)'}}>{parseInt(vehicle.ForwardSpeed)} km/h</Typography>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid container>
                                                            <Grid xs>
                                                                <Typography sx={{color: 'rgba(255,255,255,0.5)'}}>Gear</Typography>
                                                            </Grid>
                                                            <Grid>
                                                                <Typography sx={{color: 'rgba(255,255,255,0.9)'}}>{parseInt(vehicle.CurrentGear)}</Typography>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid container>
                                                            <Grid xs>
                                                                <Typography sx={{color: 'rgba(255,255,255,0.5)'}}>Engine RPM</Typography>
                                                            </Grid>
                                                            <Grid>
                                                                <Typography sx={{color: 'rgba(255,255,255,0.9)'}}>{parseInt(vehicle.EngineRPM)} RPM</Typography>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid container>
                                                            <Grid xs>
                                                                <Typography sx={{color: 'rgba(255,255,255,0.5)'}}>Fuel Inventory</Typography>
                                                            </Grid>
                                                            <Grid>
                                                                <Typography sx={{color: 'rgba(255,255,255,0.9)'}}>{parseInt(vehicle.FuelInventory)}</Typography>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid container>
                                                            <Grid xs>
                                                                <Typography sx={{color: 'rgba(255,255,255,0.5)'}}>Fuel Type</Typography>
                                                            </Grid>
                                                            <Grid>
                                                                {vehicle.FuelType === "Alien Carapace" &&  <img src="./assets/Items/IconDesc_AlienCarapace_256.png" alt="image" style={{height: '30px', width: '30px'}}></img>  }
                                                                {vehicle.FuelType === "Alien Organs" &&  <img src="./assets/Items/IconDesc_AlienOrgans_256.png" alt="image" style={{height: '30px', width: '30px'}}></img>  }
                                                                {vehicle.FuelType === "Battery" &&  <img src="./assets/Items/IconDesc_Battery_256.png" alt="image" style={{height: '30px', width: '30px'}}></img>  }
                                                                {vehicle.FuelType === "Biomass" &&  <img src="./assets/Items/IconDesc_Biomass_Final_256.png" alt="image" style={{height: '30px', width: '30px'}}></img>  }
                                                                {vehicle.FuelType === "Coal" &&  <img src="./assets/Items/IconDesc_CoalOre_256.png" alt="image" style={{height: '30px', width: '30px'}}></img>  }
                                                                {vehicle.FuelType === "Color Cartridge" &&  <img src="./assets/Items/IconDesc_ColorCartridge_256.png" alt="image" style={{height: '30px', width: '30px'}}></img>  }
                                                                {vehicle.FuelType === "Compacted Coal" &&  <img src="./assets/Items/IconDesc_CompactedCoal_256.png" alt="image" style={{height: '30px', width: '30px'}}></img>  }
                                                                {vehicle.FuelType === "Fabric" &&  <img src="./assets/Items/IconDesc_Fabric_256.png" alt="image" style={{height: '30px', width: '30px'}}></img>  }
                                                                {vehicle.FuelType === "Flower Petals" &&  <img src="./assets/Items/FlowerPetals_Final_256.png" alt="image" style={{height: '30px', width: '30px'}}></img>  }
                                                                {vehicle.FuelType === "Fuel" &&  <img src="./assets/Items/IconDesc_LiquidFuel_Pipe_256.png" alt="image" style={{height: '30px', width: '30px'}}></img>  }
                                                                {vehicle.FuelType === "Leaves" &&  <img src="./assets/Items/IconDesc_Leaves_256.png" alt="image" style={{height: '30px', width: '30px'}}></img>  }
                                                                {vehicle.FuelType === "Liquid Biofuel" &&  <img src="./assets/Items/IconDesc_LiquidBiofuel_Pipe_256.png" alt="image" style={{height: '30px', width: '30px'}}></img>  }
                                                                {vehicle.FuelType === "Mycelia" &&  <img src="./assets/Items/IconDesc_Mycelia_256.png" alt="image" style={{height: '30px', width: '30px'}}></img>  }
                                                                {vehicle.FuelType === "Packaged Fuel" &&  <img src="./assets/Items/IconDesc_Fuel_256.png" alt="image" style={{height: '30px', width: '30px'}}></img>  }
                                                                {vehicle.FuelType === "Packaged Heavy Oil Residue" &&  <img src="./assets/Items/OilResidue_256.png" alt="image" style={{height: '30px', width: '30px'}}></img>  }
                                                                {vehicle.FuelType === "Packaged Liquid Biofuel" &&  <img src="./assets/Items/IconDesc_LiquidBiofuel_256.png" alt="image" style={{height: '30px', width: '30px'}}></img>  }
                                                                {vehicle.FuelType === "Packaged Oil" &&  <img src="./assets/Items/Oil_256.png" alt="image" style={{height: '30px', width: '30px'}}></img>  }
                                                                {vehicle.FuelType === "Packaged Turbofuel" &&  <img src="./assets/Items/IconDesc_TurboFuel_256.png" alt="image" style={{height: '30px', width: '30px'}}></img>  }
                                                                {vehicle.FuelType === "Petroleum Coke" &&  <img src="./assets/Items/IconDesc_PetroleumCoke_256.png" alt="image" style={{height: '30px', width: '30px'}}></img>  }
                                                                {vehicle.FuelType === "Plutonium Fuel Rod" &&  <img src="./assets/Items/IconDesc_PlutoniumFuelRod_256.png" alt="image" style={{height: '30px', width: '30px'}}></img>  }
                                                                {vehicle.FuelType === "Solid Biofuel" &&  <img src="./assets/Items/IconDesc_SolidBiofuel_256.png" alt="image" style={{height: '30px', width: '30px'}}></img>  }
                                                                {vehicle.FuelType === "Turbofuel" &&  <img src="./assets/Items/IconDesc_LiquidTurboFuel_Pipe_256.png" alt="image" style={{height: '30px', width: '30px'}}></img>  }
                                                                {vehicle.FuelType === "Uranium Fuel Rod" &&  <img src="./assets/Items/IconDesc_NuclearFuelRod_256.png" alt="image" style={{height: '30px', width: '30px'}}></img>  }
                                                                {vehicle.FuelType === "Wood" &&  <img src="./assets/Items/IconDesc_Wood_256.png" alt="image" style={{height: '30px', width: '30px'}}></img>  }
                                                                {vehicle.FuelType === "N/A" &&  <BsXCircle color="red" size={'25px'}/>  }
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            {/* <LinearProgress color="info" variant="determinate" value={percentDone} sx={{position: 'absolute', bottom: '0px', left: '0px', right: '0px'}} /> */}
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                )
                            }

                        })}
                    </Grid> 
                    {/* Show all vehicles that are in autopilot */}
                    <Typography level="h2" fontWeight={600} marginTop={'40px'} marginBottom={'20px'}>
                        Autopiloted Vehicles
                    </Typography>
                    <Grid container spacing={3}>
                        {vehicles.map((vehicle:any, index:number)=>{
                            if(vehicle.AutoPilot === false){
                                // Mode Manual -> show
                                return(<></>)
                            } else {
                                return ( 
                                    <Grid xs={4}>
                                        <div id={index.toString()}></div>
                                        <Card sx={{position:'relative', paddingBottom: 0}} variant="outlined">
                                            <CardContent>
                                                <Stack display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
                                                    {vehicle.VehicleType === "Explorer" &&  <img src="./assets/Vehicles/Explorer_256.png" alt="image" style={{height: '100px', width: '100px'}}></img>  }
                                                    {vehicle.VehicleType === "Truck" &&  <img src="./assets/Vehicles/Truck_256.png" alt="image" style={{height: '100px', width: '100px'}}></img>  }
                                                    {vehicle.VehicleType === "Tractor" &&  <img src="./assets/Vehicles/Tractor_256.png" alt="image" style={{height: '100px', width: '100px'}}></img>  }
                                                    <Box sx={{position: 'relative'}}>
                                                        <Grid container spacing={1} display={'flex'} alignItems={'center'}>
                                                            <Grid>
                                                                {vehicle.Airborne === false ? 
                                                                    <Chip color="success" size="sm" variant="outlined" sx={{backgroundColor: "rgba(33, 150, 83, 0.1)", borderColor: "rgba(33, 150, 83, 0.1)"}}>No Problems</Chip>
                                                                :
                                                                    <Chip color="danger" size="sm" variant="outlined" sx={{backgroundColor: "rgba(235, 87, 87, 0.12)", borderColor: "rgba(235, 87, 87, 0.12)"}}>Airborne</Chip>
                                                                }               
                                                            </Grid>
                                                            <Grid>
                                                            {vehicle.AutoPilot === false ? 
                                                                    <Chip color="primary" size="sm" variant="outlined" sx={{backgroundColor: "rgba(255, 255, 255, 0.1)", borderColor: "rgba(255, 255, 255, 0.1)"}}>Manual</Chip>
                                                                :
                                                                    <Chip color="neutral" size="sm" variant="outlined" sx={{backgroundColor: "rgba(47, 128, 237, 0.1)", borderColor: "rgba(47, 128, 237, 0.1)"}}>Autopilot</Chip>
                                                                }
                                                            </Grid>
                                                        </Grid>
                                                    </Box>
                                                    <Typography marginLeft={'5px'} level="body2">VehicleID: #{vehicle.ID}</Typography>
                                                </Stack>


                                                                                
                                                <Grid container spacing={2} sx={{paddingX: 0}} >
                                                    <Grid xs>
                                                        <Grid container>
                                                            <Grid xs>
                                                                <Typography sx={{color: 'rgba(255,255,255,0.5)'}}>Speed</Typography>
                                                            </Grid>
                                                            <Grid>
                                                                <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                                                    <Typography sx={{color: 'rgba(255,255,255,0.9)'}}>{parseInt(vehicle.ForwardSpeed)} km/h</Typography>
                                                                    {vehicle.ForwardSpeed === 0 && parseInt(vehicle.EngineRPM) > 0 && <Tooltip title="If the vehicle is too far away from player the speed cannot be read."><IconButton sx={{marginLeft: '10px'}} size="sm" color="neutral" variant="plain"><BsQuestionCircle/></IconButton></Tooltip>}
                                                                </Box>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid container>
                                                            <Grid xs>
                                                                <Typography sx={{color: 'rgba(255,255,255,0.5)'}}>Gear</Typography>
                                                            </Grid>
                                                            <Grid>
                                                                <Typography sx={{color: 'rgba(255,255,255,0.9)'}}>{parseInt(vehicle.CurrentGear)}</Typography>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid container>
                                                            <Grid xs>
                                                                <Typography sx={{color: 'rgba(255,255,255,0.5)'}}>Engine RPM</Typography>
                                                            </Grid>
                                                            <Grid>
                                                                <Typography sx={{color: 'rgba(255,255,255,0.9)'}}>{parseInt(vehicle.EngineRPM)} RPM</Typography>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid container>
                                                            <Grid xs>
                                                                <Typography sx={{color: 'rgba(255,255,255,0.5)'}}>Fuel Inventory</Typography>
                                                            </Grid>
                                                            <Grid>
                                                                <Typography sx={{color: 'rgba(255,255,255,0.9)'}}>{parseInt(vehicle.FuelInventory)}</Typography>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid container>
                                                            <Grid xs>
                                                                <Typography sx={{color: 'rgba(255,255,255,0.5)'}}>Fuel Type</Typography>
                                                            </Grid>
                                                            <Grid>
                                                                {vehicle.FuelType === "Alien Carapace" &&  <img src="./assets/Items/IconDesc_AlienCarapace_256.png" alt="image" style={{height: '30px', width: '30px'}}></img>  }
                                                                {vehicle.FuelType === "Alien Organs" &&  <img src="./assets/Items/IconDesc_AlienOrgans_256.png" alt="image" style={{height: '30px', width: '30px'}}></img>  }
                                                                {vehicle.FuelType === "Battery" &&  <img src="./assets/Items/IconDesc_Battery_256.png" alt="image" style={{height: '30px', width: '30px'}}></img>  }
                                                                {vehicle.FuelType === "Biomass" &&  <img src="./assets/Items/IconDesc_Biomass_Final_256.png" alt="image" style={{height: '30px', width: '30px'}}></img>  }
                                                                {vehicle.FuelType === "Coal" &&  <img src="./assets/Items/IconDesc_CoalOre_256.png" alt="image" style={{height: '30px', width: '30px'}}></img>  }
                                                                {vehicle.FuelType === "Color Cartridge" &&  <img src="./assets/Items/IconDesc_ColorCartridge_256.png" alt="image" style={{height: '30px', width: '30px'}}></img>  }
                                                                {vehicle.FuelType === "Compacted Coal" &&  <img src="./assets/Items/IconDesc_CompactedCoal_256.png" alt="image" style={{height: '30px', width: '30px'}}></img>  }
                                                                {vehicle.FuelType === "Fabric" &&  <img src="./assets/Items/IconDesc_Fabric_256.png" alt="image" style={{height: '30px', width: '30px'}}></img>  }
                                                                {vehicle.FuelType === "Flower Petals" &&  <img src="./assets/Items/FlowerPetals_Final_256.png" alt="image" style={{height: '30px', width: '30px'}}></img>  }
                                                                {vehicle.FuelType === "Fuel" &&  <img src="./assets/Items/IconDesc_LiquidFuel_Pipe_256.png" alt="image" style={{height: '30px', width: '30px'}}></img>  }
                                                                {vehicle.FuelType === "Leaves" &&  <img src="./assets/Items/IconDesc_Leaves_256.png" alt="image" style={{height: '30px', width: '30px'}}></img>  }
                                                                {vehicle.FuelType === "Liquid Biofuel" &&  <img src="./assets/Items/IconDesc_LiquidBiofuel_Pipe_256.png" alt="image" style={{height: '30px', width: '30px'}}></img>  }
                                                                {vehicle.FuelType === "Mycelia" &&  <img src="./assets/Items/IconDesc_Mycelia_256.png" alt="image" style={{height: '30px', width: '30px'}}></img>  }
                                                                {vehicle.FuelType === "Packaged Fuel" &&  <img src="./assets/Items/IconDesc_Fuel_256.png" alt="image" style={{height: '30px', width: '30px'}}></img>  }
                                                                {vehicle.FuelType === "Packaged Heavy Oil Residue" &&  <img src="./assets/Items/OilResidue_256.png" alt="image" style={{height: '30px', width: '30px'}}></img>  }
                                                                {vehicle.FuelType === "Packaged Liquid Biofuel" &&  <img src="./assets/Items/IconDesc_LiquidBiofuel_256.png" alt="image" style={{height: '30px', width: '30px'}}></img>  }
                                                                {vehicle.FuelType === "Packaged Oil" &&  <img src="./assets/Items/Oil_256.png" alt="image" style={{height: '30px', width: '30px'}}></img>  }
                                                                {vehicle.FuelType === "Packaged Turbofuel" &&  <img src="./assets/Items/IconDesc_TurboFuel_256.png" alt="image" style={{height: '30px', width: '30px'}}></img>  }
                                                                {vehicle.FuelType === "Petroleum Coke" &&  <img src="./assets/Items/IconDesc_PetroleumCoke_256.png" alt="image" style={{height: '30px', width: '30px'}}></img>  }
                                                                {vehicle.FuelType === "Plutonium Fuel Rod" &&  <img src="./assets/Items/IconDesc_PlutoniumFuelRod_256.png" alt="image" style={{height: '30px', width: '30px'}}></img>  }
                                                                {vehicle.FuelType === "Solid Biofuel" &&  <img src="./assets/Items/IconDesc_SolidBiofuel_256.png" alt="image" style={{height: '30px', width: '30px'}}></img>  }
                                                                {vehicle.FuelType === "Turbofuel" &&  <img src="./assets/Items/IconDesc_LiquidTurboFuel_Pipe_256.png" alt="image" style={{height: '30px', width: '30px'}}></img>  }
                                                                {vehicle.FuelType === "Uranium Fuel Rod" &&  <img src="./assets/Items/IconDesc_NuclearFuelRod_256.png" alt="image" style={{height: '30px', width: '30px'}}></img>  }
                                                                {vehicle.FuelType === "Wood" &&  <img src="./assets/Items/IconDesc_Wood_256.png" alt="image" style={{height: '30px', width: '30px'}}></img>  }
                                                                {vehicle.FuelType === "N/A" &&  <BsXCircle color="red" size={'25px'}/>  }
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            {/* <LinearProgress color="info" variant="determinate" value={percentDone} sx={{position: 'absolute', bottom: '0px', left: '0px', right: '0px'}} /> */}
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                )
                            }
                        })}      
                    </Grid>      
        
                </>
            :
                <>
                    <Grid container spacing={3} sx={{marginBottomY: '30px', opacity: 0.5}} display={'flex'} alignItems={'center'}>
                        <Grid xs={3}>
                            <Card  variant="outlined" sx={{}}>
                                <CardContent>                                                                                
                                    <Grid container spacing={4} sx={{paddingX: 0}} >
                                        <Grid>
                                            {/* {vehicle.VehicleType === "Explorer" &&  <img src="./assets/Vehicles/Explorer_256.png" alt="image" style={{height: '70px', width: '70px'}}></img>  }
                                            {vehicle.VehicleType === "Truck" &&  <img src="./assets/Vehicles/Truck_256.png" alt="image" style={{height: '70px', width: '70px'}}></img>  }
                                            {vehicle.VehicleType === "Tractor" &&  <img src="./assets/Vehicles/Tractor_256.png" alt="image" style={{height: '70px', width: '70px'}}></img>  } */}
                                            <Skeleton variant="circular" height="50px" width="50px"/>
                                        </Grid>

                                        <Grid xs>
                                            <Box sx={{marginBottom: '10px'}}>
                                                <Skeleton variant="rounded" height="20px" width="70px"/>
                                            </Box>  
                                            {/* <Typography sx={{color: 'rgba(255,255,255,0.9)'}}>Speed: {parseInt(vehicle.ForwardSpeed)} km/h</Typography> */}
                                            <Skeleton width="50px"/>
                                            
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid xs={3}>
                            <Card  variant="outlined" sx={{}}>
                                <CardContent>                                                                                
                                    <Grid container spacing={4} sx={{paddingX: 0}} >
                                        <Grid>
                                            {/* {vehicle.VehicleType === "Explorer" &&  <img src="./assets/Vehicles/Explorer_256.png" alt="image" style={{height: '70px', width: '70px'}}></img>  }
                                            {vehicle.VehicleType === "Truck" &&  <img src="./assets/Vehicles/Truck_256.png" alt="image" style={{height: '70px', width: '70px'}}></img>  }
                                            {vehicle.VehicleType === "Tractor" &&  <img src="./assets/Vehicles/Tractor_256.png" alt="image" style={{height: '70px', width: '70px'}}></img>  } */}
                                            <Skeleton variant="circular" height="50px" width="50px"/>
                                        </Grid>

                                        <Grid xs>
                                            <Box sx={{marginBottom: '10px'}}>
                                                <Skeleton variant="rounded" height="20px" width="70px"/>
                                            </Box>  
                                            {/* <Typography sx={{color: 'rgba(255,255,255,0.9)'}}>Speed: {parseInt(vehicle.ForwardSpeed)} km/h</Typography> */}
                                            <Skeleton width="50px"/>
                                            
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid> 

                    <Typography level="h2" fontWeight={600} marginTop={'40px'} marginBottom={'20px'}>Manual Vehicles</Typography>
                    
                    <Grid container spacing={3} sx={{marginBottomY: '30px', opacity: 0.5}} display={'flex'} alignItems={'center'}>
                        <Grid xs={4}>
                            <Card sx={{position:'relative', paddingBottom: 0}} variant="outlined">
                                <CardContent>
                                    <Stack display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
                                        <Skeleton variant="circular" height="100px" width="100px"/>
                                        <Box sx={{position: 'relative'}}>
                                            <Grid container spacing={1} display={'flex'} alignItems={'center'}>
                                                <Grid>
                                                    <Skeleton variant="rounded" height="20px" width="70px"/>
                                                </Grid>
                                                <Grid>
                                                    <Skeleton variant="rounded" height="20px" width="90px"/>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                        <Skeleton width="50px"/>
                                    </Stack>


                                                                    
                                    <Grid container spacing={2} sx={{paddingX: 0}} >
                                        <Grid xs>
                                            <Grid container>
                                                <Grid xs>
                                                    <Typography sx={{color: 'rgba(255,255,255,0.5)'}}>Speed</Typography>
                                                </Grid>
                                                <Grid>
                                                    <Skeleton width="120px"/>
                                                </Grid>
                                            </Grid>
                                            <Grid container>
                                                <Grid xs>
                                                    <Typography sx={{color: 'rgba(255,255,255,0.5)'}}>Gear</Typography>
                                                </Grid>
                                                <Grid>
                                                    <Skeleton width="100px"/>
                                                </Grid>
                                            </Grid>
                                            <Grid container>
                                                <Grid xs>
                                                    <Typography sx={{color: 'rgba(255,255,255,0.5)'}}>Engine RPM</Typography>
                                                </Grid>
                                                <Grid>
                                                    <Skeleton width="80px"/>
                                                </Grid>
                                            </Grid>
                                            <Grid container>
                                                <Grid xs>
                                                    <Typography sx={{color: 'rgba(255,255,255,0.5)'}}>Fuel Inventory</Typography>
                                                </Grid>
                                                <Grid>
                                                    <Skeleton width="110px"/>
                                                </Grid>
                                            </Grid>
                                            <Grid container>
                                                <Grid xs>
                                                    <Typography sx={{color: 'rgba(255,255,255,0.5)'}}>Fuel Type</Typography>
                                                </Grid>
                                                <Grid>
                                                    <Skeleton width="50px"/>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid xs={4}>
                            <Card sx={{position:'relative', paddingBottom: 0}} variant="outlined">
                                <CardContent>
                                    <Stack display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
                                        <Skeleton variant="circular" height="100px" width="100px"/>
                                        <Box sx={{position: 'relative'}}>
                                            <Grid container spacing={1} display={'flex'} alignItems={'center'}>
                                                <Grid>
                                                    <Skeleton variant="rounded" height="20px" width="70px"/>
                                                </Grid>
                                                <Grid>
                                                    <Skeleton variant="rounded" height="20px" width="90px"/>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                        <Skeleton width="50px"/>
                                    </Stack>


                                                                    
                                    <Grid container spacing={2} sx={{paddingX: 0}} >
                                        <Grid xs>
                                            <Grid container>
                                                <Grid xs>
                                                    <Typography sx={{color: 'rgba(255,255,255,0.5)'}}>Speed</Typography>
                                                </Grid>
                                                <Grid>
                                                    <Skeleton width="120px"/>
                                                </Grid>
                                            </Grid>
                                            <Grid container>
                                                <Grid xs>
                                                    <Typography sx={{color: 'rgba(255,255,255,0.5)'}}>Gear</Typography>
                                                </Grid>
                                                <Grid>
                                                    <Skeleton width="100px"/>
                                                </Grid>
                                            </Grid>
                                            <Grid container>
                                                <Grid xs>
                                                    <Typography sx={{color: 'rgba(255,255,255,0.5)'}}>Engine RPM</Typography>
                                                </Grid>
                                                <Grid>
                                                    <Skeleton width="80px"/>
                                                </Grid>
                                            </Grid>
                                            <Grid container>
                                                <Grid xs>
                                                    <Typography sx={{color: 'rgba(255,255,255,0.5)'}}>Fuel Inventory</Typography>
                                                </Grid>
                                                <Grid>
                                                    <Skeleton width="110px"/>
                                                </Grid>
                                            </Grid>
                                            <Grid container>
                                                <Grid xs>
                                                    <Typography sx={{color: 'rgba(255,255,255,0.5)'}}>Fuel Type</Typography>
                                                </Grid>
                                                <Grid>
                                                    <Skeleton width="50px"/>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid> 

                    <Typography level="h2" fontWeight={600} marginTop={'40px'} marginBottom={'20px'}>
                        Autopiloted Vehicles
                    </Typography>

                    <Grid container spacing={3} sx={{marginBottomY: '30px', opacity: 0.5}} display={'flex'} alignItems={'center'}>
                        <Grid xs={4}>
                            <Card sx={{position:'relative', paddingBottom: 0}} variant="outlined">
                                <CardContent>
                                    <Stack display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
                                        <Skeleton variant="circular" height="100px" width="100px"/>
                                        <Box sx={{position: 'relative'}}>
                                            <Grid container spacing={1} display={'flex'} alignItems={'center'}>
                                                <Grid>
                                                    <Skeleton variant="rounded" height="20px" width="70px"/>
                                                </Grid>
                                                <Grid>
                                                    <Skeleton variant="rounded" height="20px" width="90px"/>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                        <Skeleton width="50px"/>
                                    </Stack>


                                                                    
                                    <Grid container spacing={2} sx={{paddingX: 0}} >
                                        <Grid xs>
                                            <Grid container>
                                                <Grid xs>
                                                    <Typography sx={{color: 'rgba(255,255,255,0.5)'}}>Speed</Typography>
                                                </Grid>
                                                <Grid>
                                                    <Skeleton width="120px"/>
                                                </Grid>
                                            </Grid>
                                            <Grid container>
                                                <Grid xs>
                                                    <Typography sx={{color: 'rgba(255,255,255,0.5)'}}>Gear</Typography>
                                                </Grid>
                                                <Grid>
                                                    <Skeleton width="100px"/>
                                                </Grid>
                                            </Grid>
                                            <Grid container>
                                                <Grid xs>
                                                    <Typography sx={{color: 'rgba(255,255,255,0.5)'}}>Engine RPM</Typography>
                                                </Grid>
                                                <Grid>
                                                    <Skeleton width="80px"/>
                                                </Grid>
                                            </Grid>
                                            <Grid container>
                                                <Grid xs>
                                                    <Typography sx={{color: 'rgba(255,255,255,0.5)'}}>Fuel Inventory</Typography>
                                                </Grid>
                                                <Grid>
                                                    <Skeleton width="110px"/>
                                                </Grid>
                                            </Grid>
                                            <Grid container>
                                                <Grid xs>
                                                    <Typography sx={{color: 'rgba(255,255,255,0.5)'}}>Fuel Type</Typography>
                                                </Grid>
                                                <Grid>
                                                    <Skeleton width="50px"/>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid> 
                </>
            }
        </Container> 

        
    )
        
}