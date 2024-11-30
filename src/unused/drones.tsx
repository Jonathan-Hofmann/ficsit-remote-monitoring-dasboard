                        {/* <Grid container spacing={2} sx={{marginBottom: '10px'}}>
                                                <Grid>
                                                    
                                                </Grid>
                                                <Grid xs>
                                                    <Box sx={{position: 'relative'}}>
                                                        <Grid container spacing={1} display={'flex'} alignItems={'center'}>
                                                            <Grid xs>
                                                                <Typography level="h4">{drone.VehicleType} #{drone.ID}</Typography>
                                                            </Grid>
                                                            <Grid>
                                                            </Grid>
    
                                                            <Grid>
                                                                </Grid>
                                                        </Grid>
                                                    </Box>
                                                </Grid>
                                            </Grid> */}

                                            let percentDone = 0;
            let top = 0;
            let bottom = 0;
            let totalLength = 0;

            if (
              droneStationPrev[index].length > 0 &&
              droneStationPrev[index][0] &&
              droneStationPrev[index][1]
            ) {
              top = Math.floor(
                ((droneStationPrev[index][0].location.x - drone.location.x) **
                  2 +
                  (droneStationPrev[index][0].location.y - drone.location.y) **
                    2) **
                  0.5 /
                  100,
              );
              
              bottom = Math.floor(
                ((droneStationPrev[index][1].location.x - drone.location.x) **
                  2 +
                  (droneStationPrev[index][1].location.y - drone.location.y) **
                    2) **
                  0.5 /
                  100,
              );

              totalLength = Math.floor(
                ((droneStationPrev[index][0].location.x -
                  droneStationPrev[index][1].location.x) **
                  2 +
                  (droneStationPrev[index][0].location.y -
                    droneStationPrev[index][1].location.y) **
                    2) **
                  0.5 /
                  100,
              );

              percentDone = (top / totalLength) * 100;
            }
