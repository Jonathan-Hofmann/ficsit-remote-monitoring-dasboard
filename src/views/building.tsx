import { Box, Card, CardHeader, Chip, Container, Divider, Grid, IconButton, Paper, Stack, Step, StepIcon, StepLabel, Stepper, Tooltip, Typography } from "@mui/material";
import { useTheme } from "@mui/system";
import React, { useEffect, useState } from "react";
import { BsCheck2, BsX, BsXCircle, BsXCircleFill } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";

export const Building:React.FC = (props) => {
    const {state} = useLocation();
    const b_tmp:any = state;
    const b:any = b_tmp.data;
    console.log(b);

    let errorText = "";
    const [step, setStep] = useState(0);
    const steps = ["Configure a Recipe", "Start Producing", " Lay Back and Relax"]

    const theme = useTheme();

    /**
     * {
    "building": "Constructor",
    "location": {
      "x": 246034.03125,
      "y": -190829.25,
      "z": 2271.178467,
      "rotation": 270
    },
    "Recipe": "Concrete",
    "production": [
      {
        "Name": "Concrete",
        "CurrentProd": 9.9,
        "MaxProd": 15.0,
        "ProdPercent": "66.300003"
      }
    ],
    "ingredients": [
      {
        "Name": "Limestone",
        "CurrentConsumed": 29.799999,
        "MaxConsumed": 45.0,
        "ConsPercent": "66.300003"
      }
    ],
    "ManuSpeed": 1.0,
    "IsConfigured": true,
    "IsProducing": true,
    "IsPaused": false,
    "CircuitID": 1
  },
     */

    const isFailingStep = (step:number) => {
        if (step === 0) {
            if(b.IsConfigured === true){
                return false;
            } else {
                errorText = "Recipe not configured!";
                return true;
            }
        }

        if (step === 1) {
            if(b.IsProducing === true){
                return false;
            } else {
                errorText = "Not able to produce... Check Power!";
                return true;
            }
        }
    }

    useEffect(()=>{
        if(b.IsConfigured === false){
            setStep(0);
        } else if(b.IsProducing === false && b.IsPaused === true){
            setStep(1);
        } else{
            setStep(2);
        }
    }, [state])

    return(
        <Container sx={{paddingTop:'50px'}}>
            <Grid container display={'flex'} alignItems={'center'}>
                <Grid item xs>
                    <Typography variant="h2" fontWeight={600}>
                        {b.building}
                    </Typography>
                </Grid>
                <Grid item>
                    <Link to={'/production'}>
                        <IconButton size="large">
                            <BsX />
                        </IconButton>
                    </Link>
                </Grid>
            </Grid>
            <Divider sx={{margin: '20px 0'}}></Divider>

            <Grid container  spacing={2} sx={{marginBottom: '30px'}}>
                <Grid item xs>
                    <Card>
                        <CardHeader title={b.Recipe} subheader="Currently Producing"></CardHeader>
                    </Card>
                </Grid>
                <Grid item xs>
                    <Card>
                        <CardHeader title={(parseFloat(b.ManuSpeed)*100) + " %"} subheader="Overclocking Speed"></CardHeader>
                    </Card>
                </Grid>
                <Grid item xs>
                    <Card>
                        <CardHeader title={b.CircuitID} subheader="Power Circuit"></CardHeader>
                    </Card>
                </Grid>
                <Tooltip title={"errorText"}>
                    <Grid item xs>
                        {b.IsConfigured === true && b.IsProducing === true && b.IsPaused === false ? 
                            <Card sx={{backgroundColor: theme.palette.success.main}}>
                                <CardHeader title="No Problems" subheader="Current Status"></CardHeader>
                            </Card>
                        :
                            <Card sx={{backgroundColor: theme.palette.error.main}}>
                                <CardHeader title="Broken!" subheader="Fuse Status"></CardHeader>
                            </Card>
                        }
                    </Grid>
                </Tooltip>
            </Grid>

            {/* <Stack sx={{margin: '50px 0'}} display={'flex'} alignItems={'center'}>
                <Box sx={{ width: '70%' }}>
                    <Stepper alternativeLabel activeStep={step}>
                        {steps.map((label, index) => {
                            const labelProps: {
                                optional?: React.ReactNode;
                                error?: boolean;
                            } = {};
                            if (isFailingStep(index)) {
                                labelProps.optional = (
                                    <Typography variant="body2" sx={{fontSize:'12px', marginTop: '6px'}} textAlign={'center'} color="error">
                                        {errorText}
                                    </Typography>
                                );
                                labelProps.error = true;
                            }

                            return (
                                <Step key={label}>
                                    <StepLabel {...labelProps}><strong>{label}</strong></StepLabel>
                                </Step>
                            );
                        })}
                    </Stepper>
                </Box>
            </Stack> */}

            <Divider sx={{marginBottom: '30px'}}/>

            <Paper elevation={1} sx={{marginBottom: '30px', padding: '20px'}}>
                <Grid container>
                    <Grid item xs>
                        <Typography variant="h5" sx={{marginBottom: '20px'}}>{b.building} produces {b.Recipe}</Typography>
                    </Grid>
                    <Grid item>
                        {/* {productionItem.FuseTriggered === true ? <Chip icon={<BsExclamationTriangleFill size={'17px'}/> } sx={{paddingLeft: '6px'}} color="error" label="FUSE BROKEN"></Chip> : <Chip icon={<BsCheck size={'22px'}/> } sx={{paddingLeft: '6px', color: 'white'}} color="success" label="Fuse: All Good"></Chip>} */}
                    </Grid>
                </Grid>
                {b.production.map((productionItem:any) => {
                    return(
                        <Grid container spacing={2}>
                            <Grid item xs>
                                <Card variant="outlined">
                                    <CardHeader title={productionItem.Name} subheader="Name"></CardHeader>
                                </Card>
                            </Grid>
                            <Grid item xs>
                                <Card variant="outlined">
                                    <CardHeader title={parseFloat(productionItem.CurrentProd).toFixed(2)} subheader="Current Production"></CardHeader>
                                </Card>
                            </Grid>
                            <Grid item xs>
                                <Card variant="outlined">
                                    <CardHeader title={parseFloat(productionItem.MaxProd).toFixed(2)} subheader="Maximum Production"></CardHeader>
                                </Card>
                            </Grid>
                            <Grid item xs>
                                <Card variant="outlined">
                                    <CardHeader title={parseFloat(productionItem.ProdPercent).toFixed(2)+ " %"} subheader="Efficentcy Percentage"></CardHeader>
                                </Card>
                            </Grid>
                        </Grid>
                    )
                })}
                
            </Paper>

            <Divider sx={{marginBottom: '30px'}}/>

            <Paper elevation={1} sx={{marginBottom: '30px', padding: '20px', paddingBottom: '5px'}}>
                <Grid container>
                    <Grid item xs>
                        <Typography variant="h5" sx={{marginBottom: '20px'}}>{b.building} needs Ingredients:</Typography>
                    </Grid>
                    <Grid item>
                        {/* {productionItem.FuseTriggered === true ? <Chip icon={<BsExclamationTriangleFill size={'17px'}/> } sx={{paddingLeft: '6px'}} color="error" label="FUSE BROKEN"></Chip> : <Chip icon={<BsCheck size={'22px'}/> } sx={{paddingLeft: '6px', color: 'white'}} color="success" label="Fuse: All Good"></Chip>} */}
                    </Grid>
                </Grid>
                {b.ingredients.map((productionItem:any) => {
                    return(
                        <Grid container spacing={2} sx={{marginBottom: '20px'}}>
                            <Grid item xs>
                                <Card variant="outlined">
                                    <CardHeader title={productionItem.Name} subheader="Name"></CardHeader>
                                </Card>
                            </Grid>
                            <Grid item xs>
                                <Card variant="outlined">
                                    <CardHeader title={parseFloat(productionItem.CurrentConsumed).toFixed(2)} subheader="Current Consumption"></CardHeader>
                                </Card>
                            </Grid>
                            <Grid item xs>
                                <Card variant="outlined">
                                    <CardHeader title={parseFloat(productionItem.MaxConsumed).toFixed(2)} subheader="Maximum Consumption"></CardHeader>
                                </Card>
                            </Grid>
                            <Grid item xs>
                                <Card variant="outlined">
                                    <CardHeader title={parseFloat(productionItem.ConsPercent).toFixed(2)+ " %"} subheader="Efficentcy Percentage"></CardHeader>
                                </Card>
                            </Grid>
                        </Grid>
                    )
                })}
                
            </Paper>

            
        </Container>
    )
}