import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export const Drones:React.FC = (props) => {
    
    const [doLoadData, setLoadData] = useState(true);
    const [power, setPower] = useState<undefined | any>(undefined);

    const loadData = async () => {
        if (doLoadData === true) {
            const response = await fetch("http://127.0.0.1:8080/getVehicles");
            const data = await response.text();
            const getPower = JSON.parse(data);
            console.info(getPower);
            setPower(getPower);
            setTimeout(() => {
                loadData();
            }, 1000);
        }
    };

    useEffect(()=>{
        loadData();
    }, [])

    return(
        <Container sx={{paddingTop:'50px'}}>
            <Grid container display={'flex'} alignItems={'center'}>
                <Grid item xs>
                    <Typography variant="h2" fontWeight={600}>
                        Drones
                    </Typography>
                </Grid>
                <Grid item>
                    {/* <Link to={'/production'}>
                        <IconButton size="large">
                            <BsX />
                        </IconButton>
                    </Link> */}
                </Grid>
            </Grid>
            <Typography>Drones!</Typography>
        </Container>
    )
}