import { Box, Card, CardContent, Chip, CircularProgress, Container, Grid, IconButton, Typography, LinearProgress, Stack, Tooltip } from "@mui/joy";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { SettingsContext } from "../context/Settings";

export const StorageView:React.FC = (props) => {

    const [doLoadData, setLoadData] = useState(true);
    const [worldInv, setWorldInv] = useState<undefined | any>(undefined);

    const settings = useContext(SettingsContext);

    const loadData = async () => {
        if (doLoadData === true) {

            const response = await axios.get("http://127.0.0.1:8080/getWorldInv");
           

            console.info(response.data);
            // setWorldInv(response.data);
            
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
        {worldInv ? 
                <>
                    <Card>
                        <Grid container spacing={3} sx={{marginBottomY: '30px'}} display={'flex'} alignItems={'center'}>
                            {worldInv.map((worldInv:any, index:number)=>{
                                return ( 
                                    <Grid xs={3}>
                                        <a href={"#"+index} style={{textDecoration: 'none'}}>
                                            <Card  variant="outlined" sx={{position:'relative', paddingY: 0, '&:hover': {
                                                borderColor: 'var(--joy-palette-neutral-700)'
                                            }, cursor: 'pointer'}}>
                                                <CardContent>                                                                                
                                                    <Grid container spacing={4} sx={{paddingX: 0}} >
                                                        <Grid xs>
                                                            <Box sx={{marginBottom: '10px'}}>
                                                            <Typography level="h6" sx={{marginBottom: '5px', marginTop: '10px'}}>{worldInv.Name}</Typography>
                                                            </Box>  
                                                            <Typography sx={{color: 'rgba(255,255,255,0.9)'}}>Count: {parseInt(worldInv.Count)}</Typography>
                                                            
                                                        </Grid>
                                                    </Grid>
                                                </CardContent>
                                            </Card>
                                        </a>
                                    </Grid>
                                )

                            })}
                        </Grid> 
                    </Card>
               </>
            :
            <></>
                        }
        </Container>
        
    )
} 
