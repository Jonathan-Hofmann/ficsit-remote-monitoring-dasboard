import { Box, Card, CardContent, Chip, CircularProgress, Container, Grid, IconButton, Typography, LinearProgress, Stack, Tooltip } from "@mui/joy";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { SettingsContext } from "../context/Settings";
import { itemRefs } from "../constants/items";
import { toolRefs } from "../constants/tools";
import { factoryRefs } from "../constants/buildings";

export const StorageView:React.FC = (props) => {

    const [doLoadData, setLoadData] = useState(true);
    const [worldInv, setWorldInv] = useState<undefined | any>(undefined);

    const settings = useContext(SettingsContext);

    const loadData = async () => {
        if (doLoadData === true) {

            const response = await axios.get("http://127.0.0.1:8080/getWorldInv");
           

            //console.info(response.data);
            setWorldInv(response.data);
            
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
                        <Grid container paddingY={0} px={0} spacing={2}>
                            {worldInv.map((worldInv:any, index:number)=>{
                                return ( 
                                    <Grid xs={4}>
                                        <Card variant="outlined" sx={{height: '120px'}}>
                                            <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                                {itemRefs[worldInv.Name] != undefined &&  <img src={"./assets/"+itemRefs[worldInv.Name]?.image ?? null} alt="image" style={{height: '70px', width: '70px'}}></img>  }
                                                {toolRefs[worldInv.Name] != undefined &&  <img src={"./assets/"+toolRefs[worldInv.Name]?.image ?? null} alt="image" style={{height: '70px', width: '70px'}}></img>  }
                                                {factoryRefs[worldInv.Name] != undefined &&  <img src={"./assets/"+factoryRefs[worldInv.Name]?.image ?? null} alt="image" style={{height: '70px', width: '70px'}}></img>  }
                                                {factoryRefs[worldInv.Name] === undefined && toolRefs[worldInv.Name] === undefined && itemRefs[worldInv.Name] === undefined && <HiOutlineQuestionMarkCircle size="70px"/> }
                                                <Typography marginBottom={'5px'}>{worldInv.Name}</Typography>
                                                <Typography level="body2">{worldInv.Count}</Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                )

                            })}
                        </Grid> 
                    
               </>
            :
            <></>
                        }
    </Container>
        
)
} 
