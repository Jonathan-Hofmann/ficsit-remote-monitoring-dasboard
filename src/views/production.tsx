import { Card, CardContent, CardCover, Container, Grid, Stack, Typography } from "@mui/joy";
import React from "react";

export const FactorysSwitch:React.FC = (props) => {
    return(
        <Container>
            <Grid container display={'flex'} alignItems={'center'} sx={{marginBottom: '20px', marginTop: '40px'}}>
                <Grid xs>
                    <Typography level="h2" fontWeight={600}>
                        Available Factorys
                    </Typography>
                </Grid>
                <Grid>
                    {/* <IconButton size="sm">
                        <GiCargoCrate size="22px" color="rgba(255,255,255,0.1)" />
                    </IconButton>  */}
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid xs={4}>
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