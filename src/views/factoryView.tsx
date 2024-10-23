import { Box, Card, CardContent, Chip, Container, Grid, Stack, Typography } from "@mui/joy"
import { Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import { BsArrowRightShort, BsExclamationTriangleFill } from "react-icons/bs";
import { useSearchParams } from "react-router-dom"
import { IngredientCard } from "../components/building/ingredientCard";
import { ProductionCard } from "../components/building/productionCard";
import { fullRefs } from "../constants/refs";
import { useLocalStorage } from "../hooks/localStorage";
import { defaultSettingsData } from "./settings";
import axios from 'axios';

export const DetailedFactoryView:React.FC = () => {
    const [params] = useSearchParams();
    const factory = params.get("factory");
    const factoryEndpoint = params.get("endpoint");
    const [FactoryData, setFactoryData] = useState<undefined | any>(undefined);
    const [settings] = useLocalStorage("rmd_settings", defaultSettingsData);
    let intervalVar:any;

    const loadData = async (endpoint:string) => {
        intervalVar = setInterval( async ()=>{
            const response = await axios.get("http://"+settings.ip+":"+settings.port+"/"+endpoint);
            if (response.data[0]) {
                setFactoryData(response.data);
            } else {
                setFactoryData([]);
            }
        }, settings.interval)
    };

    useEffect(()=>{
        if(factoryEndpoint)loadData(factoryEndpoint);
        return(()=>{
            clearInterval(intervalVar);
        })
    })

    function getImage(item : any): any {
            let value = null
            if(fullRefs[item] != null){
                value = "/assets/"+fullRefs[item].category+"/"+item+".png"
            }
            return value
    }

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
                    </Grid>
                </CardContent>
            </Card>
                                    

            {FactoryData ?
                <>
                    <Grid container spacing={3}>
                        {FactoryData.map((_factory:any, index:any)=>{
                            return(
                                <Grid xs={4} key={index}>
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
                                                        <Chip size="sm" color="danger" variant="soft">Not Configured</Chip>
                                                    }
                                                </Grid>
                                            </Grid>
                                            <Stack alignItems={"center"}>
                                                <img src={getImage(_factory.Name)} alt='' style={{height: '100px', width: '100px',marginTop: '10px'}}></img>
                                                <Typography sx={{marginTop:'5px'}}>{_factory.Recipe}</Typography>
                                                {_factory.IsConfigured === true &&
                                                    <Box>
                                                        <Grid spacing={0} container sx={{marginTop: '5px'}}>
                                                            <Grid>
                                                                {_factory.ingredients.map((ingredient:any, index:any) =>
                                                                    <img key={index} src={getImage(ingredient.Name) ?? null} alt={ingredient.Name} style={{height: '40px', width: '40px'}} ></img>
                                                                )}
                                                            </Grid>
                                                            <Grid>
                                                                <BsArrowRightShort size={'36px'}/>
                                                            </Grid>
                                                            <Grid>
                                                                {_factory.production.map((product:any, index:any) =>
                                                                    <img key={index} src={getImage(product.Name) ?? null} alt={product.Name} style={{height: '40px', width: '40px'}}></img>
                                                                )}
                                                            </Grid>
                                                        </Grid>
                                                    </Box>
                                                }
                                            </Stack>  
                                            {_factory.IsConfigured &&
                                                <Box>
                                                    <Grid container spacing={0} sx={{padding:0, marginBottom: '15px'}}>
                                                        <Grid xs>
                                                            <Typography>Ingredients</Typography>
                                                        </Grid>
                                                        <Grid>
                                                            <Box sx={{display: 'flex', flexDirection: 'row'}}>
                                                                <img src={"/assets/Icon/Overclocking_Icon.png"} alt='' style={{height: '22px', width: '22px'}}></img>
                                                                <Typography marginLeft={'10px'}>{(_factory.ManuSpeed).toFixed(2)} %</Typography>
                                                            </Box>
                                                        </Grid>
                                                    </Grid>
                                                    {_factory.ingredients.map((product: any, index: any) => {
                                                        return (
                                                            <IngredientCard key={index} product={product} fullRefs={fullRefs}/>
                                                        )
                                                    })}

                                                    <Typography marginBottom={'15px'} marginTop={'30px'}>Products</Typography>
                                                    {_factory.production.map((product:any, index:any)=>{
                                                        return(
                                                            <ProductionCard key={index} product={product} fullRefs={fullRefs}/>
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