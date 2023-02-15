import { Box, Card, CardContent, Chip, CircularProgress, Container, Grid, IconButton, Typography, LinearProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import {BsExclamationCircle, BsX, BsArrowRightShort} from 'react-icons/bs';
import { GiCargoCrate, GiF1Car, GiMineTruck } from "react-icons/gi";
import axios from 'axios';


export const Vehicles:React.FC = (props) => {
    
    const [doLoadData, setLoadData] = useState(true);
    const [vehicles, setVehicles] = useState<undefined | any>(undefined);

    const loadData = async () => {
        if (doLoadData === true) {

            const response = await axios.get("http://127.0.0.1:8080/getVehicles");
            setVehicles(response.data);
            console.log(response.data);

            setTimeout(() => {
                loadData();
            }, 1000);
        }
    };
    useEffect(()=>{
        loadData();
    }, [])

    return(
        <Container sx={{paddingTop:'50px'}}>
            <Grid container display={'flex'} alignItems={'center'}>
                <Grid item xs>
                    <Typography variant="h2" fontWeight={600}>
                    Manual Vehicles
                    </Typography>
                </Grid>
                <Grid item>
                    <IconButton size="large">
                        <GiCargoCrate size="22px" color="rgba(255,255,255,0.1)" />
                    </IconButton> 
                </Grid>
            </Grid>

            {vehicles ? 
                <>
                    {/* Show all vehicles that are in manual drive mode */}
                    
                    <Grid container spacing={2} sx={{marginY: '30px'}} display={'flex'} alignItems={'center'}>
                        {vehicles.map((vehicle:any, index:number)=>{
                            if(vehicle.AutoPilot != false){
                                // Mode Manual -> show
                                return(<></>)
                            } else {
                                // Mode Autopilot -> hide
                                return ( 
                                    <Grid item xs={4}>
                                        <Card sx={{position:'relative'}}>
                                            <CardContent>
                                                <Grid container spacing={2} sx={{marginBottom: '10px'}}>
                                                    <Grid item>
                                                        {vehicle.VehicleType === "Explorer" &&  <GiF1Car size="36px"/>  }
                                                        {vehicle.VehicleType === "Truck" &&  <GiMineTruck size="36px"/>  }
                                                    </Grid>
                                                    <Grid item xs>
                                                        <Box sx={{position: 'relative'}}>
                                                            <Grid container spacing={1} display={'flex'} alignItems={'center'}>
                                                            <Grid item xs>
                                                                    <Typography variant="h6">{vehicle.VehicleType}</Typography>
                                                                </Grid>
                                                                <Grid item xs>
                                                                    <Typography variant="h6">{vehicle.Airborne}</Typography>
                                                                </Grid>
                                                                <Grid item>
                                                                    {vehicle.Airborne === false ? 
                                                                        <Chip label="No Problems" color="success" size="small" variant="outlined" sx={{backgroundColor: "rgba(33, 150, 83, 0.1)", borderColor: "rgba(33, 150, 83, 0.1)"}}></Chip>
                                                                    :
                                                                        <Chip label="Airborne" color="error" size="small" variant="outlined" sx={{backgroundColor: "rgba(235, 87, 87, 0.12)", borderColor: "rgba(235, 87, 87, 0.12)"}}></Chip>
                                                                    }               
                                                                </Grid>
                                                                <Grid item>
                                                                {vehicle.AutoPilot === false ? 
                                                                        <Chip label="Manual" color="default" size="small" variant="outlined" sx={{backgroundColor: "rgba(255, 255, 255, 0.1)", borderColor: "rgba(255, 255, 255, 0.1)"}}></Chip>
                                                                    :
                                                                        <Chip label="Autopilot" color="info" size="small" variant="outlined" sx={{backgroundColor: "rgba(47, 128, 237, 0.1)", borderColor: "rgba(47, 128, 237, 0.1)"}}></Chip>
                                                                    }
                                                                </Grid>
                                                            </Grid>
                                                        </Box>
                                                    </Grid>
                                                </Grid>
                                                                                
                                                <Grid container spacing={2} display={'flex'} alignItems={'flex-end'}>
                                                
                                                <Grid container>
                                                <Grid item xs>
                                                        <Typography sx={{color: 'rgba(255,255,255,0.5)'}}>Next To</Typography>
                                                        <Typography sx={{color: 'rgba(255,255,255,0.9)'}}>{vehicle.CurrentDestination}</Typography>
                                                    </Grid>
                                                </Grid>
        
                                                    
                                                    <Grid item xs>
                                                        <Grid container>
                                                            <Grid item xs>
                                                                <Typography sx={{color: 'rgba(255,255,255,0.5)'}}>Speed</Typography>
                                                            </Grid>
                                                            <Grid item>
                                                                <Typography sx={{color: 'rgba(255,255,255,0.9)'}}>{parseInt(vehicle.ForwardSpeed)} km/h</Typography>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid container>
                                                            <Grid item xs>
                                                                <Typography sx={{color: 'rgba(255,255,255,0.5)'}}>Gear</Typography>
                                                            </Grid>
                                                            <Grid item>
                                                                <Typography sx={{color: 'rgba(255,255,255,0.9)'}}>{parseInt(vehicle.CurrentGear)}</Typography>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid container>
                                                            <Grid item xs>
                                                                <Typography sx={{color: 'rgba(255,255,255,0.5)'}}>Engine RPM</Typography>
                                                            </Grid>
                                                            <Grid item>
                                                                <Typography sx={{color: 'rgba(255,255,255,0.9)'}}>{parseInt(vehicle.EngineRPM)} RPM</Typography>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid container>
                                                        <Grid item xs>
                                                            <Typography sx={{color: 'rgba(255,255,255,0.5)'}}>Fuel Inventory</Typography>
                                                        </Grid>
                                                        <Grid item>
                                                            <Typography sx={{color: 'rgba(255,255,255,0.9)'}}>{parseInt(vehicle.FuelInventory)}</Typography>
                                                        </Grid>
                                                        <Grid container>
                                                        <Grid item xs>
                                                            <Typography sx={{color: 'rgba(255,255,255,0.5)'}}>Fuel Type</Typography>
                                                        </Grid>
                                                        <Grid item>
                                                            <Typography sx={{color: 'rgba(255,255,255,0.9)'}}>{(vehicle.FuelType)}</Typography>
                                                        </Grid>
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

                    {vehicles.map((vehicle:any, index:number)=>{
                        if(vehicle.AutoPilot === false){
                            // Mode Manual -> show
                            return(<></>)
                        } else {
                            // Mode Autopilot -> hide
                            return ( 
                                <Grid container spacing={2} sx={{marginY: '30px'}} display={'flex'} alignItems={'center'}>
                                    <Grid item xs>
                                        <Typography variant="h2" fontWeight={600}>
                                            Manual Vehicles
                                        </Typography>
                                     </Grid>
                                <Grid item xs={3}>
                                    <Card sx={{position: 'relative'}}>
                                        <CardContent>
                                            <GiCargoCrate size="36px"/>
                                            {/* <Typography variant="h6" sx={{marginY: '10px'}}>{tStation_PrevNext[index][0].StationName}</Typography> */}
                                            
                                            <Typography sx={{position: 'absolute', top: '20px', right: '20px', color: 'rgba(255,255,255,0.5)'}}>Departure</Typography>
    
                                            <Grid container display={'flex'} alignItems={'center'} sx={{marginBottom: '10px'}}>
                                                <Grid item xs>
                                                    <Typography sx={{color: 'rgba(255,255,255,0.5)'}}>Current State</Typography> 
                                                </Grid>
                                                <Grid item>
                                               
                                                </Grid> 
                                            </Grid>                                           
                                            <Grid container>
                                                <Grid item xs>
                                                    <Typography sx={{color: 'rgba(255,255,255,0.5)'}}>Distance</Typography> 
                                                </Grid>
                                                <Grid item>
                                                    {/* {tStation_PrevNext[index][0].location.x}
                                                    {tStation_PrevNext[index][0].location.y}
                                                    {tStation_PrevNext[index][0].location.z}
                                                    {train.location.x}
                                                    {train.location.y}
                                                    {train.location.z} */}
    
                                                    {/* {left} m */}
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                
    
                                <Grid item xs={1}>
                                    </Grid>
    
                                    <Grid item xs={4}>
                                        <Card sx={{position:'relative'}}>
                                            <CardContent>
                                            <Grid container spacing={2} sx={{marginBottom: '10px'}}>
                                                <Grid item>
                                                    {vehicle.VehicleType === "Explorer" &&  <GiF1Car size="36px"/>  }
                                                    {vehicle.VehicleType === "Truck" &&  <GiMineTruck size="36px"/>  }
                                                </Grid>
                                                <Grid item xs>
                                                    <Box sx={{position: 'relative'}}>
                                                        <Grid container spacing={1} display={'flex'} alignItems={'center'}>
                                                        <Grid item xs>
                                                                <Typography variant="h6">{vehicle.VehicleType}</Typography>
                                                            </Grid>
                                                            <Grid item xs>
                                                                <Typography variant="h6">{vehicle.Airborne}</Typography>
                                                            </Grid>
                                                            <Grid item>
                                                                {vehicle.Airborne === false ? 
                                                                    <Chip label="No Problems" color="success" size="small" variant="outlined" sx={{backgroundColor: "rgba(33, 150, 83, 0.1)", borderColor: "rgba(33, 150, 83, 0.1)"}}></Chip>
                                                                :
                                                                    <Chip label="Airborne" color="error" size="small" variant="outlined" sx={{backgroundColor: "rgba(235, 87, 87, 0.12)", borderColor: "rgba(235, 87, 87, 0.12)"}}></Chip>
                                                                }               
                                                            </Grid>
                                                            <Grid item>
                                                            {vehicle.AutoPilot === false ? 
                                                                    <Chip label="Manual" color="default" size="small" variant="outlined" sx={{backgroundColor: "rgba(255, 255, 255, 0.1)", borderColor: "rgba(255, 255, 255, 0.1)"}}></Chip>
                                                                :
                                                                    <Chip label="Autopilot" color="info" size="small" variant="outlined" sx={{backgroundColor: "rgba(47, 128, 237, 0.1)", borderColor: "rgba(47, 128, 237, 0.1)"}}></Chip>
                                                                }
                                                            </Grid>
                                                        </Grid>
                                                    </Box>
                                                </Grid>
                                            </Grid>
    
                                            <Grid container spacing={2} display={'flex'} alignItems={'flex-end'}>
                                            
                                            <Grid container>
                                            <Grid item xs>
                                                    <Typography sx={{color: 'rgba(255,255,255,0.5)'}}>Next To</Typography>
                                                    <Typography sx={{color: 'rgba(255,255,255,0.9)'}}>{vehicle.CurrentDestination}</Typography>
                                                </Grid>
                                            </Grid>
    
                                                
                                                <Grid item xs>
                                                    <Grid container>
                                                        <Grid item xs>
                                                            <Typography sx={{color: 'rgba(255,255,255,0.5)'}}>Speed</Typography>
                                                        </Grid>
                                                        <Grid item>
                                                            <Typography sx={{color: 'rgba(255,255,255,0.9)'}}>{parseInt(vehicle.ForwardSpeed)} km/h</Typography>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid container>
                                                        <Grid item xs>
                                                            <Typography sx={{color: 'rgba(255,255,255,0.5)'}}>Gear</Typography>
                                                        </Grid>
                                                        <Grid item>
                                                            <Typography sx={{color: 'rgba(255,255,255,0.9)'}}>{parseInt(vehicle.CurrentGear)}</Typography>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid container>
                                                        <Grid item xs>
                                                            <Typography sx={{color: 'rgba(255,255,255,0.5)'}}>Engine RPM</Typography>
                                                        </Grid>
                                                        <Grid item>
                                                            <Typography sx={{color: 'rgba(255,255,255,0.9)'}}>{parseInt(vehicle.EngineRPM)} RPM</Typography>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid container>
                                                    <Grid item xs>
                                                         <Typography sx={{color: 'rgba(255,255,255,0.5)'}}>Fuel Inventory</Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Typography sx={{color: 'rgba(255,255,255,0.9)'}}>{parseInt(vehicle.FuelInventory)}</Typography>
                                                    </Grid>
                                                    <Grid container>
                                                    <Grid item xs>
                                                         <Typography sx={{color: 'rgba(255,255,255,0.5)'}}>Fuel Type</Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Typography sx={{color: 'rgba(255,255,255,0.9)'}}>{(vehicle.FuelType)}</Typography>
                                                    </Grid>
                                                </Grid>
                                                </Grid>
                                                </Grid>
                                            </Grid>
                                            {/* <LinearProgress color="info" variant="determinate" value={percentDone} sx={{position: 'absolute', bottom: '0px', left: '0px', right: '0px'}} /> */}
                                            </CardContent>
                                        </Card>
                                    </Grid>
    
                                    <Grid item xs={1}>
                                    </Grid>
    
                            </Grid> 
                            )
                        }
                        

                    })}
        
                </>
            :
            <CircularProgress/>
                }
           </Container> 

           
        )
        
}