import { Card, CardHeader, Chip, CircularProgress, Container, Divider, Grid, Paper, Typography } from "@mui/material"
import { useTheme } from "@mui/system";
import { useEffect, useState } from "react";
import { BsBattery, BsBatteryHalf, BsCheck, BsCheck2, BsCloudSlash, BsExclamationTriangleFill } from "react-icons/bs";

export const PowerMain:React.FC = (props) => {
    const [doLoadData, setLoadData] = useState(true);
    const [power, setPower] = useState<undefined | any>(undefined);

    const theme = useTheme();

    let intervalVar:any;

    const loadData = async () => {
        intervalVar = setInterval( async ()=>{
            const response = await fetch("http://127.0.0.1:8080/getPower");
            const data = await response.text();
            const getPower = JSON.parse(data);
            console.info(getPower);
            setPower(getPower);
        }, 1000)
    };

    useEffect(()=>{
        loadData();

        return function cleanup() {
            console.error("CLEANUP!");
            clearInterval(intervalVar);
        };
    }, [])

    let allCapacity = 0;
    let allProduction = 0;
    let allBatteryCapacity = 0;
    let fuseBroken = false;
    if(power){
        power.forEach((element: any) => {
            allCapacity = allCapacity + element.PowerCapacity;
            allProduction = allProduction + element.PowerProduction;
            allBatteryCapacity = allBatteryCapacity + element.BatteryCapacity;
            if (fuseBroken === false && element.FuseTriggered === true) {
                fuseBroken = true;
            }
        });
    }

    return(
        <Container>
            <Typography variant="h3" sx={{marginTop: '30px', marginBottom: '30px'}}>All Power</Typography>
            <Grid container spacing={2} sx={{marginBottom: '30px'}}>
                <Grid item xs>
                    <Card>
                        <CardHeader title={allCapacity+ " MW"} subheader="Total Power Capacity"></CardHeader>
                    </Card>
                </Grid>
                <Grid item xs>
                    <Card>
                        <CardHeader title={allProduction+ " MW"} subheader="Total Power Production"></CardHeader>
                    </Card>
                </Grid>
                <Grid item xs>
                    <Card>
                        <CardHeader title={allBatteryCapacity+ " MW"} subheader="Total Battery Capacity"></CardHeader>
                    </Card>
                </Grid>
                <Grid item xs>
                    {fuseBroken === false ? 
                        <Card sx={{backgroundColor: theme.palette.success.main}}>
                            <CardHeader title="All Good" subheader="Fuse Status"></CardHeader>
                        </Card>
                    :
                        <Card sx={{backgroundColor: theme.palette.error.main}}>
                            <CardHeader title="Broken!" subheader="Fuse Status"></CardHeader>
                        </Card>
                    }
                </Grid>
            </Grid>
            <Divider sx={{marginBottom: '50px'}}/>
            <Typography variant="h4" sx={{marginTop: '30px', marginBottom: '30px'}}>All Power Circuits</Typography>
            {power ? 
                <>
                    {power.map((powerGroup:any) => {
                        return(
                            <Paper elevation={1} sx={{marginBottom: '30px', padding: '20px'}}>
                                <Grid container>
                                    <Grid item xs>
                                        <Typography variant="h5" sx={{marginBottom: '20px'}}>Power Circuit #{powerGroup.CircuitID}</Typography>
                                    </Grid>
                                    <Grid item>
                                        {powerGroup.FuseTriggered === true ? <Chip icon={<BsExclamationTriangleFill size={'17px'}/> } sx={{paddingLeft: '6px'}} color="error" label="FUSE BROKEN"></Chip> : <Chip icon={<BsCheck size={'22px'}/> } sx={{paddingLeft: '6px', color: 'white'}} color="success" label="Fuse: All Good"></Chip>}
                                    </Grid>
                                </Grid>
                                <Grid container spacing={2}>
                                    <Grid item xs>
                                        <Card variant="outlined">
                                            <CardHeader title={powerGroup.PowerCapacity+ " MW"} subheader="Power Capacity"></CardHeader>
                                        </Card>
                                    </Grid>
                                    <Grid item xs>
                                        <Card variant="outlined">
                                            <CardHeader title={powerGroup.PowerProduction+ " MW"} subheader="Power Production"></CardHeader>
                                        </Card>
                                    </Grid>
                                    <Grid item xs>
                                        <Card variant="outlined">
                                            <CardHeader title={powerGroup.PowerConsumed+ " MW"} subheader="Power Consumed"></CardHeader>
                                        </Card>
                                    </Grid>
                                    <Grid item xs>
                                        <Card variant="outlined">
                                            <CardHeader title={powerGroup.PowerMaxConsumed+ " MW"} subheader="Power max. Consumed"></CardHeader>
                                        </Card>
                                    </Grid>
                                </Grid>

                                <Grid container sx={{marginTop: "30px"}}>
                                    <Grid item xs>
                                        <Typography color="text.secondary" variant="h6" >Battery</Typography>
                                    </Grid>
                                    <Grid item>
                                        {powerGroup.BatteryCapacity === 0 && powerGroup.BatteryTimeFull === "00:00:00" ? <Chip icon={<BsCloudSlash size={'20px'}/> } sx={{paddingLeft: '6px'}} label="No Battery connected"></Chip> : <Chip icon={<BsBatteryHalf size={'20px'}/>} sx={{paddingLeft: '6px', color: 'white'}} color="success" label="Battery connected"></Chip>}
                                    </Grid>
                                </Grid>
                                { powerGroup.BatteryCapacity === 0 && powerGroup.BatteryTimeFull === "00:00:00" ? 
                                    <>
                                    </>
                                :
                                    <Grid container spacing={2} sx={{marginTop: "20px"}}>
                                        <Grid item xs>
                                            <Card variant="outlined">
                                                <CardHeader title={powerGroup.BatteryCapacity+ " MW"} subheader="Battery Capacity"></CardHeader>
                                            </Card>
                                        </Grid>
                                        <Grid item xs>
                                            <Card variant="outlined">
                                                <CardHeader title={powerGroup.BatteryPercent+ " %"} subheader="Battery Filled Percent"></CardHeader>
                                            </Card>
                                        </Grid>
                                        <Grid item xs>
                                            <Card variant="outlined">
                                                <CardHeader title={powerGroup.BatteryDifferential+ " MW"} subheader="Battery Differential"></CardHeader>
                                            </Card>
                                        </Grid>
                                        <Grid item xs>
                                            <Card variant="outlined">
                                                <CardHeader title={powerGroup.BatteryTimeFull} subheader="Battery Full At Time"></CardHeader>
                                            </Card>
                                        </Grid>
                                    </Grid>}
                            </Paper>
                        )
                    })}
                </>
            : 
                <CircularProgress/>
            }
        </Container>
    )
}