import { Card, CardContent, Container, Grid, Typography } from "@mui/joy";
import React from "react";
import { BuildingButton } from "../components/buildingButton";

export const FactorysSwitch:React.FC = () => {
    let factories = ['Smelter', 'Constructor', 'Assembler', 'Foundry', 'Refinery', 'Manufacturer', 'Blender', 'Particle Accelerator', 'Converter', 'Quantum Encoder']
    return(
        <Container sx={{paddingTop: '50px'}}>

            <Card variant="outlined" sx={{marginBottom: '30px'}}>
                <CardContent>
                    <Grid container display={'flex'} alignItems={'center'}>
                        <Grid xs>
                            <Typography level="h2" marginBottom={"5px"} fontWeight={600}>
                                Available Factories
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

            <Grid container spacing={3}>
                {factories.map((factory:any, index:any)=>{
                    return(
                        <BuildingButton key={index} factory={factory} page="factory"/>
                    )
                })}
            </Grid>
        </Container>
    )
}