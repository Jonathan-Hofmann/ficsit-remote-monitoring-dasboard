import { Box, Card, CardContent, Chip, CircularProgress, Container, Grid, IconButton, Typography, LinearProgress, Stack, Tooltip } from "@mui/joy";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { SettingsContext } from "../context/Settings";
import { factoryRefs } from "../constants/buildings";
import { itemRefs } from "../constants/items";

export const AwesomeSink:React.FC = (props) => {
    
    const [doLoadData, setLoadData] = useState(true);
    const [sinks, setSink] = useState<undefined | any>(undefined);

    const settings = useContext(SettingsContext);

    const loadData = async () => {
        if (doLoadData === true) {

            const response = await axios.get("http://127.0.0.1:8080/getResourceSink");
            setSink(response.data);
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
            {sinks ? 
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
                                                            <Typography level="h6" marginY={'15px'}>{sink.Name}</Typography>
                                                            <Box sx={{display:'flex', flexDirection: 'row', alignItems: 'center'}}>
                                                                <Typography level="h6">{sink.NumCoupon}</Typography> 
                                                                <img src={"./assets/"+itemRefs["FICSIT Coupon"].image} alt="image" style={{height: '35px', width: '35px'}}></img>
                                                            </Box>
                                                            <Typography level="h6">{sink.NumCoupon}</Typography>
                                                        </Stack>  

                                                    </Box>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            )
                        })}
                    </Grid> 
                </>
            :
                <>
                </>
            }
        </Container>        
    )
}
