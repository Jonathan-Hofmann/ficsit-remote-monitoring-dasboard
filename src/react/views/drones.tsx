import {
  Box,
  Card,
  CardContent,
  Chip,
  CircularProgress,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/joy";
import { Skeleton } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { BsBatteryHalf, BsBox, BsClockHistory } from "react-icons/bs";

import { useAutoRefetch } from "../../hooks/useAutoRefetch";
import type { Drone } from "../../types/FRMApis/drone";
import type { DroneStation } from "../../types/FRMApis/droneStation";

type DroneStationStep = Record<
  string,
  { homeStation: DroneStation; destStation: DroneStation }
>;

export const Drones: React.FC = () => {
  const drones = useAutoRefetch<Drone[]>("getDrone");
  const droneStations = useAutoRefetch<DroneStation[]>("getDroneStation");
  const [droneStationStep, setDroneStationStep] = useState<DroneStationStep>();

  const handlePrepareTStationsForUI = useCallback(
    (dronesData: Drone[]) => {
      let temporaryStationStep: DroneStationStep = {};
      dronesData.forEach((drone) => {
        const homeStation = droneStations?.find(
          (el) => el.Name === drone.HomeStation,
        );
        const destStation = droneStations?.find(
          (el) => el.Name === drone.PairedStation,
        );

        if (homeStation && destStation) {
          temporaryStationStep = {
            ...temporaryStationStep,
            [drone.ID]: {
              homeStation,
              destStation,
            },
          };
        }
      });
      setDroneStationStep(temporaryStationStep);
    },
    [droneStations],
  );

  useEffect(() => {
    if (drones && drones.length > 0) handlePrepareTStationsForUI(drones);
  }, [drones, handlePrepareTStationsForUI]);

  return (
    <Container sx={{ paddingTop: "50px" }}>
      <Card
        variant="outlined"
        sx={{ marginBottom: "30px" }}
      >
        <CardContent>
          <Grid
            container
            display="flex"
            alignItems="center"
          >
            <Grid xs>
              <Typography
                marginBottom="5px"
                level="h2"
                fontWeight={600}
              >
                Drones
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {drones && droneStationStep ? (
        <>
          {drones.map((drone) => {
            if (droneStationStep[drone.ID]) {
              const { homeStation, destStation } = droneStationStep[drone.ID];

              return (
                <Grid
                  container
                  spacing={2}
                  sx={{ marginBottom: "30px", height: "300px" }}
                  display="flex"
                  alignItems="center"
                  key={drone.ID}
                >
                  <Grid
                    xs={3}
                    sx={{ height: "240px" }}
                  >
                    {homeStation ? (
                      <Card
                        variant="outlined"
                        sx={{
                          position: "relative",
                          marginBottom: "20px",
                          height: "110px",
                          paddingBottom: "0px !important",
                        }}
                      >
                        <CardContent>
                          {/* <BsLink45Deg size="28px"/> */}
                          <img
                            src="./assets/Buildings/IconDesc_DronePort_256.png"
                            alt="Satisfactory Drone Port illustration"
                            style={{ height: "35px", width: "35px" }}
                          />
                          <Typography
                            level="h6"
                            sx={{ marginTop: "10px" }}
                          >
                            {drone.HomeStation}
                          </Typography>

                          <Typography
                            level="body2"
                            sx={{ color: "rgba(255,255,255,0.5)" }}
                          >
                            Home Port
                          </Typography>

                          <Box
                            sx={{
                              position: "absolute",
                              top: "20px",
                              right: "20px",
                            }}
                          >
                            {homeStation.DroneStatus === "No Drones" && (
                              <Chip
                                color="info"
                                size="sm"
                                variant="outlined"
                                sx={{
                                  backgroundColor: "rgba(47, 128, 237, 0.1)",
                                  borderColor: "rgba(47, 128, 237, 0.1)",
                                }}
                              >
                                No drones
                              </Chip>
                            )}
                            {homeStation.DroneStatus === "Cannot Unload" && (
                              <Chip
                                color="info"
                                size="sm"
                                variant="outlined"
                                sx={{
                                  backgroundColor: "rgba(47, 128, 237, 0.1)",
                                  borderColor: "rgba(47, 128, 237, 0.1)",
                                }}
                              >
                                Inventory Full
                              </Chip>
                            )}
                            {homeStation.DroneStatus === "Docked" && (
                              <Chip
                                color="info"
                                size="sm"
                                variant="outlined"
                                sx={{
                                  backgroundColor: "rgba(47, 128, 237, 0.1)",
                                  borderColor: "rgba(47, 128, 237, 0.1)",
                                }}
                              >
                                Docked
                              </Chip>
                            )}
                            {homeStation.DroneStatus === "Takeoff" && (
                              <Chip
                                color="danger"
                                size="sm"
                                variant="outlined"
                                sx={{
                                  backgroundColor: "rgba(47, 128, 237, 0.1)",
                                  borderColor: "rgba(47, 128, 237, 0.1)",
                                }}
                              >
                                Takeoff
                              </Chip>
                            )}
                          </Box>
                        </CardContent>
                      </Card>
                    ) : null}

                    {destStation ? (
                      <Card
                        variant="outlined"
                        sx={{
                          position: "relative",
                          height: "110px",
                          paddingBottom: "0px !important",
                        }}
                      >
                        <CardContent>
                          <img
                            src="./assets/Buildings/IconDesc_DronePort_256.png"
                            alt="Satisfactory Drone Port illustration"
                            style={{ height: "35px", width: "35px" }}
                          />
                          <Typography
                            level="h6"
                            sx={{ marginTop: "10px" }}
                          >
                            {drone.CurrentDestination === ""
                              ? "N/A"
                              : drone.CurrentDestination}
                          </Typography>

                          <Typography
                            level="body2"
                            sx={{ color: "rgba(255,255,255,0.5)" }}
                          >
                            Linked Port
                          </Typography>

                          <Box
                            sx={{
                              position: "absolute",
                              top: "20px",
                              right: "20px",
                            }}
                          >
                            {destStation.DroneStatus === "No Drones" && (
                              <Chip
                                color="info"
                                size="sm"
                                variant="outlined"
                                sx={{
                                  backgroundColor: "rgba(47, 128, 237, 0.1)",
                                  borderColor: "rgba(47, 128, 237, 0.1)",
                                }}
                              >
                                No drones
                              </Chip>
                            )}
                            {destStation.DroneStatus === "Cannot Unload" && (
                              <Chip
                                color="info"
                                size="sm"
                                variant="outlined"
                                sx={{
                                  backgroundColor: "rgba(47, 128, 237, 0.1)",
                                  borderColor: "rgba(47, 128, 237, 0.1)",
                                }}
                              >
                                Inventory Full
                              </Chip>
                            )}
                            {destStation.DroneStatus === "Docked" && (
                              <Chip
                                color="info"
                                size="sm"
                                variant="outlined"
                                sx={{
                                  backgroundColor: "rgba(47, 128, 237, 0.1)",
                                  borderColor: "rgba(47, 128, 237, 0.1)",
                                }}
                              >
                                Docked
                              </Chip>
                            )}
                            {destStation.DroneStatus === "Takeoff" && (
                              <Chip
                                color="danger"
                                size="sm"
                                variant="outlined"
                                sx={{
                                  backgroundColor: "rgba(47, 128, 237, 0.1)",
                                  borderColor: "rgba(47, 128, 237, 0.1)",
                                }}
                              >
                                Takeoff
                              </Chip>
                            )}
                          </Box>
                        </CardContent>
                      </Card>
                    ) : null}
                  </Grid>

                  <Grid
                    xs={3}
                    sx={{ height: "240px", position: "relative" }}
                  >
                    <Card
                      variant="outlined"
                      sx={{
                        position: "relative",
                        height: "255px",
                        paddingTop: 0,
                      }}
                    >
                      <CardContent>
                        <Stack
                          alignItems="center"
                          sx={{ marginBottom: "15px" }}
                        >
                          <img
                            src="./assets/Vehicles/IconDesc_Drone_256.png"
                            alt="Satisfactory Drone illustration"
                            style={{ height: "100px" }}
                          />
                          {drone.CurrentFlyingMode === "Flying" && (
                            <Chip
                              color="info"
                              size="sm"
                              variant="outlined"
                              sx={{
                                backgroundColor: "rgba(47, 128, 237, 0.1)",
                                borderColor: "rgba(47, 128, 237, 0.1)",
                              }}
                            >
                              Flying
                            </Chip>
                          )}
                          {drone.CurrentFlyingMode === "Travel" && (
                            <Chip
                              color="info"
                              size="sm"
                              variant="outlined"
                              sx={{
                                backgroundColor: "rgba(47, 128, 237, 0.1)",
                                borderColor: "rgba(47, 128, 237, 0.1)",
                              }}
                            >
                              Flying
                            </Chip>
                          )}
                          {drone.CurrentFlyingMode === "None" && (
                            <Chip
                              color="info"
                              size="sm"
                              variant="outlined"
                              sx={{
                                backgroundColor: "rgba(47, 128, 237, 0.1)",
                                borderColor: "rgba(47, 128, 237, 0.1)",
                              }}
                            >
                              Pending ...
                            </Chip>
                          )}
                        </Stack>

                        <Grid container>
                          <Grid xs>
                            <Typography sx={{ color: "rgba(255,255,255,0.5)" }}>
                              Next To
                            </Typography>
                          </Grid>
                          <Grid>
                            <Typography sx={{ color: "rgba(255,255,255,0.9)" }}>
                              {drone.CurrentDestination}
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid container>
                          <Grid xs>
                            <Typography sx={{ color: "rgba(255,255,255,0.5)" }}>
                              Speed
                            </Typography>
                          </Grid>
                          <Grid>
                            <Typography sx={{ color: "rgba(255,255,255,0.9)" }}>
                              {drone.FlyingSpeed < 0
                                ? drone.FlyingSpeed * -1
                                : drone.FlyingSpeed}{" "}
                              Knots
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid container>
                          <Grid xs>
                            <Typography sx={{ color: "rgba(255,255,255,0.5)" }}>
                              Height (Sealevel)
                            </Typography>
                          </Grid>
                          <Grid>
                            <Typography sx={{ color: "rgba(255,255,255,0.9)" }}>
                              {(drone.location.z / 100 + 18).toFixed(2)} m
                            </Typography>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid
                    xs={6}
                    sx={{ height: "240px" }}
                  >
                    <Grid
                      container
                      sx={{ height: "110px", marginBottom: "40px" }}
                    >
                      <Grid
                        xs={6}
                        sx={{ paddingTop: 0 }}
                      >
                        <Card
                          variant="outlined"
                          sx={{
                            height: "110px",
                            paddingBottom: "0px !important",
                          }}
                        >
                          <CardContent>
                            <BsClockHistory
                              size="25px"
                              color="rgba(255,255,255,0.5)"
                            />
                            <Typography
                              level="h4"
                              marginTop="10px"
                            >
                              {homeStation.AvgRndTrip}
                            </Typography>
                            <Typography level="body2">
                              Avg. Round Trip Time
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                      <Grid
                        xs={6}
                        sx={{ paddingTop: 0 }}
                      >
                        <Card
                          variant="outlined"
                          sx={{
                            height: "110px",
                            paddingBottom: "0px !important",
                          }}
                        >
                          <CardContent>
                            <BsClockHistory
                              size="25px"
                              color="rgba(255,255,255,0.5)"
                            />
                            <Typography
                              level="h4"
                              marginTop="10px"
                            >
                              {homeStation.LatestRndTrip}
                            </Typography>
                            <Typography level="body2">
                              Last Round Trip Time
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      sx={{ height: "110px" }}
                    >
                      <Grid
                        xs={6}
                        sx={{ paddingTop: 0 }}
                      >
                        <Card
                          variant="outlined"
                          sx={{
                            height: "110px",
                            paddingBottom: "0px !important",
                          }}
                        >
                          <CardContent>
                            <BsBatteryHalf
                              size="25px"
                              color="rgba(255,255,255,0.5)"
                            />
                            <Typography
                              level="h4"
                              marginTop="10px"
                            >
                              {homeStation.ActiveFuel.EstimatedFuelCostRate.toFixed(
                                2,
                              )}{" "}
                              / min
                            </Typography>
                            <Typography level="body2">
                              Estimated Battery Rate
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                      <Grid
                        xs={6}
                        sx={{ paddingTop: 0 }}
                      >
                        <Card
                          variant="outlined"
                          sx={{
                            height: "110px",
                            paddingBottom: "0px !important",
                          }}
                        >
                          <CardContent>
                            <BsBox
                              size="25px"
                              color="rgba(255,255,255,0.5)"
                            />
                            <Typography
                              level="h4"
                              marginTop="10px"
                            >
                              {homeStation.EstTotalTransRate.toFixed(2)} stacks
                            </Typography>
                            <Typography level="body2">
                              Estimated Transfer Rate (per minute)
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              );
            }
            return (
              <Grid
                container
                spacing={2}
                sx={{ marginBottom: "30px", height: "300px" }}
                display="flex"
                alignItems="center"
              >
                <Grid
                  xs={3}
                  sx={{ height: "240px" }}
                >
                  <Card
                    variant="outlined"
                    sx={{
                      position: "relative",
                      marginBottom: "20px",
                      height: "110px",
                      paddingBottom: "0px !important",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <CardContent>
                      <CircularProgress />
                    </CardContent>
                  </Card>

                  <Card
                    variant="outlined"
                    sx={{
                      position: "relative",
                      height: "110px",
                      paddingBottom: "0px !important",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <CardContent>
                      <CircularProgress />
                    </CardContent>
                  </Card>
                </Grid>

                <Grid
                  xs={3}
                  sx={{ height: "240px", position: "relative" }}
                >
                  <Card
                    variant="outlined"
                    sx={{
                      position: "relative",
                      height: "255px",
                      paddingTop: 0,
                    }}
                  >
                    <CardContent>
                      <Stack
                        alignItems="center"
                        sx={{ marginBottom: "15px" }}
                      >
                        <img
                          src="./assets/Vehicles/IconDesc_Drone_256.png"
                          alt="Satisfactory Drone illustration"
                          style={{ height: "100px" }}
                        />
                        {drone.CurrentFlyingMode === "Flying" && (
                          <Chip
                            color="info"
                            size="sm"
                            variant="outlined"
                            sx={{
                              backgroundColor: "rgba(47, 128, 237, 0.1)",
                              borderColor: "rgba(47, 128, 237, 0.1)",
                            }}
                          >
                            Flying
                          </Chip>
                        )}
                        {drone.CurrentFlyingMode === "Travel" && (
                          <Chip
                            color="info"
                            size="sm"
                            variant="outlined"
                            sx={{
                              backgroundColor: "rgba(47, 128, 237, 0.1)",
                              borderColor: "rgba(47, 128, 237, 0.1)",
                            }}
                          >
                            Flying
                          </Chip>
                        )}
                        {drone.CurrentFlyingMode === "None" && (
                          <Chip
                            color="info"
                            size="sm"
                            variant="outlined"
                            sx={{
                              backgroundColor: "rgba(47, 128, 237, 0.1)",
                              borderColor: "rgba(47, 128, 237, 0.1)",
                            }}
                          >
                            Pending ...
                          </Chip>
                        )}
                      </Stack>

                      <Grid container>
                        <Grid xs>
                          <Typography sx={{ color: "rgba(255,255,255,0.5)" }}>
                            Next To
                          </Typography>
                        </Grid>
                        <Grid>
                          <Typography sx={{ color: "rgba(255,255,255,0.9)" }}>
                            {drone.CurrentDestination}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid container>
                        <Grid xs>
                          <Typography sx={{ color: "rgba(255,255,255,0.5)" }}>
                            Speed
                          </Typography>
                        </Grid>
                        <Grid>
                          <Typography sx={{ color: "rgba(255,255,255,0.9)" }}>
                            {drone.FlyingSpeed < 0
                              ? drone.FlyingSpeed * -1
                              : drone.FlyingSpeed}{" "}
                            Knots
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid container>
                        <Grid xs>
                          <Typography sx={{ color: "rgba(255,255,255,0.5)" }}>
                            Height (Sealevel)
                          </Typography>
                        </Grid>
                        <Grid>
                          <Typography sx={{ color: "rgba(255,255,255,0.9)" }}>
                            {(drone.location.z / 100 + 18).toFixed(2)} m
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid
                  xs={6}
                  sx={{ height: "240px" }}
                >
                  <Grid
                    container
                    sx={{ height: "110px", marginBottom: "40px" }}
                  >
                    <Grid
                      xs={6}
                      sx={{ paddingTop: 0 }}
                    >
                      <Card
                        variant="outlined"
                        sx={{
                          position: "relative",
                          height: "110px",
                          paddingBottom: "0px !important",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <CardContent>
                          <CircularProgress />
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid
                      xs={6}
                      sx={{ paddingTop: 0 }}
                    >
                      <Card
                        variant="outlined"
                        sx={{
                          position: "relative",
                          height: "110px",
                          paddingBottom: "0px !important",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <CardContent>
                          <CircularProgress />
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    sx={{ height: "110px" }}
                  >
                    <Grid
                      xs={6}
                      sx={{ paddingTop: 0 }}
                    >
                      <Card
                        variant="outlined"
                        sx={{
                          position: "relative",
                          height: "110px",
                          paddingBottom: "0px !important",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <CardContent>
                          <CircularProgress />
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid
                      xs={6}
                      sx={{ paddingTop: 0 }}
                    >
                      <Card
                        variant="outlined"
                        sx={{
                          position: "relative",
                          height: "110px",
                          paddingBottom: "0px !important",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <CardContent>
                          <CircularProgress />
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            );
          })}
        </>
      ) : (
        <Grid
          container
          spacing={2}
          sx={{ marginBottom: "30px", height: "300px", opacity: 0.5 }}
        >
          <Grid
            xs={3}
            sx={{ height: "240px" }}
          >
            <Card
              variant="outlined"
              sx={{
                position: "relative",
                marginBottom: "20px",
                height: "110px",
                paddingBottom: "0px !important",
              }}
            >
              <CardContent>
                <Skeleton
                  variant="circular"
                  sx={{}}
                  width="35px"
                  height="35px"
                />

                <Skeleton
                  variant="rounded"
                  sx={{ marginTop: "10px", marginBottom: "10px" }}
                  width="120px"
                  height="20px"
                />

                <Skeleton width="80px" />
              </CardContent>
            </Card>

            <Card
              variant="outlined"
              sx={{
                position: "relative",
                height: "110px",
                paddingBottom: "0px !important",
              }}
            >
              <CardContent>
                <Skeleton
                  variant="circular"
                  sx={{}}
                  width="35px"
                  height="35px"
                />

                <Skeleton
                  variant="rounded"
                  sx={{ marginTop: "10px", marginBottom: "10px" }}
                  width="120px"
                  height="20px"
                />

                <Skeleton width="80px" />
              </CardContent>
            </Card>
          </Grid>

          <Grid
            xs={3}
            sx={{ height: "240px", position: "relative" }}
          >
            <Card
              variant="outlined"
              sx={{ position: "relative", height: "255px", paddingTop: 0 }}
            >
              <CardContent>
                <Stack
                  alignItems="center"
                  sx={{ marginBottom: "5px" }}
                >
                  {/* <img src="./assets/Vehicles/IconDesc_Drone_256.png" alt="image" style={{height: '100px'}}></img> */}

                  <Skeleton
                    variant="circular"
                    sx={{ marginTop: "20px", marginBottom: "10px" }}
                    width="80px"
                    height="80px"
                  />

                  <Skeleton width="80px" />
                </Stack>

                <Grid container>
                  <Grid xs>
                    <Typography sx={{ color: "rgba(255,255,255,0.5)" }}>
                      Next To
                    </Typography>
                  </Grid>
                  <Grid>
                    <Skeleton width="100px" />
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid xs>
                    <Typography sx={{ color: "rgba(255,255,255,0.5)" }}>
                      Speed
                    </Typography>
                  </Grid>
                  <Grid>
                    <Skeleton width="60px" />
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid xs>
                    <Typography sx={{ color: "rgba(255,255,255,0.5)" }}>
                      Height (Sealevel)
                    </Typography>
                  </Grid>
                  <Grid>
                    <Skeleton width="50px" />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            xs={6}
            sx={{ height: "240px" }}
          >
            <Grid
              container
              sx={{ height: "110px", marginBottom: "40px" }}
            >
              <Grid
                xs={6}
                sx={{ paddingTop: 0 }}
              >
                <Card
                  variant="outlined"
                  sx={{
                    position: "relative",
                    height: "110px",
                    paddingBottom: "0px !important",
                  }}
                >
                  <CardContent>
                    <Skeleton
                      variant="circular"
                      sx={{}}
                      width="35px"
                      height="35px"
                    />

                    <Skeleton
                      variant="rounded"
                      sx={{ marginTop: "10px", marginBottom: "10px" }}
                      width="120px"
                      height="20px"
                    />

                    <Skeleton width="80px" />
                  </CardContent>
                </Card>
              </Grid>
              <Grid
                xs={6}
                sx={{ paddingTop: 0 }}
              >
                <Card
                  variant="outlined"
                  sx={{
                    position: "relative",
                    height: "110px",
                    paddingBottom: "0px !important",
                  }}
                >
                  <CardContent>
                    <Skeleton
                      variant="circular"
                      sx={{}}
                      width="35px"
                      height="35px"
                    />

                    <Skeleton
                      variant="rounded"
                      sx={{ marginTop: "10px", marginBottom: "10px" }}
                      width="120px"
                      height="20px"
                    />

                    <Skeleton width="80px" />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <Grid
              container
              sx={{ height: "110px" }}
            >
              <Grid
                xs={6}
                sx={{ paddingTop: 0 }}
              >
                <Card
                  variant="outlined"
                  sx={{
                    position: "relative",
                    height: "110px",
                    paddingBottom: "0px !important",
                  }}
                >
                  <CardContent>
                    <Skeleton
                      variant="circular"
                      sx={{}}
                      width="35px"
                      height="35px"
                    />

                    <Skeleton
                      variant="rounded"
                      sx={{ marginTop: "10px", marginBottom: "10px" }}
                      width="120px"
                      height="20px"
                    />

                    <Skeleton width="80px" />
                  </CardContent>
                </Card>
              </Grid>
              <Grid
                xs={6}
                sx={{ paddingTop: 0 }}
              >
                <Card
                  variant="outlined"
                  sx={{
                    position: "relative",
                    height: "110px",
                    paddingBottom: "0px !important",
                  }}
                >
                  <CardContent>
                    <Skeleton
                      variant="circular"
                      sx={{}}
                      width="35px"
                      height="35px"
                    />

                    <Skeleton
                      variant="rounded"
                      sx={{ marginTop: "10px", marginBottom: "10px" }}
                      width="120px"
                      height="20px"
                    />

                    <Skeleton width="80px" />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};
