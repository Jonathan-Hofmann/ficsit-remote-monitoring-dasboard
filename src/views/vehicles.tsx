import { Box, Card, CardContent, Chip, CircularProgress, Container, Grid, IconButton, Typography, LinearProgress, Stack } from "@mui/joy";
import React, { useContext, useEffect, useState } from "react";
import {BsExclamationCircle, BsX, BsArrowRightShort} from 'react-icons/bs';
import { GiCargoCrate, GiF1Car, GiMineTruck } from "react-icons/gi";
import axios from 'axios';
import { SettingsContext } from "../context/Settings";


export const Vehicles:React.FC = (props) => {
    
    const [doLoadData, setLoadData] = useState(true);
    const [vehicles, setVehicles] = useState<undefined | any>(undefined);

    const settings = useContext(SettingsContext);

    const loadData = async () => {
        if (doLoadData === true) {

            const response = await axios.get("http://127.0.0.1:8080/getVehicles");
            setVehicles(response.data);
            console.log(response.data);

            setTimeout(() => {
                loadData();
            }, settings.msInterval);
        }
    };
    
    useEffect(()=>{
        loadData();
    }, [])

    return(
        <Container sx={{paddingTop:'50px'}}>
            <Grid container display={'flex'} alignItems={'center'} marginBottom={'20px'}>
                <Grid xs>
                    <Typography level="h2" fontWeight={600} >
                    Manual Vehicles
                    </Typography>
                </Grid>
                <Grid>
                    {/* <IconButton size="lg">
                        <GiCargoCrate size="22px" color="rgba(255,255,255,0.1)" />
                    </IconButton>  */}
                </Grid>
            </Grid>

            {vehicles ? 
                <>
                    {/* Show all vehicles that are in manual drive mode */}
                    
                    <Grid container spacing={3} sx={{marginBottomY: '30px'}} display={'flex'} alignItems={'center'}>
                        {vehicles.map((vehicle:any, index:number)=>{
                            if(vehicle.AutoPilot != false){
                                // Mode Manual -> show
                                return(<></>)
                            } else {
                                // Mode Autopilot -> hide
                                return ( 
                                    <Grid xs={4}>
                                        <Card sx={{position:'relative'}}>
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
                                                                <Typography sx={{color: 'rgba(255,255,255,0.9)'}}>{(vehicle.FuelType)}</Typography>
                                                                {vehicle.FuelType === "Leaves" &&  <img src="./assets/Items/IconDesc_Fuel_256.png" alt="image" style={{height: '30px', width: '30px'}}></img>  }
                                                                {vehicle.FuelType === "Packaged Fuel" &&  <img src="./assets/Items/IconDesc_Fuel_256.png" alt="image" style={{height: '30px', width: '30px'}}></img>  }







                                                                {vehicle.FuelType === "Packaged Fuel" &&  <img src="./assets/Items/IconDesc_Fuel_256.png" alt="image" style={{height: '30px', width: '30px'}}></img>  }
                                                                {vehicle.FuelType === "Solid Biofuel" &&  <img src="./assets/Items/IconDesc_SolidBiofuel_256.png" alt="image" style={{height: '30px', width: '30px'}}></img>  }
                                                                {vehicle.FuelType === "N/A" &&  <img src="./assets/Items/IconDesc_Fuel_256.png" alt="image" style={{height: '30px', width: '30px'}}></img>  }
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
                    {vehicles.map((vehicle:any, index:number)=>{
                        if(vehicle.AutoPilot === false){
                            // Mode Manual -> show
                            return(<></>)
                        } else {
                            // Mode Autopilot -> hide
                            
                            return( 
                                <Grid container spacing={3} sx={{marginBottomY: '30px'}} display={'flex'} alignItems={'center'}>
                                    <Grid xs={4}>
                                        <Card sx={{position:'relative'}}>
                                            <CardContent>
                                            <Grid container spacing={2} sx={{marginBottomBottom: '10px'}}>
                                                <Grid>
                                                    {vehicle.VehicleType === "Explorer" &&  <GiF1Car size="36px"/>  }
                                                    {vehicle.VehicleType === "Truck" &&  <GiMineTruck size="36px"/>  }
                                                </Grid>
                                                <Grid xs>
                                                    <Box sx={{position: 'relative'}}>
                                                        <Grid container spacing={1} display={'flex'} alignItems={'center'}>
                                                        <Grid xs>
                                                                <Typography level="h6">{vehicle.VehicleType}</Typography>
                                                            </Grid>
                                                            <Grid xs>
                                                                <Typography level="h6">{vehicle.Airborne}</Typography>
                                                            </Grid>
                                                            <Grid>
                                                                {vehicle.Airborne === false ? 
                                                                    <Chip color="success" size="sm" variant="outlined" sx={{backgroundColor: "rgba(33, 150, 83, 0.1)", borderColor: "rgba(33, 150, 83, 0.1)"}}>No Problems</Chip>
                                                                :
                                                                    <Chip  color="danger" size="sm" variant="outlined" sx={{backgroundColor: "rgba(235, 87, 87, 0.12)", borderColor: "rgba(235, 87, 87, 0.12)"}}>Airborne</Chip>
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
                                                </Grid>
                                            </Grid>
    
                                            <Grid container spacing={2} display={'flex'} alignItems={'flex-end'}>
                                                <Grid xs>
                                                    <Grid container>
                                                            <Grid xs>
                                                                <Typography sx={{color: 'rgba(255,255,255,0.5)'}}>Path Name</Typography>
                                                            </Grid>
                                                            <Grid>
                                                                <Typography sx={{color: 'rgba(255,255,255,0.9)'}}>{vehicle.PathName}</Typography>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid container >
                                                            <Grid xs>
                                                                <Typography sx={{color: 'rgba(255,255,255,0.5)'}}>Speed</Typography>
                                                            </Grid>
                                                            <Grid>
                                                                <Typography sx={{color: 'rgba(255,255,255,0.9)'}}>{parseInt(vehicle.ForwardSpeed)} km/h</Typography>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid container >
                                                            <Grid xs>
                                                                <Typography sx={{color: 'rgba(255,255,255,0.5)'}}>Gear</Typography>
                                                            </Grid>
                                                            <Grid>
                                                                <Typography sx={{color: 'rgba(255,255,255,0.9)'}}>{parseInt(vehicle.CurrentGear)}</Typography>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid container >
                                                            <Grid xs>
                                                                <Typography sx={{color: 'rgba(255,255,255,0.5)'}}>Engine RPM</Typography>
                                                            </Grid>
                                                            <Grid>
                                                                <Typography sx={{color: 'rgba(255,255,255,0.9)'}}>{parseInt(vehicle.EngineRPM)} RPM</Typography>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid container >
                                                            <Grid xs>
                                                                <Typography sx={{color: 'rgba(255,255,255,0.5)'}}>Fuel Inventory</Typography>
                                                            </Grid>
                                                            <Grid>
                                                                <Typography sx={{color: 'rgba(255,255,255,0.9)'}}>{parseInt(vehicle.FuelInventory)}</Typography>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid container >
                                                            <Grid xs>
                                                                <Typography sx={{color: 'rgba(255,255,255,0.5)'}}>Fuel Type</Typography>
                                                            </Grid>
                                                            <Grid>
                                                                <Typography sx={{color: 'rgba(255,255,255,0.9)'}}>{(vehicle.FuelType)}</Typography>
                                                            </Grid>
                                                        </Grid>
                                                </Grid>
                                            </Grid>
                                            {/* <LinearProgress color="info" variant="determinate" value={percentDone} sx={{position: 'absolute', bottom: '0px', left: '0px', right: '0px'}} /> */}
                                            </CardContent>
                                        </Card>
                                    </Grid>
    
                                    <Grid xs={1}>
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