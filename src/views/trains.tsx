import {
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/joy";
import { Skeleton } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

import { useLocalStorage } from "../hooks/localStorage";
import { defaultSettingsData } from "./settings";

export const Trains: React.FC = (props) => {
  const [doLoadData, setLoadData] = useState(true);
  const [trains, setTrains] = useState<undefined | any>(undefined);
  const [trainstaions, setTrainstations] = useState<undefined | any>(undefined);

  const [tStation_PrevNext, setTStation_PrevNext] = useState<undefined | any[]>(
    undefined,
  );
  const [settings, _] = useLocalStorage("rmd_settings", defaultSettingsData);

  const loadData = async () => {
    if (doLoadData) {
      const response = await axios.get(
        `http://${settings.ip}:${settings.port}/getTrains`,
      );
      const response_trainstaions = await axios.get(
        `http://${settings.ip}:${settings.port}/getTrainStation`,
      );

      // // console.info(trainsData);
      setTrains(response.data);
      setTrainstations(response_trainstaions.data);

      setTimeout(() => {
        loadData();
      }, settings.interval);
    }
  };

  const handlePrepareTStationsForUI = (trains_data: Record<string, any>[]) => {
    const tmp: any[] = [];

    for (let i = 0; i < trains_data.length; i++) {
      const train = trains_data[i];
      const timetable: Record<string, any>[] = train.TimeTable;

      if (timetable.length > 0) {
        let foundIndex = 0;
        for (let index = 0; index < timetable.length; index++) {
          const station = timetable[index];
          if (station.StationName === train.TrainStation) {
            foundIndex = index;
          }
        }

        for (let index = 0; index < trainstaions.length; index++) {
          const station = trainstaions[index];
          if (station.Name === timetable[foundIndex].StationName) {
            tmp.push([station]);
          }
        }

        for (let index = 0; index < trainstaions.length; index++) {
          const station = trainstaions[index];
          if (foundIndex === 0) {
            if (station.Name === timetable[timetable.length - 1].StationName) {
              tmp[tmp.length - 1].unshift(station);
            }
          } else if (station.Name === timetable[foundIndex - 1].StationName) {
            tmp[tmp.length - 1].unshift(station);
          }
        }
      } else {
        tmp.push([]);
      }

      // tmp.push([timetable[foundIndex]]);
      setTStation_PrevNext(tmp);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (trains && trains.length > 0) handlePrepareTStationsForUI(trains);
    // console.log(trains);
  }, [trains]);

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
                level="h2"
                marginBottom="5px"
                fontWeight={600}
              >
                Trains
              </Typography>
            </Grid>
            <Grid>
              {/* <IconButton size="sm">
                                <GiCargoCrate size="22px" color="rgba(255,255,255,0.1)" />
                            </IconButton>  */}
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {trains && tStation_PrevNext ? (
        <>
          {trains.map((train: any, index: number) => {
            let percentDone = 0;
            let left = 0;
            let right = 0;
            let totalLength = 0;
            if (tStation_PrevNext[index].length > 0) {
              left = Math.floor(
                ((tStation_PrevNext[index][0].location.x - train.location.x) **
                  2 +
                  (tStation_PrevNext[index][0].location.y - train.location.y) **
                    2) **
                  0.5 /
                  100,
              );
              right = Math.floor(
                ((tStation_PrevNext[index][1].location.x - train.location.x) **
                  2 +
                  (tStation_PrevNext[index][1].location.y - train.location.y) **
                    2) **
                  0.5 /
                  100,
              );

              totalLength = Math.floor(
                ((tStation_PrevNext[index][0].location.x -
                  tStation_PrevNext[index][1].location.x) **
                  2 +
                  (tStation_PrevNext[index][0].location.y -
                    tStation_PrevNext[index][1].location.y) **
                    2) **
                  0.5 /
                  100,
              );

              percentDone = (left / totalLength) * 100;
            }
            // const _percentDone = percentDone*100;
            // console.log(index+" -> "+_percentDone);
            return (
              <Grid
                container
                spacing={2}
                sx={{ marginY: "30px" }}
                display="flex"
                alignItems="center"
              >
                <Grid xs={3}>
                  <Card
                    variant="outlined"
                    sx={{ position: "relative" }}
                  >
                    {tStation_PrevNext[index].length > 0 ? (
                      <CardContent>
                        {/* <GiCargoCrate size="36px"/> */}

                        <Stack alignItems="center">
                          <img
                            src="./assets/Buildings/Train Station.png"
                            alt="image"
                            style={{ height: "70px", width: "70px" }}
                          />
                          <Typography
                            level="h6"
                            sx={{ marginBottom: "5px", marginTop: "10px" }}
                          >
                            {tStation_PrevNext[index][0].Name}
                          </Typography>
                          <Typography
                            level="body3"
                            sx={{ marginBottom: "20px" }}
                          >
                            Departure Station
                          </Typography>
                        </Stack>

                        <Grid
                          container
                          display="flex"
                          alignItems="center"
                        >
                          <Grid xs>
                            <Typography sx={{ color: "rgba(255,255,255,0.5)" }}>
                              Current State
                            </Typography>
                          </Grid>
                          <Grid>
                            {tStation_PrevNext[index][0].LoadingStatus ===
                              "Idle" && (
                              <Chip
                                color="success"
                                size="sm"
                                variant="outlined"
                                sx={{
                                  backgroundColor: "rgba(33, 150, 83, 0.1)",
                                  borderColor: "rgba(33, 150, 83, 0.1)",
                                }}
                              >
                                Platform Idle
                              </Chip>
                            )}
                            {tStation_PrevNext[index][0].LoadingStatus ===
                              "Loading" && (
                              <Chip
                                color="danger"
                                size="sm"
                                variant="outlined"
                                sx={{
                                  backgroundColor: "rgba(235, 87, 87, 0.12)",
                                  borderColor: "rgba(235, 87, 87, 0.12)",
                                }}
                              >
                                Loading ...
                              </Chip>
                            )}
                            {tStation_PrevNext[index][0].LoadingStatus ===
                              "Unloading" && (
                              <Chip
                                color="danger"
                                size="sm"
                                variant="outlined"
                                sx={{
                                  backgroundColor: "rgba(235, 87, 87, 0.12)",
                                  borderColor: "rgba(235, 87, 87, 0.12)",
                                }}
                              >
                                Unloading ...
                              </Chip>
                            )}
                          </Grid>
                        </Grid>
                        <Grid container>
                          <Grid xs>
                            <Typography sx={{ color: "rgba(255,255,255,0.5)" }}>
                              Distance to train
                            </Typography>
                          </Grid>
                          <Grid>
                            {/* {tStation_PrevNext[index][0].location.x}
                                                        {tStation_PrevNext[index][0].location.y}
                                                        {tStation_PrevNext[index][0].location.z}
                                                        {train.location.x}
                                                        {train.location.y}
                                                        {train.location.z} */}
                            {left} m
                          </Grid>
                        </Grid>
                      </CardContent>
                    ) : (
                      <CardContent>
                        <Typography level="body2">
                          No Timetable connected
                        </Typography>
                      </CardContent>
                    )}
                  </Card>
                </Grid>

                <Grid xs={1} />

                <Grid xs={4}>
                  <Card
                    variant="outlined"
                    sx={{ position: "relative", overflow: "hidden" }}
                  >
                    <CardContent>
                      <Stack alignItems="center">
                        <img
                          src="./assets/Vehicles/Locomotive_256.png"
                          alt="image"
                          style={{ height: "80px", width: "80px" }}
                        />
                        <Typography
                          level="h6"
                          sx={{ marginBottom: "5px", marginTop: "10px" }}
                        >
                          {train.Name}
                        </Typography>
                        <Grid
                          container
                          sx={{ marginBottom: "15px" }}
                        >
                          <Grid>
                            {!train.Derailed ? (
                              <Chip
                                color="success"
                                size="sm"
                                variant="outlined"
                                sx={{
                                  backgroundColor: "rgba(33, 150, 83, 0.1)",
                                  borderColor: "rgba(33, 150, 83, 0.1)",
                                }}
                              >
                                No Problems
                              </Chip>
                            ) : (
                              <Chip
                                color="danger"
                                size="sm"
                                variant="outlined"
                                sx={{
                                  backgroundColor: "rgba(235, 87, 87, 0.12)",
                                  borderColor: "rgba(235, 87, 87, 0.12)",
                                }}
                              >
                                Derailed
                              </Chip>
                            )}
                          </Grid>

                          <Grid>
                            {train.Status === "Self-Driving" ? (
                              <Chip
                                color="info"
                                size="sm"
                                variant="outlined"
                                sx={{
                                  backgroundColor: "rgba(47, 128, 237, 0.1)",
                                  borderColor: "rgba(47, 128, 237, 0.1)",
                                }}
                              >
                                Autopilot
                              </Chip>
                            ) : (
                              <Chip
                                color="neutral"
                                size="sm"
                                variant="outlined"
                                sx={{
                                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                                  borderColor: "rgba(255, 255, 255, 0.1)",
                                }}
                              >
                                Manual
                              </Chip>
                            )}
                          </Grid>
                        </Grid>
                      </Stack>

                      <Grid container>
                        <Grid xs>
                          <Typography sx={{ color: "rgba(255,255,255,0.5)" }}>
                            Speed
                          </Typography>
                        </Grid>
                        <Grid>
                          <Typography sx={{ color: "rgba(255,255,255,0.9)" }}>
                            {parseFloat(train.ForwardSpeed) < 0
                              ? parseInt(train.ForwardSpeed) * -1
                              : parseInt(train.ForwardSpeed)}{" "}
                            km/h
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid container>
                        <Grid xs>
                          <Typography sx={{ color: "rgba(255,255,255,0.5)" }}>
                            Throttle
                          </Typography>
                        </Grid>
                        <Grid>
                          <Typography sx={{ color: "rgba(255,255,255,0.9)" }}>
                            {train.ThrottlePercent.toFixed(2)} %
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid container>
                        <Grid xs>
                          <Typography sx={{ color: "rgba(255,255,255,0.5)" }}>
                            Power
                          </Typography>
                        </Grid>
                        <Grid>
                          <Typography sx={{ color: "rgba(255,255,255,0.9)" }}>
                            {train.PowerConsumed} MW
                          </Typography>
                        </Grid>
                      </Grid>
                      <LinearProgress
                        color="primary"
                        determinate
                        variant="soft"
                        value={percentDone}
                        sx={{
                          position: "absolute",
                          bottom: "0px",
                          left: "0px",
                          right: "0px",
                        }}
                      />
                    </CardContent>
                  </Card>
                </Grid>

                <Grid xs={1} />

                <Grid xs={3}>
                  <Card
                    variant="outlined"
                    sx={{ position: "relative" }}
                  >
                    {tStation_PrevNext[index].length > 0 ? (
                      <CardContent>
                        <Stack alignItems="center">
                          <img
                            src="./assets/Buildings/Train Station.png"
                            alt="image"
                            style={{ height: "70px", width: "70px" }}
                          />
                          <Typography
                            level="h6"
                            sx={{ marginBottom: "5px", marginTop: "10px" }}
                          >
                            {tStation_PrevNext[index][1].Name}
                          </Typography>
                          <Typography
                            level="body3"
                            sx={{ marginBottom: "20px" }}
                          >
                            Destination Station
                          </Typography>
                        </Stack>

                        <Grid
                          container
                          display="flex"
                          alignItems="center"
                        >
                          <Grid xs>
                            <Typography sx={{ color: "rgba(255,255,255,0.5)" }}>
                              Status
                            </Typography>
                          </Grid>
                          <Grid>
                            {tStation_PrevNext[index][1].LoadingStatus ===
                              "Idle" && (
                              <Chip
                                color="success"
                                size="sm"
                                variant="outlined"
                                sx={{
                                  backgroundColor: "rgba(33, 150, 83, 0.1)",
                                  borderColor: "rgba(33, 150, 83, 0.1)",
                                }}
                              >
                                Platform Idle
                              </Chip>
                            )}
                            {tStation_PrevNext[index][1].LoadingStatus ===
                              "Loading" && (
                              <Chip
                                color="danger"
                                size="sm"
                                variant="outlined"
                                sx={{
                                  backgroundColor: "rgba(235, 87, 87, 0.12)",
                                  borderColor: "rgba(235, 87, 87, 0.12)",
                                }}
                              >
                                Loading ...
                              </Chip>
                            )}
                            {tStation_PrevNext[index][1].LoadingStatus ===
                              "Unloading" && (
                              <Chip
                                color="danger"
                                size="sm"
                                variant="outlined"
                                sx={{
                                  backgroundColor: "rgba(235, 87, 87, 0.12)",
                                  borderColor: "rgba(235, 87, 87, 0.12)",
                                }}
                              >
                                Unloading ...
                              </Chip>
                            )}
                          </Grid>
                        </Grid>
                        <Grid container>
                          <Grid xs>
                            <Typography sx={{ color: "rgba(255,255,255,0.5)" }}>
                              Distance to train
                            </Typography>
                          </Grid>
                          <Grid>{right} m</Grid>
                        </Grid>
                      </CardContent>
                    ) : (
                      <CardContent>
                        <Typography level="body2">
                          No Timetable connected
                        </Typography>
                      </CardContent>
                    )}
                  </Card>
                </Grid>
              </Grid>
            );
          })}
        </>
      ) : (
        <Grid
          container
          spacing={2}
          sx={{ marginY: "30px", opacity: 0.5 }}
          display="flex"
          alignItems="center"
        >
          <Grid xs={3}>
            <Card
              variant="outlined"
              sx={{ position: "relative" }}
            >
              <CardContent>
                <Stack alignItems="center">
                  <Skeleton
                    variant="circular"
                    width="70px"
                    height="70px"
                    sx={{ marginTop: "10px" }}
                  />
                  <Skeleton
                    variant="rounded"
                    width="120px"
                    height="30px"
                    sx={{ marginY: "10px" }}
                  />
                  <Skeleton width="80px" />
                </Stack>

                <Grid
                  container
                  display="flex"
                  alignItems="center"
                >
                  <Grid xs>
                    <Typography sx={{ color: "rgba(255,255,255,0.5)" }}>
                      Status
                    </Typography>
                  </Grid>
                  <Grid>
                    <Skeleton width="60px" />
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid xs>
                    <Typography sx={{ color: "rgba(255,255,255,0.5)" }}>
                      Distance to train
                    </Typography>
                  </Grid>
                  <Grid>
                    <Skeleton width="40px" />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          <Grid xs={1} />

          <Grid xs={4}>
            <Card
              variant="outlined"
              sx={{ position: "relative", overflow: "hidden" }}
            >
              <CardContent>
                <Stack alignItems="center">
                  {/* <img src="./assets/Vehicles/Locomotive_256.png" alt="image" style={{height: '80px', width: '80px'}}></img> */}
                  <Skeleton
                    variant="circular"
                    width="80px"
                    height="80px"
                    sx={{ marginTop: "10px" }}
                  />
                  {/* <Typography level="h6" sx={{marginBottom: '5px', marginTop: '10px'}}>{train.TrainName}</Typography> */}
                  <Grid
                    container
                    sx={{ marginBottom: "15px", marginTop: "10px" }}
                  >
                    <Grid>
                      <Skeleton width="60px" />
                    </Grid>

                    <Grid>
                      <Skeleton width="75px" />
                    </Grid>
                  </Grid>
                </Stack>

                <Grid container>
                  <Grid xs>
                    <Typography sx={{ color: "rgba(255,255,255,0.5)" }}>
                      Speed
                    </Typography>
                  </Grid>
                  <Grid>
                    <Skeleton width="70px" />
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid xs>
                    <Typography sx={{ color: "rgba(255,255,255,0.5)" }}>
                      Throttle
                    </Typography>
                  </Grid>
                  <Grid>
                    <Skeleton width="80px" />
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid xs>
                    <Typography sx={{ color: "rgba(255,255,255,0.5)" }}>
                      Power
                    </Typography>
                  </Grid>
                  <Grid>
                    <Skeleton width="50px" />
                  </Grid>
                </Grid>
                {/* <LinearProgress color="primary" determinate variant="soft" value={percentDone} sx={{position: 'absolute', bottom: '0px', left: '0px', right: '0px'}} /> */}
              </CardContent>
            </Card>
          </Grid>

          <Grid xs={1} />

          <Grid xs={3}>
            <Card
              variant="outlined"
              sx={{ position: "relative" }}
            >
              <CardContent>
                <Stack alignItems="center">
                  <Skeleton
                    variant="circular"
                    width="70px"
                    height="70px"
                    sx={{ marginTop: "10px" }}
                  />
                  <Skeleton
                    variant="rounded"
                    width="120px"
                    height="30px"
                    sx={{ marginY: "10px" }}
                  />
                  <Skeleton width="80px" />
                </Stack>

                <Grid
                  container
                  display="flex"
                  alignItems="center"
                >
                  <Grid xs>
                    <Typography sx={{ color: "rgba(255,255,255,0.5)" }}>
                      Status
                    </Typography>
                  </Grid>
                  <Grid>
                    <Skeleton width="60px" />
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid xs>
                    <Typography sx={{ color: "rgba(255,255,255,0.5)" }}>
                      Distance to train
                    </Typography>
                  </Grid>
                  <Grid>
                    <Skeleton width="40px" />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};
