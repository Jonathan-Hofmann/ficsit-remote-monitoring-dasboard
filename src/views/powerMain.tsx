import { Card, Chip, CircularProgress, Container, Divider, Grid, Typography, CardContent } from "@mui/joy"
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
            <Typography level="h3" sx={{marginTop: '30px', marginBottom: '30px'}}>All Power</Typography>
            <Grid container spacing={2} sx={{marginBottom: '30px'}}>
                <Grid xs>
                    <Card>
                        {/* <CardHeader title={allCapacity+ " MW"} subheader="Total Power Capacity"></CardHeader> */}
                        <Typography>
                            {allCapacity} MW
                        </Typography>
                    </Card>
                </Grid>
                <Grid xs>
                    <Card>
                        {/* <CardHeader title={allProduction+ " MW"} subheader="Total Power Production"></CardHeader> */}
                        <Typography>
                            {allProduction} MW
                        </Typography>
                    </Card>
                </Grid>
                <Grid xs>
                    <Card>
                        {/* <CardHeader title={allBatteryCapacity+ " MW"} subheader="Total Battery Capacity"></CardHeader> */}
                        <Typography>
                            {allBatteryCapacity} MW
                        </Typography>
                    </Card>
                </Grid>
                <Grid xs>
                    {fuseBroken === false ? 
                        <Card sx={{backgroundColor: theme.palette.success.main}}>
                            {/* <CardHeader title="All Good" subheader="Fuse Status"></CardHeader> */}
                            <Typography level="h1">
                                All Good
                            </Typography>
                        </Card>
                    :
                        <Card sx={{backgroundColor: theme.palette.error.main}}>
                            {/* <CardHeader title="Broken!" subheader="Fuse Status"></CardHeader> */}
                            <Typography>
                                Broken!
                            </Typography>
                        </Card>
                    }
                </Grid>
            </Grid>
            <Divider sx={{marginBottom: '50px'}}/>
            <Typography level="h4" sx={{marginTop: '30px', marginBottom: '30px'}}>All Power Circuits</Typography>
            {power ? 
                <>
                    {power.map((powerGroup:any, index:number) => {
                        return(
                            <Card sx={{marginBottom: '30px', padding: '20px'}}>
                                <CardContent>
                                <Grid container>
                                    <Grid xs>
                                        <Typography level="h5" sx={{marginBottom: '20px'}}>Power Circuit #{index+1}</Typography>
                                    </Grid>
                                    <Grid>
                                        {powerGroup.FuseTriggered === true ? <Chip startDecorator={<BsExclamationTriangleFill size={'17px'}/> } sx={{paddingLeft: '6px'}} color="danger" >FUSE BROKEN</Chip> : <Chip startDecorator={<BsCheck size={'22px'}/> } sx={{paddingLeft: '6px', color: 'white'}} color="success">Fuse: All Good</Chip>}
                                    </Grid>
                                </Grid>
                                <Grid container spacing={2}>
                                    <Grid xs>
                                        <Card variant="outlined">
                                            {/* <CardHeader title={powerGroup.PowerCapacity+ " MW"} subheader="Power Capacity"></CardHeader> */}
                                                <Typography>
                                                    {powerGroup.PowerCapacity} MW
                                                </Typography>
                                        </Card>
                                    </Grid>
                                    <Grid xs>
                                        <Card variant="outlined">
                                            {/* <CardHeader title={powerGroup.PowerProduction+ " MW"} subheader="Power Production"></CardHeader> */}
                                                <Typography>
                                                    {powerGroup.PowerProduction} MW
                                                </Typography>
                                        </Card>
                                    </Grid>
                                    <Grid xs>
                                        <Card variant="outlined">
                                            {/* <CardHeader title={powerGroup.PowerConsumed+ " MW"} subheader="Power Consumed"></CardHeader> */}
                                                <Typography>
                                                    {powerGroup.PowerConsumed} MW
                                                </Typography>
                                        </Card>
                                    </Grid>
                                    <Grid xs>
                                        <Card variant="outlined">
                                            {/* <CardHeader title={powerGroup.PowerMaxConsumed+ " MW"} subheader="Power max. Consumed"></CardHeader> */}
                                                <Typography>
                                                    {powerGroup.PowerMaxConsumed} MW
                                                </Typography>
                                        </Card>
                                    </Grid>
                                </Grid>

                                <Grid container sx={{marginTop: "30px"}}>
                                    <Grid xs>
                                        <Typography level="h6" >Battery</Typography>
                                    </Grid>
                                    <Grid>
                                        {powerGroup.BatteryCapacity === 0 && powerGroup.BatteryTimeFull === "00:00:00" ? <Chip startDecorator={<BsCloudSlash size={'20px'}/> } sx={{paddingLeft: '6px'}} >No Battery connected</Chip> : <Chip startDecorator={<BsBatteryHalf size={'20px'}/>} sx={{paddingLeft: '6px', color: 'white'}} color="success">Battery connected</Chip>}
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
                                                    {powerGroup.BatteryCapacity} MW
                                                </Typography>
                                            </Card>
                                        </Grid>
                                        <Grid xs>
                                            <Card variant="outlined">
                                                {/* <CardHeader title={powerGroup.BatteryPercent+ " %"} subheader="Battery Filled Percent"></CardHeader> */}
                                                <Typography>
                                                    {powerGroup.BatteryPercent} %
                                                </Typography>
                                            </Card>
                                        </Grid>
                                        <Grid xs>
                                            <Card variant="outlined">
                                                {/* <CardHeader title={powerGroup.BatteryDifferential+ " MW"} subheader="Battery Differential"></CardHeader> */}
                                                <Typography>
                                                    {powerGroup.BatteryDifferential} MW
                                                </Typography>
                                            </Card>
                                        </Grid>
                                        <Grid xs>
                                            <Card variant="outlined">
                                                {/* <CardHeader title={powerGroup.BatteryTimeFull} subheader="Battery Full At Time"></CardHeader> */}
                                                <Typography>
                                                    {powerGroup.BatteryTimeFull}
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
                <CircularProgress/>
            }
        </Container>
    )
}