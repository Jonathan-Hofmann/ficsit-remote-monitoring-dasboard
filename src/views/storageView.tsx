import { Box, Card, CardContent, Chip, CircularProgress, Container, Grid, IconButton, Typography, LinearProgress, Stack, Tooltip } from "@mui/joy";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { SettingsContext } from "../context/Settings";
import { itemRefs } from "../constants/items";
import { toolRefs } from "../constants/tools";
import { factoryRefs } from "../constants/buildings";
import { Skeleton } from "@mui/material";
import { useLocalStorage } from "../hooks/localStorage";
import { defaultSettingsData } from "./settings";

export const StorageView: React.FC = (props) => {

    const [doLoadData, setLoadData] = useState(true);
    const [worldInv, setWorldInv] = useState<undefined | any>(undefined);
    const [prodStats, setProdStats] = useState<undefined | any>(undefined);
    const [items, setItems] = useState<undefined | any>(undefined);
    const [settings, _] = useLocalStorage("rmd_settings", defaultSettingsData);

    const loadData = async () => {
        if (doLoadData === true) {

            const response = await axios.get("http://"+settings.ip+":"+settings.port+"/getWorldInv");
            const response_extra = await axios.get("http://"+settings.ip+":"+settings.port+"/getProdStats");


            //console.info(response.data);
            setWorldInv(response.data);
            setProdStats(response_extra.data);

            setTimeout(() => {
                loadData();
            }, settings.interval);
        }
    };

    const prepItems = async () => {
        const temp = [];
        for (let index = 0; index < worldInv.length; index++) {
            const item = worldInv[index];
            for (let i = 0; i < prodStats.length; i++) {
                const prodStat = prodStats[i];
                if (item.Name === prodStat.ItemName) {
                    temp.push({ item: item, prodStat: prodStat })
                }
            }
        }
        setItems(temp)
    };

    useEffect(() => {
        prepItems();
    }, [worldInv, prodStats])

    useEffect(() => {
        loadData();
    }, [])


    return (


        <Container sx={{ paddingTop: '50px' }}>
            <Card variant="outlined" sx={{ paddingBottom: '0px', marginBottom: '30px' }}>
                <CardContent>
                    <Grid container display={'flex'} alignItems={'center'} marginBottom={'20px'}>
                        <Grid xs>
                            <Typography level="h2" fontWeight={600} >
                                All Items in World
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            {items ?
                <>
                    <Grid container paddingY={0} px={0} spacing={2}>
                        {items.map((data: any, index: number) => {
                            return (
                                <Grid xs={4}>
                                    <Card variant="outlined" sx={{ padding: '3px', borderColor: Math.floor(data.prodStat.CurrentConsumed) > Math.floor(data.prodStat.CurrentProd) ? "var(--joy-palette-warning-main)" : "var(--joy-palette-neutral-outlinedBorder)", borderWidth: Math.floor(data.prodStat.CurrentConsumed) > Math.floor(data.prodStat.CurrentProd) ? "3px" : "1px" }}>
                                        {/* <Card variant="outlined" sx={{height: '100%', padding:0}}> */}
                                        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px' }}>
                                            {itemRefs[data.item.Name] != undefined && <img src={"./assets/" + itemRefs[data.item.Name]?.image ?? null} alt="image" style={{ height: '70px', width: '70px' }}></img>}
                                            {toolRefs[data.item.Name] != undefined && <img src={"./assets/" + toolRefs[data.item.Name]?.image ?? null} alt="image" style={{ height: '70px', width: '70px' }}></img>}
                                            {factoryRefs[data.item.Name] != undefined && <img src={"./assets/" + factoryRefs[data.item.Name]?.image ?? null} alt="image" style={{ height: '70px', width: '70px' }}></img>}
                                            {factoryRefs[data.item.Name] === undefined && toolRefs[data.item.Name] === undefined && itemRefs[data.item.Name] === undefined && <HiOutlineQuestionMarkCircle size="70px" />}
                                            <Typography marginBottom={'5px'}>{data.item.Name}</Typography>
                                            <Typography level="body2">Total: {data.item.Count}</Typography>
                                            <Typography level="body2">{data.prodStat.ProdPerMin}</Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            )

                        })}
                    </Grid>

                </>
                :

                <Grid container paddingY={0} px={0} spacing={2}>
                    <Grid xs={4}>
                        <Card variant="outlined" sx={{ height: '100%', padding: 0 }}>
                            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px' }}>
                                <Skeleton variant="circular" height="70px" width="70px" sx={{marginBottom: '10px'}}/>
                                <Skeleton width="80px" sx={{marginBottom: '10px'}}/>
                                <Skeleton width="50px" sx={{marginBottom: '10px'}}/>
                                <Skeleton width="150px" />
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={4}>
                        <Card variant="outlined" sx={{ height: '100%', padding: 0 }}>
                            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px' }}>
                                <Skeleton variant="circular" height="70px" width="70px" sx={{marginBottom: '10px'}}/>
                                <Skeleton width="80px" sx={{marginBottom: '10px'}}/>
                                <Skeleton width="50px" sx={{marginBottom: '10px'}}/>
                                <Skeleton width="150px" />
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={4}>
                        <Card variant="outlined" sx={{ height: '100%', padding: 0 }}>
                            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px' }}>
                                <Skeleton variant="circular" height="70px" width="70px" sx={{marginBottom: '10px'}}/>
                                <Skeleton width="80px" sx={{marginBottom: '10px'}}/>
                                <Skeleton width="50px" sx={{marginBottom: '10px'}}/>
                                <Skeleton width="150px" />
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={4}>
                        <Card variant="outlined" sx={{ height: '100%', padding: 0 }}>
                            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px' }}>
                                <Skeleton variant="circular" height="70px" width="70px" sx={{marginBottom: '10px'}}/>
                                <Skeleton width="80px" sx={{marginBottom: '10px'}}/>
                                <Skeleton width="50px" sx={{marginBottom: '10px'}}/>
                                <Skeleton width="150px" />
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={4}>
                        <Card variant="outlined" sx={{ height: '100%', padding: 0 }}>
                            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px' }}>
                                <Skeleton variant="circular" height="70px" width="70px" sx={{marginBottom: '10px'}}/>
                                <Skeleton width="80px" sx={{marginBottom: '10px'}}/>
                                <Skeleton width="50px" sx={{marginBottom: '10px'}}/>
                                <Skeleton width="150px" />
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={4}>
                        <Card variant="outlined" sx={{ height: '100%', padding: 0 }}>
                            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px' }}>
                                <Skeleton variant="circular" height="70px" width="70px" sx={{marginBottom: '10px'}}/>
                                <Skeleton width="80px" sx={{marginBottom: '10px'}}/>
                                <Skeleton width="50px" sx={{marginBottom: '10px'}}/>
                                <Skeleton width="150px" />
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={4}>
                        <Card variant="outlined" sx={{ height: '100%', padding: 0 }}>
                            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px' }}>
                                <Skeleton variant="circular" height="70px" width="70px" sx={{marginBottom: '10px'}}/>
                                <Skeleton width="80px" sx={{marginBottom: '10px'}}/>
                                <Skeleton width="50px" sx={{marginBottom: '10px'}}/>
                                <Skeleton width="150px" />
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={4}>
                        <Card variant="outlined" sx={{ height: '100%', padding: 0 }}>
                            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px' }}>
                                <Skeleton variant="circular" height="70px" width="70px" sx={{marginBottom: '10px'}}/>
                                <Skeleton width="80px" sx={{marginBottom: '10px'}}/>
                                <Skeleton width="50px" sx={{marginBottom: '10px'}}/>
                                <Skeleton width="150px" />
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={4}>
                        <Card variant="outlined" sx={{ height: '100%', padding: 0 }}>
                            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px' }}>
                                <Skeleton variant="circular" height="70px" width="70px" sx={{marginBottom: '10px'}}/>
                                <Skeleton width="80px" sx={{marginBottom: '10px'}}/>
                                <Skeleton width="50px" sx={{marginBottom: '10px'}}/>
                                <Skeleton width="150px" />
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={4}>
                        <Card variant="outlined" sx={{ height: '100%', padding: 0 }}>
                            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px' }}>
                                <Skeleton variant="circular" height="70px" width="70px" sx={{marginBottom: '10px'}}/>
                                <Skeleton width="80px" sx={{marginBottom: '10px'}}/>
                                <Skeleton width="50px" sx={{marginBottom: '10px'}}/>
                                <Skeleton width="150px" />
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={4}>
                        <Card variant="outlined" sx={{ height: '100%', padding: 0 }}>
                            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px' }}>
                                <Skeleton variant="circular" height="70px" width="70px" sx={{marginBottom: '10px'}}/>
                                <Skeleton width="80px" sx={{marginBottom: '10px'}}/>
                                <Skeleton width="50px" sx={{marginBottom: '10px'}}/>
                                <Skeleton width="150px" />
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={4}>
                        <Card variant="outlined" sx={{ height: '100%', padding: 0 }}>
                            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px' }}>
                                <Skeleton variant="circular" height="70px" width="70px" sx={{marginBottom: '10px'}}/>
                                <Skeleton width="80px" sx={{marginBottom: '10px'}}/>
                                <Skeleton width="50px" sx={{marginBottom: '10px'}}/>
                                <Skeleton width="150px" />
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={4}>
                        <Card variant="outlined" sx={{ height: '100%', padding: 0 }}>
                            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px' }}>
                                <Skeleton variant="circular" height="70px" width="70px" sx={{marginBottom: '10px'}}/>
                                <Skeleton width="80px" sx={{marginBottom: '10px'}}/>
                                <Skeleton width="50px" sx={{marginBottom: '10px'}}/>
                                <Skeleton width="150px" />
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={4}>
                        <Card variant="outlined" sx={{ height: '100%', padding: 0 }}>
                            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px' }}>
                                <Skeleton variant="circular" height="70px" width="70px" sx={{marginBottom: '10px'}}/>
                                <Skeleton width="80px" sx={{marginBottom: '10px'}}/>
                                <Skeleton width="50px" sx={{marginBottom: '10px'}}/>
                                <Skeleton width="150px" />
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={4}>
                        <Card variant="outlined" sx={{ height: '100%', padding: 0 }}>
                            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px' }}>
                                <Skeleton variant="circular" height="70px" width="70px" sx={{marginBottom: '10px'}}/>
                                <Skeleton width="80px" sx={{marginBottom: '10px'}}/>
                                <Skeleton width="50px" sx={{marginBottom: '10px'}}/>
                                <Skeleton width="150px" />
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={4}>
                        <Card variant="outlined" sx={{ height: '100%', padding: 0 }}>
                            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px' }}>
                                <Skeleton variant="circular" height="70px" width="70px" sx={{marginBottom: '10px'}}/>
                                <Skeleton width="80px" sx={{marginBottom: '10px'}}/>
                                <Skeleton width="50px" sx={{marginBottom: '10px'}}/>
                                <Skeleton width="150px" />
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                

            }
        </Container>

    )
} 
