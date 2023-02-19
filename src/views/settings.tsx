import { Button, Card, CardContent, Container, Grid, Input, Typography } from "@mui/joy";
import React from "react";

export const Settings:React.FC = (props) => {
    return(
        <Container>
            <Card variant="outlined" sx={{marginTop: '40px', marginBottom: '30px'}}>
                <CardContent>
                    <Grid container>
                        <Grid xs>
                            <Typography level="h3">
                                Settings
                            </Typography>
                        </Grid>
                        <Grid>
                            <Button onClick={()=>{}}>
                                Save Settings
                            </Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            <Grid container spacing={2}>
                <Grid xs={6}>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography level="h5">Connection</Typography>

                            <Input sx={{marginTop: '15px'}} startDecorator={'http://'} placeholder="127.0.0.1" />
                            <Input sx={{marginTop: '15px'}} startDecorator={'http://127.0.0.1:'} placeholder="8080" />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid xs={3}>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography level="h5">Preferences</Typography>

                            <Typography level="body2" marginTop={'15px'}>More preferences coming soon.</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}