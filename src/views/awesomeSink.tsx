import { Box, Card, CardContent, Chip, CircularProgress, Container, Grid, IconButton, Typography, LinearProgress, Stack, Tooltip } from "@mui/joy";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { SettingsContext } from "../context/Settings";
import { factoryRefs } from "../constants/buildings";
import { itemRefs } from "../constants/items";
import PlotFigure from "./test";
// @ts-ignore
import * as Plot from "@observablehq/plot";
// import { data } from "../constants/test-data";

export const AwesomeSink:React.FC = (props) => {
    
    const [doLoadData, setLoadData] = useState(true);
    const [sinks, setSink] = useState<undefined | any>(undefined);
    const [sinks2, setSink2] = useState<undefined | any>(undefined);

    const [data, setData] = useState(undefined)

    const settings = useContext(SettingsContext);

    const loadData = async () => {
        if (doLoadData === true) {

            const response = await axios.get("http://127.0.0.1:8080/getResourceSink");
            const response2 = await axios.get("http://127.0.0.1:8080/getExplorationSink");
            setSink(response.data);
            setSink2(response2.data);
            //console.log(response.data);

            setTimeout(() => {
                loadData();
            }, settings.msInterval);
        }
    };

    useEffect(()=>{
        if(sinks2) setData(sinks2[0].GraphPoints);
    }, [sinks2])
    
    useEffect(()=>{
        loadData();
    }, [])

    return(
        <Container sx={{paddingTop:'50px'}}>
            {sinks && sinks2 ?
                <>
                    <Grid container spacing={3} sx={{marginBottomY: '30px'}} display={'flex'} alignItems={'center'}>
                        {sinks.map((sink:any, index:number)=>{
                            return ( 
                                <Grid xs={3}>
            
                                    <Card  variant="outlined" sx={{position:'relative', paddingY: 0}}>
                                        <CardContent>                                                                                
                                            <Grid container spacing={4} sx={{paddingX: 0}} >
                                                <Grid xs>
                                                    <Box sx={{marginBottom: '10px'}}>
                                                        <Stack alignItems={"center"}>
                                                            <img src={"./assets/"+factoryRefs["Awesome Sink"].image} alt="image" style={{height: '70px', width: '70px'}}></img>
                                                            <Typography level="h6" marginY={'15px'}>{sinks2[0].Name}</Typography>
                                                            <Box sx={{display:'flex', flexDirection: 'row', alignItems: 'center'}}>
                                                                <Typography level="h6">{sinks2[0].NumCoupon}</Typography> 
                                                                <img src={"./assets/"+itemRefs["FICSIT Coupon"].image} alt="image" style={{height: '35px', width: '35px'}}></img>
                                                            </Box>
                                                            <Typography level="h6">{Math.floor(sinks2[0].Percent)}%</Typography>
                                                            <Typography level="h6">Next Coupon: {sinks2[0].PointsToCoupon}</Typography>
                                                            <Typography level="h6">Total Points: {sinks2[0].TotalPoints}</Typography>
                                                        </Stack>  

                                                    </Box>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            )
                        })}
                        <Grid xs={6}>
            
                            <Card  variant="outlined" sx={{position:'relative'}}>
                                <CardContent>                                                                                
                                    {data ? <Box sx={{'& svg':{
                                            background: 'transparent'
                                        }, color: 'white'}}>
                                            <PlotFigure options={{
                                                // width: (dimensions.width-40),
                                                // height: (dimensions.height-40),
                                                inset: 20,
                                                y: {
                                                    grid: true,
                                                },
                                                x: {
                                                    // line: true,
                                                },
                                                color: {
                                                    domain: [1, 0, -1],                         // Down - Equal - Up
                                                    range: ["#4daf4a", "#999999", "#e41a1c"],   // Red - Gray - Green
                                                },
                                                marks: [
                                                    Plot.line(data, {
                                                        x: "Index",
                                                        y: "value",
                                                        stroke: 'rgba(255,255,255,1)',
                                                        strokeWidth: 3,
                                                        curve: "catmull-rom",
                                                        marker: "circle",
                                                        title: (d:any) => `AAPL \n High: ${d.High}` // \n makes a new line
                                                    })
                                                ]
                                            }}></PlotFigure>
                                        </Box>
                                    :
                                        <CircularProgress/>
                                    }
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid> 

                    
                </>
            :
                <>
                </>
            }
        </Container>        
    )
}
