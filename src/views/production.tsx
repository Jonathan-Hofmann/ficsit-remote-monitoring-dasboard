import { Card, CardContent, CardCover, Container, Grid, Stack, Typography } from "@mui/joy";
import React from "react";
import { Link } from "react-router-dom";

export const FactorysSwitch:React.FC = (props) => {
    return(
        <Container sx={{paddingTop: '50px'}}>

            <Card variant="outlined" sx={{marginBottom: '30px'}}>
                <CardContent>
                    <Grid container display={'flex'} alignItems={'center'}>
                        <Grid xs>
                            <Typography level="h2" marginBottom={"5px"} fontWeight={600}>
                                Available Factorys
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
                <Grid xs={4}>
                    <Link to="/factory/?factory=Smeltery&endpoint=getSmelter" style={{textDecoration: 'none'}}>
                        <Card variant="outlined" sx={{'&:hover': {
                            borderColor: 'var(--joy-palette-neutral-700)'
                        }, cursor: 'pointer'}}>
                            <CardContent>
                                <Stack alignItems={'center'}>
                                    <img src="./assets/Buildings/SmelterMk1_256.png" alt="image" style={{height: '70px', width: '70px'}}></img>
                                    <Typography level="h5">
                                        Open Smelters Panel
                                    </Typography>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Link>
                </Grid>
                <Grid xs={4}>
                    <Card variant="outlined" sx={{'&:hover': {
                        borderColor: 'var(--joy-palette-neutral-700)'
                    }, cursor: 'pointer'}}>
                        <CardContent>
                            <Stack alignItems={'center'}>
                                <img src="./assets/Buildings/ConstructorMk1_256.png" alt="image" style={{height: '70px', width: '70px'}}></img>
                                <Typography level="h5">
                                    Open Constructors Panel
                                </Typography>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid xs={4}>
                    <Card variant="outlined" sx={{'&:hover': {
                        borderColor: 'var(--joy-palette-neutral-700)'
                    }, cursor: 'pointer'}}>
                        <CardContent>
                            <Stack alignItems={'center'}>
                                <img src="./assets/Buildings/AssemblerMk1_256.png" alt="image" style={{height: '70px', width: '70px'}}></img>
                                <Typography level="h5">
                                    Open Assemblers Panel
                                </Typography>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid xs={4}>
                    <Card variant="outlined" sx={{'&:hover': {
                        borderColor: 'var(--joy-palette-neutral-700)'
                    }, cursor: 'pointer'}}>
                        <CardContent>
                            <Stack alignItems={'center'}>
                                <img src="./assets/Buildings/Manufacturer_256.png" alt="image" style={{height: '70px', width: '70px'}}></img>
                                <Typography level="h5">
                                    Open Manufacturer Panel
                                </Typography>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid xs={4}>
                    <Card variant="outlined" sx={{'&:hover': {
                        borderColor: 'var(--joy-palette-neutral-700)'
                    }, cursor: 'pointer'}}>
                        <CardContent>
                            <Stack alignItems={'center'}>
                                <img src="./assets/Buildings/IconDesc_OilRefinery_256.png" alt="image" style={{height: '70px', width: '70px'}}></img>
                                <Typography level="h5">
                                    Open Refinery Panel
                                </Typography>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid xs={4}>
                    <Card variant="outlined" sx={{'&:hover': {
                        borderColor: 'var(--joy-palette-neutral-700)'
                    }, cursor: 'pointer'}}>
                        <CardContent>
                            <Stack alignItems={'center'}>
                                <img src="./assets/Buildings/IconDesc_Blender_256.png" alt="image" style={{height: '70px', width: '70px'}}></img>
                                <Typography level="h5">
                                    Open Blender Panel
                                </Typography>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid xs={4}>
                    <Card variant="outlined" sx={{'&:hover': {
                        borderColor: 'var(--joy-palette-neutral-700)'
                    }, cursor: 'pointer'}}>
                        <CardContent>
                            <Stack alignItems={'center'}>
                                <img src="./assets/Buildings/Foundry_256.png" alt="image" style={{height: '70px', width: '70px'}}></img>
                                <Typography level="h5">
                                    Open Foundry Panel
                                </Typography>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}