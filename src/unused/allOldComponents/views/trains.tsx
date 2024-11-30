import {
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  IconButton,
  LinearProgress,
  Skeleton,
  Stack,
  Typography,
} from "@mui/joy";
import React, { useCallback, useEffect, useState } from "react";
import { GiCargoCrate } from "react-icons/gi";

import { EndpointEnum } from "../../enums/endpoint.enum";
import { TrainStationLoadingStatusEnum } from "../../enums/trainStationLoadingStatus.enum";
import { TrainStatusEnum } from "../../enums/trainStatus.enum";
import { useAutoRefetch } from "../../hooks/useAutoRefetch";
import type { TrainsDto } from "../../types/apis/dataTransferObject/trainsDto";
import type { TrainStationDto } from "../../types/apis/dataTransferObject/trainStationDto";
import type { TrainFm } from "../../types/apis/frontModel/trainFm";
import type { TrainStationFm } from "../../types/apis/frontModel/trainStationFm";

// TODO Type used only in this file but move it could be good
type TrainStationStep = Record<
  string,
  { previousStation: TrainStationFm; nextStation: TrainStationFm }
>;

export const Trains: React.FC = () => {
  const { data: trains } = useAutoRefetch<TrainsDto[], TrainFm[]>(
    EndpointEnum.TRAIN,
  );
  const { data: trainStations } = useAutoRefetch<
    TrainStationDto[],
    TrainStationFm[]
  >(EndpointEnum.TRAIN_STATION);

  const [trainStationsStep, setTrainStationsStep] =
    useState<TrainStationStep>();

  const handlePrepareTrainStationsStep = useCallback(() => {
    let temporaryStationStep: TrainStationStep = {};
    if (!trainStations) return;
    trains?.forEach((train) => {
      const nextStationId = train.stationPlanning.findIndex(
        (station) => station === train.nextStation,
      );
      if (nextStationId === undefined) return;

      const previousStationId =
        (nextStationId - 1 + train.stationPlanning.length) %
        train.stationPlanning.length;

      const nextStation = trainStations.find(
        (el) => el.name === train.stationPlanning[nextStationId],
      );
      const previousStation = trainStations.find(
        (el) => el.name === train.stationPlanning[previousStationId],
      );

      if (nextStation && previousStation) {
        temporaryStationStep = {
          ...temporaryStationStep,
          [train.name]: {
            previousStation,
            nextStation,
          },
        };
      }
    });
    setTrainStationsStep(temporaryStationStep);
  }, [trains, trainStations]);

  useEffect(() => {
    handlePrepareTrainStationsStep();
  }, [handlePrepareTrainStationsStep]);

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
              <IconButton size="sm">
                <GiCargoCrate
                  size="22px"
                  color="rgba(255,255,255,0.1)"
                />
              </IconButton>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {trains && trainStationsStep ? (
        <>
          {trains.map((train) => {
            if (!trainStationsStep[train.name]) return null;
            const { previousStation, nextStation } =
              trainStationsStep[train.name];
            let percentDone = 0;
            let left = 0;
            let right = 0;
            let totalLength = 0;
            if (previousStation && nextStation) {
              left = Math.floor(
                ((previousStation.location.x - train.location.x) ** 2 +
                  (previousStation.location.y - train.location.y) ** 2) **
                  0.5 /
                  100,
              );
              right = Math.floor(
                ((nextStation.location.x - train.location.x) ** 2 +
                  (nextStation.location.y - train.location.y) ** 2) **
                  0.5 /
                  100,
              );

              totalLength = Math.floor(
                ((previousStation.location.x - nextStation.location.x) ** 2 +
                  (previousStation.location.y - nextStation.location.y) ** 2) **
                  0.5 /
                  100,
              );

              percentDone = (left / totalLength) * 100;
            }
            return (
              <Grid
                key={train.name}
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
                    {previousStation && nextStation ? (
                      <CardContent>
                        <GiCargoCrate size="36px" />

                        <Stack alignItems="center">
                          <img
                            src="/assets/Building/Train_Station.png"
                            alt="Satisfactory train station illustration"
                            style={{ height: "70px", width: "70px" }}
                          />
                          <Typography
                            level="h4"
                            sx={{ marginBottom: "5px", marginTop: "10px" }}
                          >
                            {previousStation.name}
                          </Typography>
                          <Typography
                            level="body-sm"
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
                            {previousStation.loadingStatus ===
                              TrainStationLoadingStatusEnum.Idle && (
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
                            {previousStation.loadingStatus ===
                              TrainStationLoadingStatusEnum.Loading && (
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
                            {previousStation.loadingStatus ===
                              TrainStationLoadingStatusEnum.Unloading && (
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
                          <Grid>{left} m</Grid>
                        </Grid>
                      </CardContent>
                    ) : (
                      <CardContent>
                        <Typography level="body-md">
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
                          src="/assets/Vehicle/Electric_Locomotive.png"
                          alt="Satisfactory train locomotive illustration"
                          style={{ height: "80px", width: "80px" }}
                        />
                        <Typography
                          level="h4"
                          sx={{ marginBottom: "5px", marginTop: "10px" }}
                        >
                          {train.name}
                        </Typography>
                        <Grid
                          container
                          sx={{ marginBottom: "15px" }}
                        >
                          <Grid>
                            {!train.isDerailed ? (
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
                            {train.status === TrainStatusEnum.Self_Driving ? (
                              <Chip
                                color="warning"
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
                            {/* Speed is in cm / sec, so / 100 => m / sec, so / 1000 => km / sec, so * 3600 => km / h */}
                            {(
                              ((train.forwardSpeed < 0
                                ? train.forwardSpeed * -1
                                : train.forwardSpeed) /
                                100 /
                                1000) *
                              3600
                            ).toFixed(1)}{" "}
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
                            {train.throttlePercent.toFixed(2)} %
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
                            {train.powerConsumed.toFixed(2)} MW
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
                    {previousStation && nextStation ? (
                      <CardContent>
                        <Stack alignItems="center">
                          <img
                            src="/assets/Building/Train_Station.png"
                            alt="Satisfactory train station illustration"
                            style={{ height: "70px", width: "70px" }}
                          />
                          <Typography
                            level="h4"
                            sx={{ marginBottom: "5px", marginTop: "10px" }}
                          >
                            {nextStation.name}
                          </Typography>
                          <Typography
                            level="body-sm"
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
                            {nextStation.loadingStatus ===
                              TrainStationLoadingStatusEnum.Idle && (
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
                            {nextStation.loadingStatus ===
                              TrainStationLoadingStatusEnum.Loading && (
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
                            {nextStation.loadingStatus ===
                              TrainStationLoadingStatusEnum.Unloading && (
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
                        <Typography level="body-md">
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
                    variant="rectangular"
                    width="120px"
                    height="30px"
                    sx={{ marginY: "10px" }}
                  />
                  <Skeleton
                    variant="text"
                    width="80px"
                  />
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
                    <Skeleton
                      variant="text"
                      width="60px"
                    />
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid xs>
                    <Typography sx={{ color: "rgba(255,255,255,0.5)" }}>
                      Distance to train
                    </Typography>
                  </Grid>
                  <Grid>
                    <Skeleton
                      variant="text"
                      width="40px"
                    />
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
                  <img
                    src="/assets/Vehicle/Electric_Locomotive.png"
                    alt="Satisfactory train locomotive illustration"
                    style={{ height: "80px", width: "80px" }}
                  />
                  <Grid
                    container
                    sx={{ marginBottom: "15px", marginTop: "10px" }}
                  >
                    <Grid>
                      <Skeleton
                        variant="text"
                        width="60px"
                      />
                    </Grid>

                    <Grid>
                      <Skeleton
                        variant="text"
                        width="75px"
                      />
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
                    <Skeleton
                      variant="text"
                      width="70px"
                    />
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid xs>
                    <Typography sx={{ color: "rgba(255,255,255,0.5)" }}>
                      Throttle
                    </Typography>
                  </Grid>
                  <Grid>
                    <Skeleton
                      variant="text"
                      width="80px"
                    />
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid xs>
                    <Typography sx={{ color: "rgba(255,255,255,0.5)" }}>
                      Power
                    </Typography>
                  </Grid>
                  <Grid>
                    <Skeleton
                      variant="text"
                      width="50px"
                    />
                  </Grid>
                </Grid>
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
                    variant="rectangular"
                    width="120px"
                    height="30px"
                    sx={{ marginY: "10px" }}
                  />
                  <Skeleton
                    variant="text"
                    width="80px"
                  />
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
                    <Skeleton
                      variant="text"
                      width="60px"
                    />
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid xs>
                    <Typography sx={{ color: "rgba(255,255,255,0.5)" }}>
                      Distance to train
                    </Typography>
                  </Grid>
                  <Grid>
                    <Skeleton
                      variant="text"
                      width="40px"
                    />
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
