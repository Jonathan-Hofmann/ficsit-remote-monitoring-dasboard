import { Box, Card, CardContent, Chip, CircularProgress, Container, Grid, IconButton, LinearProgress, Typography } from "@mui/joy";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { GiCargoCrate, GiDeliveryDrone } from "react-icons/gi";
import { BsBatteryHalf, BsBox, BsClockHistory, BsLink45Deg } from "react-icons/bs";
import { SettingsContext } from "../context/Settings";

export const Drones:React.FC = (props) => {
    
    const [doLoadData, setLoadData] = useState(true);
    const [drones, setDrones] = useState<undefined | any[]>(undefined);
    const [droneStaions, setDronestations] = useState<undefined | any>(undefined);
   
    const [drStation_PrevNext, setDrStation_PrevNext] = useState<undefined|any[]>(undefined);

    const settings = useContext(SettingsContext);

    const loadData = async () => {
        if (doLoadData === true) {

            const response = await axios.get("http://127.0.0.1:8080/getDrone");
            const response_station = await axios.get("http://127.0.0.1:8080/getDroneStation");
            
            const data = response.data;
            const data_station = response_station.data;

            console.log(data);

            setDrones(data);
            setDronestations(data_station);
            
            setTimeout(() => {
                loadData();
            }, settings.msInterval);
        }
    };

    const handlePrepareTStationsForUI = (drones_data:{[key:string]:any}[]) => {
        const tmp:any[] = [];


        // Alle Drohnen durch-iterieren

        // Alle Drone Ports Durch-iterieren

        // If Drone-Port = Drone-HomeBase
        // -> Merken

        // If Drone-Port = Drone CurrentDestination
        // -> Merken

        // tmpArray ein Objekt mit gefundenem Drohnen-Port#1 + Drohnen-Port#2 erweitern.

        for (let i = 0; i < drones_data.length; i++) {
            const drone = drones_data[i];


            const homeBase = drone.HomeStation;
            const destination = drone.PairedStation;
            let homeIndex = 0;
            let destIndex = 0;

            for (let index = 0; index < droneStaions.length; index++) {
                const station = droneStaions[index];
                if(station.HomeStation === homeBase){
                    homeIndex = index;
                }
                if(station.CurrentDestination === destination){
                    destIndex= index;
                }
            }

            tmp.push([droneStaions[homeIndex], droneStaions[destIndex]])

            // tmp.push([timetable[foundIndex]]);
        }
        
        console.log(tmp);
        setDrStation_PrevNext(tmp);
    };

    useEffect(()=>{
        if(drones && drones.length > 0) handlePrepareTStationsForUI(drones);
        // console.log(trains);
    }, [drones]);

    useEffect(()=>{
        loadData();
    }, [])

    return(
        <Container sx={{paddingTop:'50px'}}>
            <Grid container display={'flex'} alignItems={'center'}>
                <Grid xs>
                    <Typography level="h2" fontWeight={600}>
                    Drones
                    </Typography>
                </Grid>
                <Grid>
                    <IconButton size="lg">
                        <GiCargoCrate size="22px" color="rgba(255,255,255,0.1)" />
                    </IconButton> 
                </Grid>
            </Grid>
            
    
            {drones && drStation_PrevNext && drStation_PrevNext.length>0 ? 
                <>
                    {drones.map((drone:any, index:number)=>{

                    let percentDone = 0;
                    let top = 0;
                    let bottom = 0;
                    let totalLength = 0;

                    if(drStation_PrevNext[index].length > 0){
                        top = Math.floor(Math.pow((Math.pow(((drStation_PrevNext[index][0].location.x)-(drone.location.x)), 2))+(Math.pow(((drStation_PrevNext[index][0].location.y)-(drone.location.y)), 2)), 0.5)/100);
                        bottom = Math.floor(Math.pow((Math.pow(((drStation_PrevNext[index][1].location.x)-(drone.location.x)), 2))+(Math.pow(((drStation_PrevNext[index][1].location.y)-(drone.location.y)), 2)), 0.5)/100);

                        totalLength = Math.floor(Math.pow((Math.pow(((drStation_PrevNext[index][0].location.x)-(drStation_PrevNext[index][1].location.x)), 2))+(Math.pow(((drStation_PrevNext[index][0].location.y)-(drStation_PrevNext[index][1].location.y)), 2)), 0.5)/100);

                        percentDone = top/totalLength*100;
                    }

                        return(
                            <Grid container spacing={2} sx={{marginBottom: '30px', height: '300px'}} display={'flex'} alignItems={'center'}>

                                <Grid xs={3} sx={{height: '240px'}}>
                                    {drStation_PrevNext[index][0] ? 
                                    
                                        <Card sx={{position: 'relative', marginBottom: '20px', height: '110px', paddingBottom: '0px !important'}}>
                                            <CardContent>
                                                {/* <BsLink45Deg size="28px"/> */}
                                                <img src="./assets/Buildings/IconDesc_DronePort_256.png" alt="image" style={{height: '35px', width: '35px'}}></img>
                                                <Typography level="h6" sx={{marginTop: '10px'}}>{drone.HomeStation}</Typography>
                                                
                                                <Typography level="body2" sx={{ color: 'rgba(255,255,255,0.5)'}}>Home Port</Typography>

                                                <Box sx={{position: 'absolute', top: '20px', right: '20px'}}>
                                                    {drStation_PrevNext[index][0].DroneStatus === "EDS_EN_ROUTE" &&  <Chip color="info" size="sm" variant="outlined" sx={{backgroundColor: "rgba(47, 128, 237, 0.1)", borderColor: "rgba(47, 128, 237, 0.1)"}}>En Route</Chip>  }
                                                    {drStation_PrevNext[index][0].DroneStatus === "EDS_TAKEOFF" &&  <Chip color="info" size="sm" variant="outlined" sx={{backgroundColor: "rgba(47, 128, 237, 0.1)", borderColor: "rgba(47, 128, 237, 0.1)"}}>Takeoff</Chip>  }
                                                    {drStation_PrevNext[index][0].DroneStatus === "EDS_DOCKING" &&  <Chip color="info" size="sm" variant="outlined" sx={{backgroundColor: "rgba(47, 128, 237, 0.1)", borderColor: "rgba(47, 128, 237, 0.1)"}}>Docking</Chip>  }
                                                    {drStation_PrevNext[index][0].DroneStatus === "EDS_NOT_ENOUGH_BATTERIES" &&  <Chip color="danger" size="sm" variant="outlined" sx={{backgroundColor: "rgba(47, 128, 237, 0.1)", borderColor: "rgba(47, 128, 237, 0.1)"}}>Batteries Empty</Chip>  }
                                                </Box>           
                                            </CardContent>
                                        </Card>
                                    :   
                                        <></>
                                    }

                                    {drStation_PrevNext[index][1] ? 
                                        <Card sx={{position: 'relative', height: '110px', paddingBottom: '0px !important'}}>
                                            <CardContent>
                                                {/* <BsLink45Deg size="28px"/> */}
                                                <img src="./assets/Buildings/IconDesc_DronePort_256.png" alt="image" style={{height: '35px', width: '35px'}}></img>
                                                <Typography level="h6" sx={{marginTop: '10px'}}>{drone.CurrentDestination === "" ? "N/A" : drone.CurrentDestination}</Typography>
                                                
                                                <Typography level="body2" sx={{color: 'rgba(255,255,255,0.5)'}}>Linked Port</Typography>

                                                <Box sx={{position: 'absolute', top: '20px', right: '20px'}}>
                                                    {drStation_PrevNext[index][1].DroneStatus === "EDS_EN_ROUTE" &&  <Chip color="info" size="sm" variant="outlined" sx={{backgroundColor: "rgba(47, 128, 237, 0.1)", borderColor: "rgba(47, 128, 237, 0.1)"}}>En Route</Chip>  }
                                                    {drStation_PrevNext[index][1].DroneStatus === "EDS_TAKEOFF" &&  <Chip color="info" size="sm" variant="outlined" sx={{backgroundColor: "rgba(47, 128, 237, 0.1)", borderColor: "rgba(47, 128, 237, 0.1)"}}>Takeoff</Chip>  }
                                                    {drStation_PrevNext[index][1].DroneStatus === "EDS_DOCKING" &&  <Chip color="info" size="sm" variant="outlined" sx={{backgroundColor: "rgba(47, 128, 237, 0.1)", borderColor: "rgba(47, 128, 237, 0.1)"}}>Docking</Chip>  }
                                                    {drStation_PrevNext[index][1].DroneStatus === "EDS_NOT_ENOUGH_BATTERIES" &&  <Chip color="danger" size="sm" variant="outlined" sx={{backgroundColor: "rgba(47, 128, 237, 0.1)", borderColor: "rgba(47, 128, 237, 0.1)"}}>Batteries Empty</Chip>  }
                                                </Box>      

                                            </CardContent>
                                        </Card>
                        
                                    :
                                        <></>
                                    }
                                </Grid>
    
                                <Grid xs={3} sx={{height: '240px', position: 'relative'}}>
                                    <Card sx={{position:'relative', height: '240px' }}>
                                        <CardContent>
                                        <Grid container spacing={2} sx={{marginBottom: '10px'}}>
                                            <Grid>
                                                {/* <GiDeliveryDrone size="36px"/> */}
                                                <img src="./assets/Vehicles/IconDesc_Drone_256.png" alt="image" style={{height: '70px'}}></img>
                                            </Grid>
                                            <Grid xs>
                                                <Box sx={{position: 'relative'}}>
                                                    <Grid container spacing={1} display={'flex'} alignItems={'center'}>
                                                        <Grid xs>
                                                            <Typography level="h6">{drone.VehicleType} #{drone.ID}</Typography>
                                                        </Grid>
                                                        <Grid>
                                                            {/* {drone.Derailed === false ? 
                                                                <Chip label="No Problems" color="success" size="small" variant="outlined" sx={{backgroundColor: "rgba(33, 150, 83, 0.1)", borderColor: "rgba(33, 150, 83, 0.1)"}}></Chip>
                                                            :
                                                                <Chip label="Derailed" color="error" size="small" variant="outlined" sx={{backgroundColor: "rgba(235, 87, 87, 0.12)", borderColor: "rgba(235, 87, 87, 0.12)"}}></Chip>
                                                            } */}
                                                        </Grid>

                                                        <Grid>
                                                            {drone.CurrentFlyingMode === "DFM_Flying" &&  <Chip color="info" size="sm" variant="outlined" sx={{backgroundColor: "rgba(47, 128, 237, 0.1)", borderColor: "rgba(47, 128, 237, 0.1)"}}>Flying</Chip>  }
                                                            {drone.CurrentFlyingMode === "DFM_Travel" &&  <Chip color="info" size="sm" variant="outlined" sx={{backgroundColor: "rgba(47, 128, 237, 0.1)", borderColor: "rgba(47, 128, 237, 0.1)"}}>Flying</Chip>  }
                                                            {drone.CurrentFlyingMode === "DFM_None" &&  <Chip color="info" size="sm" variant="outlined" sx={{backgroundColor: "rgba(47, 128, 237, 0.1)", borderColor: "rgba(47, 128, 237, 0.1)"}}>Pending ...</Chip>  }
                                                        </Grid>
                                                    </Grid>
                                                </Box>
                                            </Grid>
                                        </Grid>

                                        <Grid container>
                                            <Grid xs>
                                                <Typography sx={{color: 'rgba(255,255,255,0.5)'}}>Next To</Typography>
                                            </Grid>
                                            <Grid>
                                                <Typography sx={{color: 'rgba(255,255,255,0.9)'}}>{drone.CurrentDestination}</Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid container>
                                            <Grid xs>
                                                <Typography sx={{color: 'rgba(255,255,255,0.5)'}}>Speed</Typography>
                                            </Grid>
                                            <Grid>
                                                <Typography sx={{color: 'rgba(255,255,255,0.9)'}}>{parseFloat(drone.FlyingSpeed) <0 ? (parseInt(drone.FlyingSpeed)*-1): parseInt(drone.FlyingSpeed)} Knots</Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid container>
                                            <Grid xs>
                                                <Typography sx={{color: 'rgba(255,255,255,0.5)'}}>Height (Sealevel)</Typography>
                                            </Grid>
                                            <Grid>
                                                <Typography sx={{color: 'rgba(255,255,255,0.9)'}}>{parseInt(drone.location.z) / 1000} m</Typography>
                                            </Grid>
                                        </Grid>    
                                        </CardContent>
                                    </Card>
                                </Grid>
                            <Grid xs={6} sx={{height: '240px'}}>
                                <Grid container sx={{height: '110px', marginBottom: '40px'}}>
                                    <Grid xs={6} sx={{paddingTop: 0}}>
                                        <Card sx={{height: '110px', paddingBottom: '0px !important'}}>
                                            <CardContent>
                                                <BsClockHistory size="25px"/>
                                                <Typography level="h4">{drStation_PrevNext[index][0].AvgRndTrip}</Typography>
                                                <Typography>Avg. Round Trip Time</Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid xs={6} sx={{paddingTop: 0}}>
                                        <Card sx={{height: '110px', paddingBottom: '0px !important'}}>
                                            <CardContent>
                                                <BsClockHistory size="25px"/>
                                                <Typography level="h4">{drStation_PrevNext[index][0].LatestRndTrip}</Typography>
                                                <Typography>Last Round Trip Time</Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                </Grid>
                                <Grid container sx={{height: '110px'}}>
                                    <Grid xs={6} sx={{paddingTop: 0}}>
                                        <Card sx={{height: '110px', paddingBottom: '0px !important'}}>
                                            <CardContent>
                                                <BsBatteryHalf size="25px"/>
                                                <Typography level="h4">{drStation_PrevNext[index][0].EstBatteryRate}</Typography>
                                                <Typography>Estimated Battery Rate</Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid xs={6} sx={{paddingTop: 0}}>
                                        <Card sx={{height: '110px', paddingBottom: '0px !important'}}>
                                            <CardContent>
                                                <BsBox size="25px"/>
                                                <Typography level="h4">{drStation_PrevNext[index][0].EstTransRate}</Typography>
                                                <Typography>Estimated Transfer Rate</Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </Grid>
                                    
                            </Grid>
                        )
                    })}
                </>
            :
                <CircularProgress/>
            }
        </Container>
    )
}     
