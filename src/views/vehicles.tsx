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
        if (doLoadData) {

            const response = await axios.get("http://"+settings.ip+":"+settings.port+"/getVehicles");
          
            const temp = [];
            for (let index = 0; index < response.data.length; index++) {
                const value = response.data[index];
                if (!value.Fuel[0]) {
                    value.Fuel = [{Name: "N/A", Amount: 0}]
                }
                temp.push(value)
            }
            setVehicles(temp);


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
                                                        {vehicle.Name === "Explorer" &&  <img src="./assets/Vehicles/Explorer_256.png" alt="image" style={{height: '70px', width: '70px'}}></img>  }
                                                        {vehicle.Name === "Truck" &&  <img src="./assets/Vehicles/Truck_256.png" alt="image" style={{height: '70px', width: '70px'}}></img>  }
                                                        {vehicle.Name === "Tractor" &&  <img src="./assets/Vehicles/Tractor_256.png" alt="image" style={{height: '70px', width: '70px'}}></img>  }
                                                    </Grid>

                                                    <Grid xs>
                                                        <Box sx={{marginBottom: '10px'}}>
                                                            {vehicle.Autopilot === false ?
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
                            if(vehicle.Autopilot != false){
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
                                                    {vehicle.Name === "Explorer" &&  <img src="../assets/Vehicles/Explorer_256.png" alt="image" style={{height: '100px', width: '100px'}}></img>  }
                                                    {vehicle.Name === "Truck" &&  <img src="../assets/Vehicles/Truck_256.png" alt="image" style={{height: '100px', width: '100px'}}></img>  }
                                                    {vehicle.Name === "Tractor" &&  <img src="../assets/Vehicles/Tractor_256.png" alt="image" style={{height: '100px', width: '100px'}}></img>  }
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
                                                            {vehicle.Autopilot === true ?
                                                                    <Chip color="neutral" size="sm" variant="outlined" sx={{backgroundColor: "rgba(47, 128, 237, 0.1)", borderColor: "rgba(47, 128, 237, 0.1)"}}>Autopilot</Chip>
                                                                :
                                                                    <Chip color="primary" size="sm" variant="outlined" sx={{backgroundColor: "rgba(255, 255, 255, 0.1)", borderColor: "rgba(255, 255, 255, 0.1)"}}>Manual</Chip>
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
                                                                <Typography sx={{color: 'rgba(255,255,255,0.9)'}}>{parseInt(vehicle.ForwardSpeed)/30} km/h</Typography>
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
                                                                <Typography sx={{color: 'rgba(255,255,255,0.9)'}}>{Math.max(0, parseInt(vehicle.EngineRPM))} RPM</Typography>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid container>
                                                            <Grid xs>
                                                                <Typography sx={{color: 'rgba(255,255,255,0.5)'}}>Fuel Amount</Typography>
                                                            </Grid>
                                                            <Grid>
                                                                <Typography sx={{color: 'rgba(255,255,255,0.9)'}}>{parseInt(vehicle.Fuel[0].Amount)}</Typography>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid container>
                                                            <Grid xs>
                                                                <Typography sx={{color: 'rgba(255,255,255,0.5)'}}>Fuel Type</Typography>
                                                            </Grid>
                                                            <Grid>
                                                                {vehicle.Fuel[0].Name !== "N/A" &&  <img src={"./assets/Items/"+vehicle.Fuel[0].Name+".png"} alt="image" style={{height: '30px', width: '30px'}}></img>  }
                                                                {vehicle.Fuel[0].Name === "N/A" &&  <BsXCircle color="red" size={'25px'}/>  }
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
                            if(vehicle.Autopilot === false){
                                // Mode Manual -> show
                                return(<></>)
                            } else {
                                return ( 
                                    <Grid xs={4}>
                                        <div id={index.toString()}></div>
                                        <Card sx={{position:'relative', paddingBottom: 0}} variant="outlined">
                                            <CardContent>
                                                <Stack display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
                                                    {vehicle.Name === "Explorer" &&  <img src="./assets/Vehicles/Explorer_256.png" alt="image" style={{height: '100px', width: '100px'}}></img>  }
                                                    {vehicle.Name === "Truck" &&  <img src="./assets/Vehicles/Truck_256.png" alt="image" style={{height: '100px', width: '100px'}}></img>  }
                                                    {vehicle.Name === "Tractor" &&  <img src="./assets/Vehicles/Tractor_256.png" alt="image" style={{height: '100px', width: '100px'}}></img>  }
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
                                                            {vehicle.Autopilot === false ?
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
                                                                    <Typography sx={{color: 'rgba(255,255,255,0.9)'}}>{parseInt(vehicle.ForwardSpeed)/30} km/h</Typography>
                                                                    {vehicle.ForwardSpeed === 0 && Math.max(0, parseInt(vehicle.EngineRPM)) > 0 && <Tooltip title="If the vehicle is too far away from player the speed cannot be read."><IconButton sx={{marginLeft: '10px'}} size="sm" color="neutral" variant="plain"><BsQuestionCircle/></IconButton></Tooltip>}
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
                                                                <Typography sx={{color: 'rgba(255,255,255,0.9)'}}>{Math.max(0, parseInt(vehicle.EngineRPM))} RPM</Typography>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid container>
                                                            <Grid xs>
                                                                <Typography sx={{color: 'rgba(255,255,255,0.5)'}}>Fuel Inventory</Typography>
                                                            </Grid>
                                                            <Grid>
                                                                <Typography sx={{color: 'rgba(255,255,255,0.9)'}}>{parseInt(vehicle.Fuel[0].Amount)}</Typography>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid container>
                                                            <Grid xs>
                                                                <Typography sx={{color: 'rgba(255,255,255,0.5)'}}>Fuel Type</Typography>
                                                            </Grid>
                                                            <Grid>
                                                                {vehicle.Fuel[0].Name !== "N/A" &&  <img src={"./assets/Items/"+vehicle.Fuel[0].Name+".png"} alt="image" style={{height: '30px', width: '30px'}}></img>  }
                                                                {vehicle.Fuel[0].Name === "N/A" &&  <BsXCircle color="red" size={'25px'}/>  }
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