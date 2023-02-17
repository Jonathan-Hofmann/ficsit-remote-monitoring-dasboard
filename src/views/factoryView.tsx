import { Box, Card, CardContent, Chip, CircularProgress, Container, Divider, Grid, Stack, Typography } from "@mui/joy"
import { useEffect, useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { useSearchParams } from "react-router-dom"
import { ProductionCard } from "../components/building/productionCard";


const factoryRefs:{[key:string]:any} = {
    'Smeltery': {
        image: 'Buildings/SmelterMk1_256.png'
    }
}

const itemRefs:{[key:string]:any} = {
    'Iron Ore': {
        image: 'Items/IconDesc_iron_new_256.png'
    },
    'Copper Ore': {
        image: 'Items/IconDesc_copper_new_256.png'
    },
    'Caterium Ore': {
        image: 'Items/IconDesc_CateriumOre_256.png'
    },
    'Aluminum Scrap': {
        image: 'Items/IconDesc_AluminiumScrap_256.png'
    },
    'Iron Ingot': {
        image: 'Items/IconDesc_IronIngot_256.png'
    },
    'Caterium Ingot': {
        image: 'Items/IconDesc_CateriumIngot_256.png'
    },
    'Aluminum Ingot': {
        image: 'Items/IconDesc_AluminiumIngot_256.png'
    },
    'Copper Ingot': {
        image: 'Items/IconDesc_CopperIngot_256.png'
    }
}

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
                                            <Stack alignItems={"center"}>
                                                <img src={"/assets/"+factoryRefs[factory as string]?.image ?? null} alt="image" style={{height: '100px', width: '100px',marginTop: '10px'}}></img>
                                                {/* <Typography level="h6" sx={{marginBottom: '5px', marginTop: '10px'}}>{tStation_PrevNext[index][0].StationName}</Typography>
                                                <Typography level="body3" sx={{ marginBottom: '20px'}}>Departure Station</Typography> */}
                                                {/* <Typography level="h2" marginBottom={"5px"} fontWeight={600}>
                                                    {factoryRefs[factory as string]?.image ?? null}
                                                </Typography> */}
                                                {_factory.IsConfigured === true ?
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
                                                :
                                                    <Chip color="danger" variant="soft" sx={{marginTop: '20px'}}>NOT CONFIGURED</Chip>
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
                                                            <Card variant="outlined" sx={{padding: '3px'}}>
                                                                <CardContent>
                                                                    <Grid spacing={2} container>
                                                                        <Grid>
                                                                            <img src={"/assets/"+itemRefs[product.Name]?.image ?? null} alt="image" style={{height: '30px', width: '30px'}}></img>
                                                                        </Grid>
                                                                        <Grid xs>
                                                                            <Grid spacing={0} container sx={{paddingTop:0}}>
                                                                                <Grid xs>
                                                                                    <Typography level="body2">Current Consume</Typography>
                                                                                </Grid>
                                                                                <Grid>
                                                                                    {product.CurrentConsumed}
                                                                                </Grid>
                                                                            </Grid>
                                                                            <Grid spacing={0} container sx={{paddingTop:0}}>
                                                                                <Grid xs>
                                                                                    <Typography level="body2">Max. Consume</Typography>
                                                                                </Grid>
                                                                                <Grid>
                                                                                    {product.MaxConsumed}
                                                                                </Grid>
                                                                            </Grid>
                                                                            <Grid spacing={0} container sx={{paddingTop:0}}>
                                                                                <Grid xs>
                                                                                    <Typography level="body2">Efficency Consume</Typography>
                                                                                </Grid>
                                                                                <Grid>
                                                                                    {Math.floor(product.ConsPercent)} %
                                                                                </Grid>
                                                                            </Grid>
                                                                            <Grid spacing={0} container sx={{paddingY:0}}>
                                                                                <Grid xs>
                                                                                    <Typography level="body2">Input Inventory</Typography>
                                                                                </Grid>
                                                                                <Grid>
                                                                                    {product.Inventory}
                                                                                </Grid>
                                                                            </Grid>
                                                                        </Grid>
                                                                    </Grid>
                                                                </CardContent>
                                                            </Card>
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
                <CircularProgress/>
            }
        </Container>
    )
}