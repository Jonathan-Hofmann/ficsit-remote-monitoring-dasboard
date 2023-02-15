import { Box, Card, CardContent, Chip, CircularProgress, Container, Grid, IconButton, Typography, LinearProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import {BsExclamationCircle, BsX, BsArrowRightShort} from 'react-icons/bs';
import { GiCargoCrate } from "react-icons/gi";
import { TbTrain } from "react-icons/tb";
import axios from 'axios';


export const Trains:React.FC = (props) => {
    
    const [doLoadData, setLoadData] = useState(true);
    const [trains, setTrains] = useState<undefined | any>(undefined);
    const [trainstaions, setTrainstations] = useState<undefined | any>(undefined);

    const [tStation_PrevNext, setTStation_PrevNext] = useState<undefined|any[]>(undefined)

    const loadData = async () => {
        if (doLoadData === true) {

            const response = await axios.get("http://127.0.0.1:8080/getTrains");
            const response_trainstaions = await axios.get("http://127.0.0.1:8080/getTrainStation");

            // // console.info(trainsData);
            setTrains(response.data);
            setTrainstations(response_trainstaions.data);
            
            setTimeout(() => {
                loadData();
            }, 1000);
        }
    };

    const handlePrepareTStationsForUI = (trains_data:{[key:string]:any}[]) => {
        const tmp:any[] = [];

        for (let i = 0; i < trains_data.length; i++) {
            const train = trains_data[i];
            const timetable:{[key:string]:any}[] = train.TimeTable;

            let foundIndex = 0;
            for (let index = 0; index < timetable.length; index++) {
                const station = timetable[index];
                if(station.StationName === train.TrainStation){
                    foundIndex = index;
                }
            }

            for (let index = 0; index < trainstaions.length; index++) {
                const station = trainstaions[index];
                if(station.StationName === timetable[foundIndex].StationName){
                    tmp.push([station]);
                }
            }

            for (let index = 0; index < trainstaions.length; index++) {
                const station = trainstaions[index];
                if(foundIndex === 0){
                    if(station.StationName === timetable[timetable.length-1].StationName){
                        tmp[tmp.length-1].unshift(station);
                    }
                } else {
                    if(station.StationName === timetable[foundIndex-1].StationName){
                        tmp[tmp.length-1].unshift(station);
                    }
                }
                
            }

            // tmp.push([timetable[foundIndex]]);
            console.log(tmp);
            setTStation_PrevNext(tmp);
            

        }
    };

    useEffect(()=>{
        if(trains && trains.length > 0) handlePrepareTStationsForUI(trains);
        // console.log(trains);
    }, [trains]);

    useEffect(()=>{
        loadData();
    }, [])

    return(
        <Container sx={{paddingTop:'50px'}}>
            <Grid container display={'flex'} alignItems={'center'}>
                <Grid item xs>
                    <Typography variant="h2" fontWeight={600}>
                    Trains
                    </Typography>
                </Grid>
                <Grid item>
                    <IconButton size="large">
                        <GiCargoCrate size="22px" color="rgba(255,255,255,0.1)" />
                    </IconButton> 
                </Grid>
            </Grid>

            {trains && tStation_PrevNext ? 
                <>
                    {trains.map((train:any, index:number)=>{

                        const left = Math.floor(Math.pow((Math.pow(((tStation_PrevNext[index][0].location.x)-(train.location.x)), 2))+(Math.pow(((tStation_PrevNext[index][0].location.y)-(train.location.y)), 2)), 0.5)/100);
                        const right = Math.floor(Math.pow((Math.pow(((tStation_PrevNext[index][1].location.x)-(train.location.x)), 2))+(Math.pow(((tStation_PrevNext[index][1].location.y)-(train.location.y)), 2)), 0.5)/100);

                        const totalLength = Math.floor(Math.pow((Math.pow(((tStation_PrevNext[index][0].location.x)-(tStation_PrevNext[index][1].location.x)), 2))+(Math.pow(((tStation_PrevNext[index][0].location.y)-(tStation_PrevNext[index][1].location.y)), 2)), 0.5)/100);

                        const percentDone = left/totalLength*100;
                        // const _percentDone = percentDone*100;
                        // console.log(index+" -> "+_percentDone);
                        return(
                            <Grid container spacing={2} sx={{marginY: '30px'}} display={'flex'} alignItems={'center'}>
                                <Grid item xs={3}>
                                    <Card sx={{position: 'relative'}}>
                                        <CardContent>
                                            <GiCargoCrate size="36px"/>
                                            <Typography variant="h6" sx={{marginY: '10px'}}>{tStation_PrevNext[index][0].StationName}</Typography>
                                            
                                            <Typography sx={{position: 'absolute', top: '20px', right: '20px', color: 'rgba(255,255,255,0.5)'}}>Departure</Typography>

                                            <Grid container display={'flex'} alignItems={'center'} sx={{marginBottom: '10px'}}>
                                                <Grid item xs>
                                                    <Typography sx={{color: 'rgba(255,255,255,0.5)'}}>Current State</Typography> 
                                                </Grid>
                                                <Grid item>
                                                    {tStation_PrevNext[index][0].LoadingStatus === "Idle" && <Chip label="Platform Idle" color="success" size="small" variant="outlined" sx={{backgroundColor: "rgba(33, 150, 83, 0.1)", borderColor: "rgba(33, 150, 83, 0.1)"}}></Chip>}
                                                    {tStation_PrevNext[index][0].LoadingStatus === "Loading" && <Chip label="Loading ..." color="error" size="small" variant="outlined" sx={{backgroundColor: "rgba(235, 87, 87, 0.12)", borderColor: "rgba(235, 87, 87, 0.12)"}}></Chip>}
                                                    {tStation_PrevNext[index][0].LoadingStatus === "Unloading" && <Chip label="Unloading ..." color="error" size="small" variant="outlined" sx={{backgroundColor: "rgba(235, 87, 87, 0.12)", borderColor: "rgba(235, 87, 87, 0.12)"}}></Chip>}
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

                                                    {left} m
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
                                                <TbTrain size="36px"/>
                                            </Grid>
                                            <Grid item xs>
                                                <Box sx={{position: 'relative'}}>
                                                    <Grid container spacing={1} display={'flex'} alignItems={'center'}>
                                                        <Grid item xs>
                                                            <Typography variant="h6">{train.TrainName}</Typography>
                                                        </Grid>
                                                        <Grid item>
                                                            {train.Derailed === false ? 
                                                                <Chip label="No Problems" color="success" size="small" variant="outlined" sx={{backgroundColor: "rgba(33, 150, 83, 0.1)", borderColor: "rgba(33, 150, 83, 0.1)"}}></Chip>
                                                            :
                                                                <Chip label="Derailed" color="error" size="small" variant="outlined" sx={{backgroundColor: "rgba(235, 87, 87, 0.12)", borderColor: "rgba(235, 87, 87, 0.12)"}}></Chip>
                                                            }
                                                        </Grid>

                                                        <Grid item>
                                                            {train.Status === "TS_SelfDriving" ? 
                                                                <Chip label="Autopilot" color="info" size="small" variant="outlined" sx={{backgroundColor: "rgba(47, 128, 237, 0.1)", borderColor: "rgba(47, 128, 237, 0.1)"}}></Chip>
                                                            :
                                                                <Chip label="Manual" color="default" size="small" variant="outlined" sx={{backgroundColor: "rgba(255, 255, 255, 0.1)", borderColor: "rgba(255, 255, 255, 0.1)"}}></Chip>
                                                            }
                                                        </Grid>
                                                    </Grid>
                                                </Box>
                                            </Grid>
                                        </Grid>

                                        <Grid container spacing={2} display={'flex'} alignItems={'flex-end'}>
                                            <Grid item xs>
                                                <Typography sx={{color: 'rgba(255,255,255,0.5)'}}>Next To</Typography>
                                                <Typography sx={{color: 'rgba(255,255,255,0.9)'}}>{train.TrainStation}</Typography>
                                            </Grid>
                                            <Grid item xs>
                                                <Grid container sx={{marginBottom: '10px'}}>
                                                    <Grid item xs>
                                                        <Typography sx={{color: 'rgba(255,255,255,0.5)'}}>Speed</Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Typography sx={{color: 'rgba(255,255,255,0.9)'}}>{parseFloat(train.ForwardSpeed) <0 ? (parseInt(train.ForwardSpeed)*-1): parseInt(train.ForwardSpeed)} km/h</Typography>
                                                    </Grid>
                                                </Grid>
                                                <Grid container sx={{marginBottom: '10px'}}>
                                                    <Grid item xs>
                                                        <Typography sx={{color: 'rgba(255,255,255,0.5)'}}>Throttle</Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Typography sx={{color: 'rgba(255,255,255,0.9)'}}>{parseInt(train.ThrottlePercent)} %</Typography>
                                                    </Grid>
                                                </Grid>
                                                <Grid container>
                                                    <Grid item xs>
                                                        <Typography sx={{color: 'rgba(255,255,255,0.5)'}}>Power</Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Typography sx={{color: 'rgba(255,255,255,0.9)'}}>{parseInt(train.PowerConsumed)} MW</Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <LinearProgress color="info" variant="determinate" value={percentDone} sx={{position: 'absolute', bottom: '0px', left: '0px', right: '0px'}} />
                                        </CardContent>
                                    </Card>
                                </Grid>

                                <Grid item xs={1}>
                                </Grid>

                                <Grid item xs={3}>
                                    <Card sx={{position: 'relative'}}>
                                        <CardContent>
                                            <GiCargoCrate size="36px"/>
                                            <Typography variant="h6" sx={{marginY: '10px'}}>{tStation_PrevNext[index][1].StationName}</Typography>
                                            
                                            <Typography sx={{position: 'absolute', top: '20px', right: '20px', color: 'rgba(255,255,255,0.5)'}}>Destination</Typography>

                                            <Grid container display={'flex'} alignItems={'center'} sx={{marginBottom: '10px'}}>
                                                <Grid item xs>
                                                    <Typography sx={{color: 'rgba(255,255,255,0.5)'}}>Status</Typography> 
                                                </Grid>
                                                <Grid item>
                                                    {tStation_PrevNext[index][1].LoadingStatus === "Idle" && <Chip label="Platform Idle" color="success" size="small" variant="outlined" sx={{backgroundColor: "rgba(33, 150, 83, 0.1)", borderColor: "rgba(33, 150, 83, 0.1)"}}></Chip>}
                                                    {tStation_PrevNext[index][1].LoadingStatus === "Loading" && <Chip label="Loading ..." color="error" size="small" variant="outlined" sx={{backgroundColor: "rgba(235, 87, 87, 0.12)", borderColor: "rgba(235, 87, 87, 0.12)"}}></Chip>}
                                                    {tStation_PrevNext[index][1].LoadingStatus === "Unloading" && <Chip label="Unloading ..." color="error" size="small" variant="outlined" sx={{backgroundColor: "rgba(235, 87, 87, 0.12)", borderColor: "rgba(235, 87, 87, 0.12)"}}></Chip>}
                                                </Grid>
                                            </Grid>                                       
                                            <Grid container>
                                                <Grid item xs>
                                                    <Typography sx={{color: 'rgba(255,255,255,0.5)'}}>Distance</Typography> 
                                                </Grid>
                                                <Grid item>

                                                    {right} m
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