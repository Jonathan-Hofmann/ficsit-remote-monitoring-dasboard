import { CardContent, Container, FormLabel, Grid, Input } from "@mui/joy";
import { Box, Button, FormControl, Card, TextField, Typography } from "@mui/joy";
import React, { useState } from "react";
import { BsArrowRight, BsArrowRightCircle, BsArrowRightCircleFill, BsArrowRightShort } from "react-icons/bs";
import { AwesomeSink } from "../components/awesomeSink";
import { itemRefs } from "../constants/items";

export const Start:React.FC = (props) => {
    const [port, setPort] = useState(8080);
    return(
        // <Box display={'flex'} style={{height: '80vh'}} justifyContent={'center'} alignItems={'center'}>
        //     <Card sx={{padding: '40px'}}>
        //         <CardContent>
        //             <Typography textAlign={'center'} level="h3">Welcome Pioneer!</Typography>
        //             <Typography textAlign={'center'} level="body1" sx={{marginTop:'20px'}}>To start please enter the PORT on which the Ficsit Remote Monitoring is set. <br/>(Default 8080)</Typography>
        //             <FormControl sx={{marginTop:'30px'}}>
        //                 <FormLabel>Port number</FormLabel>
        //                 <Input
        //                 onChange={(e)=>setPort(parseInt(e.target.value))}
        //                 defaultValue={port}
        //                 type={'number'}
        //                 />
        //             </FormControl>
        //             <Button disabled={isNaN(port)} endDecorator={<BsArrowRightCircle size={'20px'}/>} sx={{marginTop:'30px'}} fullWidth>
        //                 {isNaN(port) ? "PORT IS REQUIRED" : "Using Port "+port}
        //             </Button>
        //         </CardContent>
        //     </Card>
        // </Box>
        <Container sx={{paddingTop: '50px'}}>
            
            <Typography marginBottom={'10px'} level="h1">Welcome Pioneer!</Typography>
            <Typography marginBottom={'50px'} level="h5" color="neutral" fontWeight={400}>Satisfactory Remote Monitoring Dashboard Version 0.1</Typography>
            <Grid spacing={3} container sx={{height: '100%', position: 'relative'}}>
                <Grid xs={6}>
                    <Grid container paddingY={0} px={0} spacing={2}>
                        <Grid xs={4}>
                            <Card variant="outlined" sx={{height: '120px'}}>
                                <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                    <img src={"./assets/"+itemRefs["Iron Ingot"].image} alt="image" style={{height: '70px', width: '70px'}}></img>
                                    <Typography marginBottom={'5px'}>Iron Ingot</Typography>
                                    <Typography level="body2">15.829 Items</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        
                    </Grid>
                </Grid>
                <Grid xs={6}>
                    <AwesomeSink/>
                </Grid>
            </Grid>
        </Container>
    )
}