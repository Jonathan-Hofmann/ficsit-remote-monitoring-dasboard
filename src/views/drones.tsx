import {
  Box,
  Card,
  CardContent,
  Chip,
  CircularProgress,
  Container,
  Grid,
  IconButton,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/joy";
import { Skeleton } from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import {
  BsBatteryHalf,
  BsBox,
  BsClockHistory,
  BsLink45Deg,
} from "react-icons/bs";
import { GiCargoCrate, GiDeliveryDrone } from "react-icons/gi";

import { SettingsContext } from "../context/Settings";
import { useLocalStorage } from "../hooks/localStorage";
import { defaultSettingsData } from "./settings";

export const Drones: React.FC = (props) => {
  const [doLoadData, setLoadData] = useState(true);
  const [drones, setDrones] = useState<undefined | any[]>(undefined);
  const [droneStaions, setDronestations] = useState<undefined | any>(undefined);

  const [drStation_PrevNext, setDrStation_PrevNext] = useState<
    undefined | any[]
  >(undefined);

  const [settings, _] = useLocalStorage("rmd_settings", defaultSettingsData);

  // const settings = useContext(SettingsContext);

  const loadData = async () => {
    if (doLoadData === true) {
      const response = await axios.get(
        `http://${settings.ip}:${settings.port}/getDrone`,
      );
      const response_station = await axios.get(
        `http://${settings.ip}:${settings.port}/getDroneStation`,
      );

      const { data } = response;
      const data_station = response_station.data;

      // console.log(data);

      setDrones(data);
      setDronestations(data_station);

      setTimeout(() => {
        loadData();
      }, settings.interval);
    }
  };

  const handlePrepareTStationsForUI = (drones_data: Record<string, any>[]) => {
    const tmp: any[] = [];

    // Alle Drohnen durch-iterieren

    // Alle Drone Ports Durch-iterieren

    // If Drone-Port = Drone-HomeBase
    // -> Merken

    // If Drone-Port = Drone CurrentDestination
    // -> Merken

    // tmpArray ein Objekt mit gefundenem Drohnen-Port#1 + Drohnen-Port#2 erweitern.

    for (let i = 0; i < drones_data.length; i++) {
      const drone = drones_data[i];

      const homeBase = drone.HomeStation;
      const destination = drone.PairedStation;
      let homeIndex = 0;
      let destIndex = 0;

      for (let index = 0; index < droneStaions.length; index++) {
        const station = droneStaions[index];
        if (station.Name === homeBase) {
          homeIndex = index;
        }
        if (station.Name === destination) {
          destIndex = index;
        }
      }

      tmp.push([droneStaions[homeIndex], droneStaions[destIndex]]);

      // tmp.push([timetable[foundIndex]]);
    }

    setDrStation_PrevNext(tmp);
  };

  useEffect(() => {
    if (drones && drones.length > 0) handlePrepareTStationsForUI(drones);
    // console.log(trains);
  }, [drones]);

  useEffect(() => {
    loadData();
  }, []);

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
            <Grid>
              {/* <IconButton size="lg">
                                <GiCargoCrate size="22px" color="rgba(255,255,255,0.1)" />
                            </IconButton>  */}
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {drones && drStation_PrevNext && drStation_PrevNext.length > 0 ? (
        <>
          {drones.map((drone: any, index: number) => {
            let percentDone = 0;
            let top = 0;
            let bottom = 0;
            let totalLength = 0;

            if (
              drStation_PrevNext[index].length > 0 &&
              drStation_PrevNext[index][0] &&
              drStation_PrevNext[index][1]
            ) {
              top = Math.floor(
                ((drStation_PrevNext[index][0].location.x - drone.location.x) **
                  2 +
                  (drStation_PrevNext[index][0].location.y -
                    drone.location.y) **
                    2) **
                  0.5 /
                  100,
              );
              bottom = Math.floor(
                ((drStation_PrevNext[index][1].location.x - drone.location.x) **
                  2 +
                  (drStation_PrevNext[index][1].location.y -
                    drone.location.y) **
                    2) **
                  0.5 /
                  100,
              );

              totalLength = Math.floor(
                ((drStation_PrevNext[index][0].location.x -
                  drStation_PrevNext[index][1].location.x) **
                  2 +
                  (drStation_PrevNext[index][0].location.y -
                    drStation_PrevNext[index][1].location.y) **
                    2) **
                  0.5 /
                  100,
              );

              percentDone = (top / totalLength) * 100;
            }

            if (drStation_PrevNext[index][0] && drStation_PrevNext[index][1]) {
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
                    {drStation_PrevNext[index][0] ? (
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
                            alt="image"
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
                            {drStation_PrevNext[index][0].DroneStatus ===
                              "No Drones" && (
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
                            {drStation_PrevNext[index][0].DroneStatus ===
                              "Cannot Unload" && (
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
                            {drStation_PrevNext[index][0].DroneStatus ===
                              "Docked" && (
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
                            {drStation_PrevNext[index][0].DroneStatus ===
                              "Takeoff" && (
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
                    ) : (
                      <></>
                    )}

                    {drStation_PrevNext[index][1] ? (
                      <Card
                        variant="outlined"
                        sx={{
                          position: "relative",
                          height: "110px",
                          paddingBottom: "0px !important",
                        }}
                      >
                        <CardContent>
                          {/* <BsLink45Deg size="28px"/> */}
                          <img
                            src="./assets/Buildings/IconDesc_DronePort_256.png"
                            alt="image"
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
                            {drStation_PrevNext[index][1].DroneStatus ===
                              "No Drones" && (
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
                            {drStation_PrevNext[index][1].DroneStatus ===
                              "Cannot Unload" && (
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
                            {drStation_PrevNext[index][1].DroneStatus ===
                              "Docked" && (
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
                            {drStation_PrevNext[index][1].DroneStatus ===
                              "Takeoff" && (
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
                    ) : (
                      <></>
                    )}
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
                        {/* <Grid container spacing={2} sx={{marginBottom: '10px'}}>
                                                <Grid>
                                                    
                                                </Grid>
                                                <Grid xs>
                                                    <Box sx={{position: 'relative'}}>
                                                        <Grid container spacing={1} display={'flex'} alignItems={'center'}>
                                                            <Grid xs>
                                                                <Typography level="h6">{drone.VehicleType} #{drone.ID}</Typography>
                                                            </Grid>
                                                            <Grid>
                                                            </Grid>
    
                                                            <Grid>
                                                                </Grid>
                                                        </Grid>
                                                    </Box>
                                                </Grid>
                                            </Grid> */}
                        <Stack
                          alignItems="center"
                          sx={{ marginBottom: "15px" }}
                        >
                          <img
                            src="./assets/Vehicles/IconDesc_Drone_256.png"
                            alt="image"
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
                              {parseFloat(drone.FlyingSpeed) < 0
                                ? parseInt(drone.FlyingSpeed) * -1
                                : parseInt(drone.FlyingSpeed)}{" "}
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
                              {drStation_PrevNext[index][0].AvgRndTrip}
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
                              {drStation_PrevNext[index][0].LatestRndTrip}
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
                              {drStation_PrevNext[
                                index
                              ][0].EstBatteryRate.toFixed(2)}{" "}
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
                              {drStation_PrevNext[
                                index
                              ][0].EstTransRate.toFixed(2)}{" "}
                              stacks
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
                          alt="image"
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
                            {parseFloat(drone.FlyingSpeed) < 0
                              ? parseInt(drone.FlyingSpeed) * -1
                              : parseInt(drone.FlyingSpeed)}{" "}
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
