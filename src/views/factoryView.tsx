import { Box, Card, CardContent, Chip, CircularProgress, Container, Divider, Grid, Stack, Typography } from "@mui/joy"
import { Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import { BsArrowRightShort, BsExclamationTriangleFill } from "react-icons/bs";
import { useSearchParams } from "react-router-dom"
import { IngredientCard } from "../components/building/ingredientCard";
import { ProductionCard } from "../components/building/productionCard";
import { factoryRefs } from "../constants/buildings";
import { itemRefs } from "../constants/items";






export const DetailedFactoryView:React.FC = (props) => {
    const [params] = useSearchParams();
    const factory = params.get("factory");
    const factoryEndpoint = params.get("endpoint");
    const [FactoryData, setFactoryData] = useState<undefined | any>(undefined);
    
    let intervalVar:any;

    const loadData = async (endpoint:string) => {
        intervalVar = setInterval( async ()=>{
            const response = await fetch("http://127.0.0.1:8080/"+endpoint);
            const data = await response.text();
            const getPower = JSON.parse(data);
            console.info(getPower);
            setFactoryData(getPower);
        }, 1000)
    };

    useEffect(()=>{
        if(factoryEndpoint)loadData(factoryEndpoint);
        return(()=>{
            clearInterval(intervalVar);
        })
    }, [factoryEndpoint])

    return(
        <Container sx={{paddingTop: '50px'}}>
            <Card variant="outlined" sx={{marginBottom: '30px'}}>
                <CardContent>
                    <Grid container display={'flex'} alignItems={'center'}>
                        <Grid xs>
                            <Typography level="h2" marginBottom={"5px"} fontWeight={600}>
                                {factory}
                            </Typography>
                        </Grid>
                        <Grid>
                            {/* <IconButton size="sm">
                                <GiCargoCrate size="22px" color="rgba(255,255,255,0.1)" />
                            </IconButton>  */}
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
                                    

            {FactoryData ? 
                <>
                    <Grid container spacing={3}>
                        {FactoryData.map((_factory:any)=>{
                            return(
                                <Grid xs={4}>
                                    <Card variant={"outlined"}>
                                        <CardContent>
                                            <Grid padding={0} container>
                                                <Grid xs>
                                                    {_factory.IsProducing === true ?
                                                        <Chip size="sm" color="success" variant="soft">Producing ...</Chip>
                                                    :
                                                        <Chip size="sm" color="danger" variant="soft" startDecorator={<BsExclamationTriangleFill style={{marginRight: '5px'}}/>}>Problems detected</Chip>
                                                    }
                                                    
                                                </Grid>
                                                <Grid>
                                                    {_factory.IsConfigured === true ?
                                                        <Chip size="sm" color="neutral" variant="soft">Configured</Chip>
                                                    :
                                                        <Chip size="sm" color="danger" variant="soft">NOT CONFIGURED</Chip>
                                                    }
                                                </Grid>
                                            </Grid>
                                            <Stack alignItems={"center"}>
                                                <img src={"/assets/"+factoryRefs[factory as string]?.image ?? null} alt="image" style={{height: '100px', width: '100px',marginTop: '10px'}}></img>
                                                {/* <Typography level="h6" sx={{marginBottom: '5px', marginTop: '10px'}}>{tStation_PrevNext[index][0].StationName}</Typography>
                                                <Typography level="body3" sx={{ marginBottom: '20px'}}>Departure Station</Typography> */}
                                                {/* <Typography level="h2" marginBottom={"5px"} fontWeight={600}>
                                                    {factoryRefs[factory as string]?.image ?? null}
                                                </Typography> */}
                                                {_factory.IsConfigured === true &&
                                                    <Box>
                                                        <Grid spacing={0} container sx={{marginTop: '10px'}}>
                                                            <Grid>
                                                                <img src={"/assets/"+itemRefs[_factory.ingredients[0].Name]?.image ?? null} alt="image" style={{height: '40px', width: '40px'}}></img>
                                                            </Grid>
                                                            <Grid>
                                                                <BsArrowRightShort size={'36px'}/>
                                                            </Grid>
                                                            <Grid>
                                                                <img src={"/assets/"+itemRefs[_factory.production[0].Name]?.image ?? null} alt="image" style={{height: '40px', width: '40px'}}></img>
                                                            </Grid>
                                                        </Grid>
                                                    </Box>
                                                }
                                            </Stack>  
                                            {_factory.IsConfigured === true &&
                                                <Box>
                                                    <Grid container spacing={0} sx={{padding:0, marginBottom: '15px'}}>
                                                        <Grid xs>
                                                            <Typography>PRODUCTION</Typography>
                                                        </Grid>
                                                        <Grid>
                                                            <Box sx={{display: 'flex', flexDirection: 'row'}}>
                                                                <img src={"/assets/Icon/Overclocking_Icon.png"} alt="image" style={{height: '22px', width: '22px'}}></img>
                                                                <Typography marginLeft={'10px'}>{_factory.ManuSpeed} %</Typography>
                                                            </Box>
                                                        </Grid>
                                                    </Grid>
                                                    {_factory.production.map((product:any)=>{
                                                        return(
                                                            <ProductionCard product={product} itemRefs={itemRefs}/>
                                                        )
                                                    })}

                                                    <Typography marginBottom={'15px'} marginTop={'30px'}>INGREDIENTS</Typography>
                                                    {_factory.ingredients.map((product:any)=>{
                                                        return(
                                                            <IngredientCard product={product} itemRefs={itemRefs}/>
                                                        )
                                                    })}

                                                </Box>
                                            }
                                        </CardContent>
                                    </Card>
                                </Grid>
                            )
                        })}
                    </Grid>
                </>
            :
            <Grid container spacing={3} sx={{opacity: 0.5}}>
                <Grid xs={4}>
                    <Card variant={"outlined"}>
                        <CardContent>
                            <Stack alignItems={"center"}>
                                
                                
                                <Skeleton variant="circular" sx={{marginTop: '10px'}} width={'100px'} height={'100px'}></Skeleton>  

                                <Skeleton variant="rounded" sx={{ marginTop: '20px', marginBottom: '10px'}} width={'120px'} height={'20px'}></Skeleton>  

                            </Stack>  
                            
                            <Box>
                                <Grid container spacing={0} sx={{padding:0, marginBottom: '15px', marginTop: '20px'}}>
                                    <Grid xs>
                                        <Typography>PRODUCTION</Typography>
                                    </Grid>
                                    <Grid>
                                        <Skeleton width={'80px'}/>
                                    </Grid>
                                </Grid>
                                <Skeleton variant={'rounded'} sx={{width: '100%'}} height={'140px'}/>
                                {/* <Skeleton variant={'rounded'} sx={{width: '100%', marginTop: '10px'}} height={'140px'}/> */}

                                <Typography marginBottom={'15px'} marginTop={'30px'}>INGREDIENTS</Typography>
                                <Skeleton variant={'rounded'} sx={{width: '100%'}} height={'140px'}/>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid xs={4}>
                    <Card variant={"outlined"}>
                        <CardContent>
                            <Stack alignItems={"center"}>
                                
                                
                                <Skeleton variant="circular" sx={{marginTop: '10px'}} width={'100px'} height={'100px'}></Skeleton>  

                                <Skeleton variant="rounded" sx={{ marginTop: '20px', marginBottom: '10px'}} width={'120px'} height={'20px'}></Skeleton>  

                            </Stack>  
                            
                            <Box>
                                <Grid container spacing={0} sx={{padding:0, marginBottom: '15px', marginTop: '20px'}}>
                                    <Grid xs>
                                        <Typography>PRODUCTION</Typography>
                                    </Grid>
                                    <Grid>
                                        <Skeleton width={'80px'}/>
                                    </Grid>
                                </Grid>
                                <Skeleton variant={'rounded'} sx={{width: '100%'}} height={'140px'}/>
                                {/* <Skeleton variant={'rounded'} sx={{width: '100%', marginTop: '10px'}} height={'140px'}/> */}

                                <Typography marginBottom={'15px'} marginTop={'30px'}>INGREDIENTS</Typography>
                                <Skeleton variant={'rounded'} sx={{width: '100%'}} height={'140px'}/>

                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid xs={4}>
                    <Card variant={"outlined"}>
                        <CardContent>
                            <Stack alignItems={"center"}>
                                
                                <Skeleton variant="circular" sx={{marginTop: '10px'}} width={'100px'} height={'100px'}></Skeleton>  

                                <Skeleton variant="rounded" sx={{ marginTop: '20px', marginBottom: '10px'}} width={'120px'} height={'20px'}></Skeleton>  

                            </Stack>  
                            
                            <Box>
                                <Grid container spacing={0} sx={{padding:0, marginBottom: '15px', marginTop: '20px'}}>
                                    <Grid xs>
                                        <Typography>PRODUCTION</Typography>
                                    </Grid>
                                    <Grid>
                                        <Skeleton width={'80px'}/>
                                    </Grid>
                                </Grid>
                                <Skeleton variant={'rounded'} sx={{width: '100%'}} height={'140px'}/>
                                {/* <Skeleton variant={'rounded'} sx={{width: '100%', marginTop: '10px'}} height={'140px'}/> */}

                                <Typography marginBottom={'15px'} marginTop={'30px'}>INGREDIENTS</Typography>
                                <Skeleton variant={'rounded'} sx={{width: '100%'}} height={'140px'}/>

                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            }
        </Container>
    )
}