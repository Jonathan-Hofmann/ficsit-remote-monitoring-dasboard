import { Card, Chip, Container, Divider, Grid, Typography, CardContent, Box } from "@mui/joy"
import { Skeleton } from "@mui/material";
import { useTheme } from "@mui/system";
import { useEffect, useState } from "react";
import { BsBatteryHalf, BsCheck, BsCloudSlash, BsExclamationCircle, BsExclamationTriangleFill } from "react-icons/bs";
import { useLocalStorage } from "../hooks/localStorage";
import { defaultSettingsData } from "./settings";
import { BuildingButton } from "../components/buildingButton";

export const PowerMain:React.FC = () => {
    const [power, setPower] = useState<undefined | any>(undefined);
    const [settings] = useLocalStorage("rmd_settings", defaultSettingsData);
    const generators = ['Biomass Burner', 'Coal-Powered Generator', 'Fuel-Powered Generator', 'Geothermal Generator', 'Nuclear Power Plant']

    const theme = useTheme();

    let intervalVar:any;

    const loadData = async () => {
        intervalVar = setInterval( async ()=>{
            const response = await fetch("http://"+settings.ip+":"+settings.port+"/getPower");
            const data = await response.text();
            const getPower = JSON.parse(data);
            // console.info(getPower);
            setPower(getPower);
        }, settings.interval)
    };

    useEffect(()=>{
        loadData();

        return function cleanup() {
            clearInterval(intervalVar);
        };
    })

    let allCapacity = 0;
    let allProduction = 0;
    let allBatteryCapacity = 0;
    let fuseBroken = false;
    if(power){
        power.forEach((element: any) => {
            allCapacity = allCapacity + element.PowerCapacity;
            allProduction = allProduction + element.PowerProduction;
            allBatteryCapacity = allBatteryCapacity + element.BatteryCapacity;
            if (!fuseBroken && element.FuseTriggered) {
                fuseBroken = true;
            }
        });
    }

    return(
        <Container sx={{paddingTop: '50px'}}>

            <Card variant="outlined" sx={{marginBottom: '30px'}}>
                <CardContent>
                    <Grid container display={'flex'} alignItems={'center'}>
                        <Grid xs>
                            <Typography level="h2" marginBottom={"5px"} fontWeight={600}>
                                All Power
                            </Typography>
                        </Grid>
                        <Grid>
                            {/* <IconButton size="lg">
                                <GiCargoCrate size="22px" color="rgba(255,255,255,0.1)" />
                            </IconButton>  */}
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            <Card variant="outlined" sx={{marginBottom: '30px'}}>
                <CardContent>
                    <Card variant="outlined" sx={{marginBottom: '30px'}}>
                        <CardContent>
                            <Grid container display={'flex'} alignItems={'center'}>
                                <Grid xs>
                                    <Typography level="h3" marginBottom={"5px"} fontWeight={600}>
                                        Power Generators
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                    <Grid container spacing={2}>
                        {generators.map((generator:any, index:any) => {
                            return(
                                <BuildingButton page="generator" factory={generator} key={index}/>
                            )
                        })}
                    </Grid>
                </CardContent>
            </Card>
            <Grid container spacing={2} sx={{marginBottom: '30px'}}>
                <Grid xs>
                    <Card>
                        {/* <CardHeader title={allCapacity+ " MW"} subheader="Total Power Capacity"></CardHeader> */}
                        <Typography level="h3">
                            {!power ? <Skeleton sx={{marginBottom: '8px'}} variant="rounded" height={'30px'} width={'80px'} /> : <>{new Intl.NumberFormat('en-GB', {style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(allCapacity)} MW</>}
                        </Typography>
                        <Typography>
                            Total Power Capacity
                        </Typography>
                    </Card>
                </Grid>
                <Grid xs>
                    <Card>
                        {/* <CardHeader title={allProduction+ " MW"} subheader="Total Power Production"></CardHeader> */}
                        <Typography level="h3">
                            {!power ? <Skeleton sx={{marginBottom: '8px'}} variant="rounded" height={'30px'} width={'80px'} /> : <>{new Intl.NumberFormat('en-GB', {style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(allProduction)} MW</>}
                        </Typography>
                        <Typography>
                            Total Production
                        </Typography>
                    </Card>
                </Grid>
                <Grid xs>
                    <Card>
                        {/* <CardHeader title={allBatteryCapacity+ " MW"} subheader="Total Battery Capacity"></CardHeader> */}
                        <Typography level="h3">
                            {/* {!power ? <Skeleton sx={{marginBottom: '8px'}} variant="rounded" height={'30px'} width={'80px'} /> : <>{allBatteryCapacity.toFixed(2)} MW</>} */}
                            {!power ? <Skeleton sx={{marginBottom: '8px'}} variant="rounded" height={'30px'} width={'80px'} /> : <>{new Intl.NumberFormat('en-US', {style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(allBatteryCapacity)} MWh</>}

                        </Typography>
                        <Typography>
                            Battery Capacity
                        </Typography>
                    </Card>
                </Grid>
                <Grid xs>
                    { !power ? 
                        <Skeleton sx={{marginBottom: '8px', width: '100%', borderRadius: '10px'}} variant="rounded" height={'93px'} />
                    :
                        <>
                            {!fuseBroken ?
                                <Card sx={{backgroundColor: theme.palette.success.main}}>
                                    {/* <CardHeader title="All Good" subheader="Fuse Status"></CardHeader> */}
                                    <Typography level="h3">
                                        No Problems
                                    </Typography>
                                    <Typography>
                                        Current Status
                                    </Typography>
                                </Card>
                            :
                                <Card sx={{backgroundColor: theme.palette.error.main}}>
                                    {/* <CardHeader title="Broken!" subheader="Fuse Status"></CardHeader> */}
                                    <Typography level="h3">
                                        Broken!
                                    </Typography>
                                    <Typography>
                                        Current Status
                                    </Typography>
                                </Card>
                            }
                        </>
                    }
                </Grid>
            </Grid>
            <Divider sx={{marginBottom: '50px'}}/>
            <Typography level="h4" sx={{marginTop: '30px', marginBottom: '30px'}}>All Power Circuits</Typography>
            {power ? 
                <>
                    {power.map((powerGroup:any, index:number) => {
                        return(
                            <Card variant="outlined" sx={{marginBottom: '30px', padding: '20px', backgroundColor: powerGroup.FuseTriggered === true ? 'var(--joy-palette-danger-solidBg)' : 'var(--joy-palette-background-surface)'}}>
                                <CardContent>
                                <Grid container sx={{marginBottom: '20px'}}>
                                    <Grid xs>
                                        <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                            {powerGroup.FuseTriggered === true ? <BsExclamationCircle size={'20px'} style={{marginRight: '10px'}}/> : <></>}
                                            <Typography level="h5" >Power Circuit #{index+1}</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid>
                                        {powerGroup.FuseTriggered === true ? <Chip variant="soft" startDecorator={<BsExclamationTriangleFill size={'17px'}/> } sx={{paddingLeft: '6px'}} color="danger" >FUSE BROKEN</Chip> : <Chip variant="soft" startDecorator={<BsCheck size={'22px'}/> } sx={{paddingLeft: '6px'}} color="success">Fuse: All Good</Chip>}
                                    </Grid>
                                </Grid>
                                <Grid container spacing={2}>
                                    <Grid xs>
                                        <Card variant="outlined">
                                            {/* <CardHeader title={powerGroup.PowerCapacity+ " MW"} subheader="Power Capacity"></CardHeader> */}
                                            <Typography level="h6">
                                                {new Intl.NumberFormat('en-US', {style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(powerGroup.PowerCapacity)} MW
                                            </Typography>
                                            <Typography level="body2">
                                                Power Capacity
                                            </Typography>
                                        </Card>
                                    </Grid>
                                    <Grid xs>
                                        <Card variant="outlined" sx={{backgroundColor: powerGroup.PowerProduction === 0 ? 'var(--joy-palette-danger-solidBg)' : 'var(--joy-palette-background-surface)'}}>
                                            {/* <CardHeader title={powerGroup.PowerProduction+ " MW"} subheader="Power Production"></CardHeader> */}
                                            <Typography level="h6">
                                                {new Intl.NumberFormat('en-US', {style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(powerGroup.PowerProduction)} MW
                                            </Typography>
                                            <Typography level="body2">
                                                Power Production
                                            </Typography>
                                        </Card>
                                    </Grid>
                                    <Grid xs>
                                        <Card variant="outlined">
                                            {/* <CardHeader title={powerGroup.PowerConsumed+ " MW"} subheader="Power Consumed"></CardHeader> */}
                                            <Typography level="h6">
                                                {new Intl.NumberFormat('en-US', {style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(powerGroup.PowerConsumed)} MW
                                            </Typography>
                                            <Typography level="body2">
                                                Current consumption
                                            </Typography>
                                        </Card>
                                    </Grid>
                                    <Grid xs>
                                        <Card variant="outlined">
                                            {/* <CardHeader title={powerGroup.PowerMaxConsumed+ " MW"} subheader="Power max. Consumed"></CardHeader> */}
                                            <Typography level="h6">
                                                {new Intl.NumberFormat('en-US', {style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(powerGroup.PowerMaxConsumed)} MW
                                            </Typography>
                                            <Typography level="body2">
                                                Max. Consumed
                                            </Typography>
                                        </Card>
                                    </Grid>
                                </Grid>

                                <Grid container sx={{marginTop: "30px"}}>
                                    <Grid xs>
                                        <Typography level="h6" >Battery</Typography>
                                    </Grid>
                                    <Grid>
                                        {powerGroup.BatteryCapacity === 0 && powerGroup.BatteryTimeFull === "00:00:00" ? <Chip startDecorator={<BsCloudSlash size={'20px'}/> } sx={{paddingLeft: '6px'}} variant="soft" >No Battery connected</Chip> : <Chip startDecorator={<BsBatteryHalf size={'20px'}/>} sx={{paddingLeft: '6px', color: 'white'}} variant="soft" color="success">Battery connected</Chip>}
                                    </Grid>
                                </Grid>
                                { powerGroup.BatteryCapacity === 0 && powerGroup.BatteryTimeFull === "00:00:00" ? 
                                    <>
                                    </>
                                :
                                    <Grid container spacing={2} sx={{marginTop: "20px"}}>
                                        <Grid xs>
                                            <Card variant="outlined">
                                                {/* <CardHeader title={powerGroup.BatteryCapacity+ " MW"} subheader="Battery Capacity"></CardHeader> */}
                                                <Typography>
                                                    {powerGroup.BatteryCapacity} MWh
                                                </Typography>
                                                <Typography level="body2">
                                                    Battery Capacity
                                                </Typography>
                                            </Card>
                                        </Grid>
                                        <Grid xs>
                                            <Card variant="outlined">
                                                {/* <CardHeader title={powerGroup.BatteryPercent+ " %"} subheader="Battery Filled Percent"></CardHeader> */}
                                                <Typography>
                                                    {Math.round(powerGroup.BatteryPercent * 100) / 100} %
                                                </Typography>
                                                <Typography level="body2">
                                                    Battery Filled Percent
                                                </Typography>
                                            </Card>
                                        </Grid>
                                        <Grid xs>
                                            <Card variant="outlined">
                                                {/* <CardHeader title={powerGroup.BatteryDifferential+ " MW"} subheader="Battery Differential"></CardHeader> */}
                                                <Typography>
                                                    {Math.round(powerGroup.BatteryDifferential * 100) / 100} MW
                                                </Typography>
                                                <Typography level="body2">
                                                    Battery Differential
                                                </Typography>
                                            </Card>
                                        </Grid>
                                        <Grid xs>
                                            <Card variant="outlined">
                                                {/* <CardHeader title={powerGroup.BatteryTimeFull} subheader="Battery Full At Time"></CardHeader> */}
                                                <Typography>
                                                    {powerGroup.BatteryTimeEmpty !== "00:00:00" ? powerGroup.BatteryTimeEmpty : powerGroup.BatteryTimeFull}
                                                </Typography>
                                                <Typography level="body2">
                                                    {powerGroup.BatteryTimeEmpty !== "00:00:00" ? "Battery Empty At Time" : "Battery Full At Time"}
                                                </Typography>
                                            </Card>
                                        </Grid>
                                    </Grid>}
                                </CardContent>
                            </Card>
                        )
                    })}
                </>
            : 
                <>
                    <Card sx={{marginBottom: '30px', padding: '20px', opacity: 0.5}}>
                        <CardContent>
                            <Grid container sx={{marginBottom: '20px'}}>
                                <Grid xs>
                                    <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                        <Skeleton width={'80px'} />
                                    </Box>
                                </Grid>
                                <Grid>
                                    <Skeleton width={'120px'} />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid xs>
                                    <Card variant="outlined">
                                        <Typography level="h6">
                                            <Skeleton width={'110px'} />
                                        </Typography>
                                        <Typography marginTop={'10px'} level="body2">
                                            Power Capacity
                                        </Typography>
                                    </Card>
                                </Grid>
                                <Grid xs>
                                    <Card variant="outlined">
                                        <Typography level="h6">
                                            <Skeleton width={'80px'} />
                                        </Typography>
                                        <Typography marginTop={'10px'} level="body2">
                                            Power Production
                                        </Typography>
                                    </Card>
                                </Grid>
                                <Grid xs>
                                    <Card variant="outlined">
                                        <Typography level="h6">
                                            <Skeleton width={'90px'} />
                                        </Typography>
                                        <Typography marginTop={'10px'} level="body2">
                                            Current consumption
                                        </Typography>
                                    </Card>
                                </Grid>
                                <Grid xs>
                                    <Card variant="outlined">
                                        <Typography level="h6">
                                            <Skeleton width={'80px'} />
                                        </Typography>
                                        <Typography marginTop={'10px'} level="body2">
                                            Max. Consumed
                                        </Typography>
                                    </Card>
                                </Grid>
                            </Grid>

                            <Grid container sx={{marginTop: "30px"}}>
                                <Grid xs>
                                    <Typography level="h6" >Battery</Typography>
                                </Grid>
                                <Grid>
                                    <Skeleton width={'80px'} />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </>
            }
        </Container>
    )
}