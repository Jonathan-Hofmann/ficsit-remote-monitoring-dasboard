import { Box, Card, CardContent, Chip, CircularProgress, Container, Grid, IconButton, LinearProgress, Typography } from "@mui/joy";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { GiCargoCrate, GiDeliveryDrone } from "react-icons/gi";

export const Drones:React.FC = (props) => {
    
    const [doLoadData, setLoadData] = useState(true);
    const [drones, setDrones] = useState<undefined | any[]>(undefined);
   


    const loadData = async () => {
        if (doLoadData === true) {

            const response = await axios.get("http://127.0.0.1:8080/getDrone");
            
            const data = response.data;
            console.log(data);
            
            // const _data = JSON.parse(data);
        //     data.push({
        //         "ID":"0",
        //         "VehicleType":"Drone",
        //         "location":{
        //            "x":-101315.90625,"y":-123853.492188,"z":3984.685059,
        //            "rotation":47
        //         },
        //         "HomeStation":"BlameFeatheredToast",
        //         "CurrentDestination":"",
        //         "FlyingSpeed":1000,
        //         "CurrentFlyingMode":"DFM_Travel",
        //       "features": {
        //           "properties":
        //               {"type": "Drone"},
        //           "geometry": {
        //               "coordinates": {
        //                       "x":-101315.90625,"y":-123853.492188,"z":3984.685059            },
        //               "type": "Point"
        //           }
        //       }
        //   })


            setDrones(data);
            
            // setTimeout(() => {
            //     loadData();
            // }, 1000);
        }
    };

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
            
    
            {drones && drones.length > 0 ? 
                <>
                    {drones.map((drone:any, index:number)=>{
                        return(
                            <Grid container spacing={2} sx={{marginY: '30px'}} display={'flex'} alignItems={'center'}>
                                <Grid xs={3}>
                                    <Card sx={{position: 'relative'}}>
                                        <CardContent>
                                            <GiCargoCrate size="36px"/>
                                            {/* <Typography variant="h6" sx={{marginY: '10px'}}>{tStation_PrevNext[index][0].StationName}</Typography> */}
                                            
                                            <Typography sx={{position: 'absolute', top: '20px', right: '20px', color: 'rgba(255,255,255,0.5)'}}>Departure</Typography>

                                            <Grid container display={'flex'} alignItems={'center'} sx={{marginBottom: '10px'}}>
                                                <Grid  xs>
                                                    <Typography sx={{color: 'rgba(255,255,255,0.5)'}}>Current State</Typography> 
                                                </Grid>
                                                <Grid>
                                                
                                                </Grid>
                                            </Grid>                                           
                                            <Grid container>
                                                <Grid xs>
                                                    <Typography sx={{color: 'rgba(255,255,255,0.5)'}}>Distance</Typography> 
                                                </Grid>
                                                <Grid>
                                                    {/* {tStation_PrevNext[index][0].location.x}
                                                    {tStation_PrevNext[index][0].location.y}
                                                    {tStation_PrevNext[index][0].location.z}
                                                    {drone.location.x}
                                                    {drone.location.y}
                                                    {drone.location.z} */}

                                                    {/* {left} m */}
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>


                                <Grid xs={1}>
                                </Grid>


                                <Grid xs={4}>
                                    <Card sx={{position:'relative'}}>
                                        <CardContent>
                                        <Grid container spacing={2} sx={{marginBottom: '10px'}}>
                                            <Grid>
                                                <GiDeliveryDrone size="36px"/>
                                            </Grid>
                                            <Grid xs>
                                                <Box sx={{position: 'relative'}}>
                                                    <Grid container spacing={1} display={'flex'} alignItems={'center'}>
                                                        <Grid xs>
                                                            <Typography level="h6">{drone.VehicleType}</Typography>
                                                        </Grid>
                                                        <Grid>
                                                            {/* {drone.Derailed === false ? 
                                                                <Chip label="No Problems" color="success" size="small" variant="outlined" sx={{backgroundColor: "rgba(33, 150, 83, 0.1)", borderColor: "rgba(33, 150, 83, 0.1)"}}></Chip>
                                                            :
                                                                <Chip label="Derailed" color="error" size="small" variant="outlined" sx={{backgroundColor: "rgba(235, 87, 87, 0.12)", borderColor: "rgba(235, 87, 87, 0.12)"}}></Chip>
                                                            } */}
                                                        </Grid>

                                                        <Grid>
                                                            {drone.CurrentFlyingMode === "DFM_Travel" ? 
                                                                <Chip color="info" size="sm" variant="outlined" sx={{backgroundColor: "rgba(47, 128, 237, 0.1)", borderColor: "rgba(47, 128, 237, 0.1)"}}>Travelling</Chip>
                                                            :
                                                                <Chip color="primary" size="sm" variant="outlined" sx={{backgroundColor: "rgba(255, 255, 255, 0.1)", borderColor: "rgba(255, 255, 255, 0.1)"}}>Stopped</Chip>
                                                            }
                                                        </Grid>
                                                    </Grid>
                                                </Box>
                                            </Grid>
                                        </Grid>

                                        <Grid container spacing={2} display={'flex'} alignItems={'flex-end'}>
                                            <Grid xs>
                                                <Typography sx={{color: 'rgba(255,255,255,0.5)'}}>Next To</Typography>
                                                <Typography sx={{color: 'rgba(255,255,255,0.9)'}}>{drone.CurrentDestination}</Typography>
                                            </Grid>
                                            <Grid xs>
                                                <Grid container sx={{marginBottom: '10px'}}>
                                                    <Grid xs>
                                                        <Typography sx={{color: 'rgba(255,255,255,0.5)'}}>Speed</Typography>
                                                    </Grid>
                                                    <Grid>
                                                        <Typography sx={{color: 'rgba(255,255,255,0.9)'}}>{parseFloat(drone.FlyingSpeed) <0 ? (parseInt(drone.FlyingSpeed)*-1): parseInt(drone.FlyingSpeed)} km/h</Typography>
                                                    </Grid>
                                                </Grid>
                                                <Grid container sx={{marginBottom: '10px'}}>
                                                    <Grid xs>
                                                        {/* <Typography sx={{color: 'rgba(255,255,255,0.5)'}}>Throttle</Typography> */}
                                                    </Grid>
                                                    <Grid>
                                                        {/* <Typography sx={{color: 'rgba(255,255,255,0.9)'}}>{parseInt(drone.ThrottlePercent)} %</Typography> */}
                                                    </Grid>
                                                </Grid>
                                                <Grid container>
                                                    <Grid xs>
                                                        <Typography sx={{color: 'rgba(255,255,255,0.5)'}}>Power</Typography>
                                                    </Grid>
                                                    <Grid>
                                                        {/* <Typography sx={{color: 'rgba(255,255,255,0.9)'}}>{parseInt(drone.PowerConsumed)} MW</Typography> */}
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

                                <Grid xs={3}>
                                    <Card sx={{position: 'relative'}}>
                                        <CardContent>
                                            <GiCargoCrate size="36px"/>
                                            {/* <Typography variant="h6" sx={{marginY: '10px'}}>{tStation_PrevNext[index][1].StationName}</Typography> */}
                                            
                                            <Typography sx={{position: 'absolute', top: '20px', right: '20px', color: 'rgba(255,255,255,0.5)'}}>Destination</Typography>

                                            <Grid container display={'flex'} alignItems={'center'} sx={{marginBottom: '10px'}}>
                                                <Grid xs>
                                                    <Typography sx={{color: 'rgba(255,255,255,0.5)'}}>Status</Typography> 
                                                </Grid>
                                                <Grid>
                                                    
                                                </Grid>
                                            </Grid>                                       
                                            <Grid container>
                                                <Grid xs>
                                                    <Typography sx={{color: 'rgba(255,255,255,0.5)'}}>Distance</Typography> 
                                                </Grid>
                                                <Grid>

                                                    {/* {right} m */}
                                                </Grid>
                                            </Grid>

                                        </CardContent>
                                    </Card>
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
