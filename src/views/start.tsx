import { Autocomplete, CardContent, Container, FormLabel, Grid, Input, Modal, ModalClose, ModalDialog } from "@mui/joy";
import { Box, Button, FormControl, Card, TextField, Typography } from "@mui/joy";
import axios from "axios";
import { truncateSync } from "fs";
import React, { useContext, useEffect, useState } from "react";
import { BsArrowRight, BsArrowRightCircle, BsArrowRightCircleFill, BsArrowRightShort } from "react-icons/bs";
import { AwesomeSink } from "../components/awesomeSink";
import { itemRefs } from "../constants/items";
import { SettingsContext } from "../context/Settings";

export const Start:React.FC = (props) => {
    const [port, setPort] = useState(8080);
    const [doLoadData, setLoadData] = useState(true);

    const [worldInv, setWorldInv] = useState<undefined | any>(undefined);
    
    const [editItemSelection, setEditItemSelection] = useState(false);

    const [itemSelection, setItemSelection] = useState<undefined | string[]>([]);
    const [tmp_itemSelection, setTmpItemSelection] = useState<undefined | string[]>(undefined);

    const settings = useContext(SettingsContext);
    
    const loadWorldInventory = async () => {
        if (doLoadData === true) {

            const response = await axios.get("http://127.0.0.1:8080/getWorldInv");
            setWorldInv(response.data);
            console.log(response.data);
            setTimeout(() => {
                loadWorldInventory();
            }, settings.msInterval);
        }
    };

    useEffect(()=>{
        loadWorldInventory();
    }, [])
    return(
        <Container sx={{paddingTop: '50px'}}>
            <Modal open={editItemSelection} >
                <ModalDialog sx={{maxWidth: '450px'}}>
                    <ModalClose/>
                    <Typography level="h5">Edit Important Items List</Typography>

                    <Autocomplete sx={{marginY: '15px'}} onChange={(e, v)=>{setTmpItemSelection(v)}} multiple defaultValue={tmp_itemSelection} options={Object.keys(itemRefs)}></Autocomplete>

                    <Button fullWidth onClick={()=>{setItemSelection(tmp_itemSelection); setEditItemSelection(false)}}>
                        Save changes
                    </Button>
                    <Button color="neutral" variant="plain" fullWidth onClick={()=>{setEditItemSelection(false)}}>
                        Cancel
                    </Button>
                </ModalDialog>
            </Modal>
            
            <Typography marginBottom={'10px'} level="h1">Welcome Pioneer!</Typography>
            <Typography marginBottom={'50px'} level="h5" color="neutral" fontWeight={400}>Satisfactory Remote Monitoring Dashboard Version 0.1</Typography>
            
            <Grid spacing={3} container sx={{height: '100%', position: 'relative'}}>
                <Grid xs={6}>
                    <Card sx={{marginBottom: '20px'}} variant="outlined">
                        <CardContent>
                            <Grid container padding={0}>
                                <Grid xs>
                                    <Typography level="h5">
                                        Important Items
                                    </Typography>
                                </Grid>
                                <Grid>
                                    <Button onClick={()=>{ setTmpItemSelection(itemSelection); setEditItemSelection(true)}} variant="outlined" color="neutral" size="sm">
                                        Edit List
                                    </Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                    {itemSelection && <>
                        {/* <Typography>{itemSelection.length}</Typography> */}
                        {worldInv ? 
                            <Grid container paddingY={0} px={0} spacing={2}>
                                {worldInv.map((item:any)=>{
                                    if(itemSelection.includes(item.Name)){
                                        return(
                                            <Grid xs={4}>
                                                <Card variant="outlined" sx={{height: '100%', padding: 0}}>
                                                    <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px'}}>
                                                        <img src={"./assets/"+itemRefs[item.Name]?.image ?? null} alt="image" style={{height: '70px', width: '70px'}}></img>
                                                        <Typography marginBottom={'5px'} textAlign="center">{item.Name}</Typography>
                                                        <Typography level="body2">{item.Count} Items</Typography>
                                                    </CardContent>
                                                </Card>
                                            </Grid>
                                        )
                                    } else {
                                        <></>
                                    }
                                })}
                            </Grid>
                        :
                            <></>
                        }
                    </>}
                    
                </Grid>
                <Grid xs={6}>
                    <AwesomeSink/>
                </Grid>
            </Grid>
        </Container>
    )
}