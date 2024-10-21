import { Autocomplete, CardContent, Container, Grid, Modal, ModalClose, ModalDialog } from "@mui/joy";
import { Button, Card, Typography } from "@mui/joy";
import { Skeleton } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsExclamationCircle, BsExclamationTriangleFill } from "react-icons/bs";
import { AwesomeSink } from "../components/awesomeSink";
import { fullRefs } from "../constants/refs";
import { useLocalStorage } from "../hooks/localStorage";
import { defaultSettingsData } from "./settings";

export const Start:React.FC = () => {
    const [doLoadData] = useState(true);
    const [itemSelection, setItemSelection] = useLocalStorage('srmd_ItemList', ["Concrete", "Iron Ingot", "Copper Ingot", "Coal"]);

    const [worldInv, setWorldInv] = useState<undefined | any>(undefined);
    
    const [editItemSelection, setEditItemSelection] = useState(false);

    // const [itemSelection, setItemSelection] = useState<undefined | string[]>([]);
    const [tmp_itemSelection, setTmpItemSelection] = useState<undefined | string[]>(undefined);
    const [settings] = useLocalStorage("rmd_settings", defaultSettingsData);

    
    const loadWorldInventory = async () => {
        if (doLoadData) {

            const response = await axios.get("http://"+settings.ip+":"+settings.port+"/getWorldInv");
            setWorldInv(response.data);
            // console.log(response.data);
            setTimeout(() => {
                loadWorldInventory();
            }, settings.interval);
        }
    };

    // useEffect(()=>{
    //    console.log(itemSelection)
    // }, [itemSelection])

    useEffect(()=>{
        // noinspection JSIgnoredPromiseFromCall
        loadWorldInventory();
    })
    return(
        <Container sx={{paddingTop: '50px'}}>
            
            <Typography marginBottom={'10px'} level="h1">Welcome Pioneer!</Typography>
            <Typography marginBottom={'50px'} level="h5" color="neutral" fontWeight={400}>Satisfactory Remote Monitoring Dashboard Version 1.0</Typography>
            
            <Grid spacing={3} container sx={{height: '100%', position: 'relative'}}>
                <Grid xs={6}>
                    {itemSelection ?
                    <>
                        <Modal open={editItemSelection} onClose={()=>{setEditItemSelection(false)}}>
                            <ModalDialog sx={{maxWidth: '450px'}}>
                                <ModalClose/>
                                <Typography level="h5">Edit Favorite Items List</Typography>
            
                                <Autocomplete sx={{marginY: '20px'}} onChange={(_e, v)=>{setTmpItemSelection(v)}} multiple defaultValue={tmp_itemSelection} options={Object.keys(fullRefs)}></Autocomplete>
            
                                <Button sx={{marginBottom: '15px'}} fullWidth onClick={()=>{setItemSelection(tmp_itemSelection); setEditItemSelection(false)}}>
                                    Save changes
                                </Button>
                                <Button color="neutral" variant="plain" fullWidth onClick={()=>{setEditItemSelection(false)}}>
                                    Cancel
                                </Button>
                            </ModalDialog>
                        </Modal>
                        <Card sx={{marginBottom: '20px'}} variant="outlined">
                            <CardContent>
                                <Grid container padding={0}>
                                    <Grid xs>
                                        <Typography level="h5">
                                            {itemSelection.length} Favorite Items
                                        </Typography>
                                        <Typography my={'5px'} startDecorator={<BsExclamationCircle/>} level="body2">Only shows stored and available items.</Typography>
                                        <Typography startDecorator={<BsExclamationTriangleFill/>} level="body2">Players Inventory is not taken into account.</Typography>
                                    </Grid>
                                    <Grid>
                                        <Button onClick={()=>{ setTmpItemSelection(itemSelection); setEditItemSelection(true)}} variant="outlined" color="neutral" size="sm">
                                            Edit Favorites
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
                                                            <img src={"./assets/"+fullRefs[item.Name]?.category+'/'+item.Name+'.png' ?? null} alt="" style={{height: '70px', width: '70px'}}></img>
                                                            <Typography marginBottom={'5px'} textAlign="center">{item.Name}</Typography>
                                                            <Typography level="body2">{item.Amount} Items</Typography>
                                                        </CardContent>
                                                    </Card>
                                                </Grid>
                                            )
                                        } else {
                                            return(null)
                                        }
                                    })}
                                </Grid>
                            :
                                <Grid container paddingY={0} px={0} spacing={2} sx={{opacity: 0.5}}>
                                    <Grid xs={4}>
                                        <Card variant="outlined" sx={{height: '100%', padding: 0}}>
                                            <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px'}}>
                                                <Skeleton variant="circular" sx={{}} width={'70px'} height={'70px'}></Skeleton>  

                                                <Skeleton variant="rounded" sx={{ marginTop: '20px', marginBottom: '10px'}} width={'120px'} height={'20px'}></Skeleton> 
                                                <Skeleton width={"60px"}></Skeleton>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid xs={4}>
                                        <Card variant="outlined" sx={{height: '100%', padding: 0}}>
                                            <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px'}}>
                                                <Skeleton variant="circular" sx={{}} width={'70px'} height={'70px'}></Skeleton>  

                                                <Skeleton variant="rounded" sx={{ marginTop: '20px', marginBottom: '10px'}} width={'120px'} height={'20px'}></Skeleton> 
                                                <Skeleton width={"60px"}></Skeleton>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid xs={4}>
                                        <Card variant="outlined" sx={{height: '100%', padding: 0}}>
                                            <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px'}}>
                                                <Skeleton variant="circular" sx={{}} width={'70px'} height={'70px'}></Skeleton>  

                                                <Skeleton variant="rounded" sx={{ marginTop: '20px', marginBottom: '10px'}} width={'120px'} height={'20px'}></Skeleton> 
                                                <Skeleton width={"60px"}></Skeleton>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid xs={4}>
                                        <Card variant="outlined" sx={{height: '100%', padding: 0}}>
                                            <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px'}}>
                                                <Skeleton variant="circular" sx={{}} width={'70px'} height={'70px'}></Skeleton>  

                                                <Skeleton variant="rounded" sx={{ marginTop: '20px', marginBottom: '10px'}} width={'120px'} height={'20px'}></Skeleton> 
                                                <Skeleton width={"60px"}></Skeleton>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                </Grid>
                            }
                        </>}
                    </>
                    :
                    <></>
                    }
                    
                </Grid>
                <Grid xs={6}>
                    <AwesomeSink/>
                </Grid>
            </Grid>
        </Container>
    )
}