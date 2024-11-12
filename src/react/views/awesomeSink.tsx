import { Box, Card, CardContent, Grid, Stack, Typography } from "@mui/joy";
import { Skeleton } from "@mui/material";
import * as Plot from "@observablehq/plot";
import React, { useCallback, useEffect, useState } from "react";

import { EndpointEnum } from "../../enums/endpoint.enum";
import { useAutoRefetch } from "../../hooks/useAutoRefetch";
import type { AwesomeSinkDto } from "../../types/apis/dataTransferObject/awesomeSinkDto";
import type { AwesomeSinkFm } from "../../types/apis/frontModel/awesomeSinkFm";
import { PlotFigure } from "../components/plotWrapper";

type Props = {
  display: "resource" | "exploration" | "both";
};

export const AwesomeSink: React.FC<Props> = ({ display }) => {
  const { data: sinkExploration } = useAutoRefetch<
    AwesomeSinkDto[],
    AwesomeSinkFm[]
  >(
    EndpointEnum.AWESOME_SINK_EXPLORATION,
    ["resource", "both"].includes(display),
  );

  const { data: sinkResource } = useAutoRefetch<
    AwesomeSinkDto[],
    AwesomeSinkFm[]
  >(
    EndpointEnum.AWESOME_SINK_RESOURCE,
    ["exploration", "both"].includes(display),
  );

  const [sinkExplorationGraphData, setSinkExplorationGraphData] =
    useState<{ index: number; value: number }[]>();
  const [sinkResourceGraphData, setSinkResourceGraphData] =
    useState<{ index: number; value: number }[]>();

  const updateData = useCallback(() => {
    setSinkExplorationGraphData(
      sinkExploration?.[0].graphPoints.map((points, index) => ({
        index,
        value: points,
      })),
    );
    setSinkResourceGraphData(
      sinkResource?.[0].graphPoints.map((points, index) => ({
        index,
        value: points,
      })),
    );
  }, [sinkExploration, sinkResource]);

  useEffect(() => {
    updateData();
  }, [sinkExploration, sinkResource, updateData]);

  if (
    sinkExploration &&
    sinkResource &&
    sinkExplorationGraphData &&
    sinkResourceGraphData
  ) {
    return (
      <>
        {["resource", "both"].includes(display) && (
          <>
            <Card
              variant="outlined"
              sx={{ marginBottom: "20px" }}
            >
              <CardContent>
                <Box>
                  <Stack>
                    <Grid
                      container
                      spacing={2}
                      padding={0}
                    >
                      <Grid xs>
                        <img
                          src="./assets/Building/AWESOME_Sink.png"
                          alt="Satisfactory Awesome sink illustration"
                          style={{ height: "70px", width: "70px" }}
                        />
                      </Grid>
                      <Grid
                        display="flex"
                        alignItems="flex-end"
                        flexDirection="column"
                      >
                        <Typography level="h4">
                          {new Intl.NumberFormat("en-US", {
                            style: "decimal",
                          }).format(sinkResource[0].totalPoints)}
                        </Typography>
                        <Typography level="body2">Total Points</Typography>
                      </Grid>
                    </Grid>

                    <Box
                      sx={{
                        "& svg": {
                          background: "transparent",
                        },
                        "& svg g text": {
                          fontSize: "0.9rem",
                          padding: "5px",
                          backgroundColor: "#000",
                        },
                        "color": "white",
                        "padding": "10px",
                      }}
                    >
                      <PlotFigure
                        options={{
                          // width: (dimensions.width-40),
                          height: 300,
                          inset: 40,
                          y: {
                            grid: true,
                            label: "Points per minute",
                          },
                          x: {
                            line: true,
                            label: "Last 10",
                          },
                          color: {
                            domain: [1, 0, -1], // Down - Equal - Up
                            range: ["#4daf4a", "#999999", "#e41a1c"], // Red - Gray - Green
                          },
                          marks: [
                            Plot.line(sinkResourceGraphData, {
                              x: "Index",
                              y: "value",
                              stroke: "rgba(255,255,255,0.4)",
                              strokeWidth: 2,
                              // curve: "catmull-rom",
                              marker: "circle",
                              // markerSize: 5,
                              // title: (d:any) => `AAPL \n High: ${d.High}` // \n makes a new line
                            }),

                            Plot.text(sinkResourceGraphData, {
                              x: "Index",
                              y: "value",
                              text: (d: { value: number }) =>
                                `${new Intl.NumberFormat("en-US", { style: "decimal" }).format(d.value)}`,
                              dy: 20,
                            }),
                          ],
                        }}
                      />
                    </Box>
                  </Stack>
                </Box>
              </CardContent>
            </Card>

            <Grid
              container
              padding={0}
            >
              <Grid xs={4}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography level="h5">
                      {new Intl.NumberFormat("en-US", {
                        style: "decimal",
                      }).format(sinkResource[0].nextCouponsRemainingPoints)}
                    </Typography>
                    <Typography level="body2">Next Coupon in</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid xs={4}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography level="h5">
                      {new Intl.NumberFormat("en-US", {
                        style: "decimal",
                      }).format(sinkResource[0].progressionPercent)}{" "}
                      %
                    </Typography>
                    <Typography level="body2">Next Coupon (%)</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid xs={4}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography level="h5">
                      {new Intl.NumberFormat("en-US", {
                        style: "decimal",
                      }).format(sinkResource[0].couponNumber)}
                    </Typography>
                    <Typography level="body2">Total Coupon(s)</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </>
        )}
        {["exploration", "both"].includes(display) && (
          <>
            <Card
              variant="outlined"
              sx={{ marginBottom: "20px" }}
            >
              <CardContent>
                <Box>
                  <Stack>
                    <Grid
                      container
                      spacing={2}
                      padding={0}
                    >
                      <Grid xs>
                        <img
                          src="./assets/Building/AWESOME_Sink.png"
                          alt="Satisfactory Awesome sink illustration"
                          style={{ height: "70px", width: "70px" }}
                        />
                      </Grid>
                      <Grid
                        display="flex"
                        alignItems="flex-end"
                        flexDirection="column"
                      >
                        <Typography level="h4">
                          {new Intl.NumberFormat("en-US", {
                            style: "decimal",
                          }).format(sinkExploration[0].totalPoints)}
                        </Typography>
                        <Typography level="body2">Total Points</Typography>
                      </Grid>
                    </Grid>

                    <Box
                      sx={{
                        "& svg": {
                          background: "transparent",
                        },
                        "& svg g text": {
                          fontSize: "0.9rem",
                          padding: "5px",
                          backgroundColor: "#000",
                        },
                        "color": "white",
                        "padding": "10px",
                      }}
                    >
                      <PlotFigure
                        options={{
                          // width: (dimensions.width-40),
                          height: 300,
                          inset: 40,
                          y: {
                            grid: true,
                            label: "Points per minute",
                          },
                          x: {
                            line: true,
                            label: "Last 10",
                          },
                          color: {
                            domain: [1, 0, -1], // Down - Equal - Up
                            range: ["#4daf4a", "#999999", "#e41a1c"], // Red - Gray - Green
                          },
                          marks: [
                            Plot.line(sinkExplorationGraphData, {
                              x: "Index",
                              y: "value",
                              stroke: "rgba(255,255,255,0.4)",
                              strokeWidth: 2,
                              // curve: "catmull-rom",
                              marker: "circle",
                              // markerSize: 5,
                              // title: (d:any) => `AAPL \n High: ${d.High}` // \n makes a new line
                            }),

                            Plot.text(sinkExplorationGraphData, {
                              x: "Index",
                              y: "value",
                              text: (d: { value: number }) =>
                                `${new Intl.NumberFormat("en-US", { style: "decimal" }).format(d.value)}`,
                              dy: 20,
                            }),
                          ],
                        }}
                      />
                    </Box>
                  </Stack>
                </Box>
              </CardContent>
            </Card>

            <Grid
              container
              padding={0}
            >
              <Grid xs={4}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography level="h5">
                      {new Intl.NumberFormat("en-US", {
                        style: "decimal",
                      }).format(sinkExploration[0].nextCouponsRemainingPoints)}
                    </Typography>
                    <Typography level="body2">Next Coupon in</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid xs={4}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography level="h5">
                      {new Intl.NumberFormat("en-US", {
                        style: "decimal",
                      }).format(sinkExploration[0].progressionPercent)}{" "}
                      %
                    </Typography>
                    <Typography level="body2">Next Coupon (%)</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid xs={4}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography level="h5">
                      {new Intl.NumberFormat("en-US", {
                        style: "decimal",
                      }).format(sinkExploration[0].couponNumber)}
                    </Typography>
                    <Typography level="body2">Total Coupon(s)</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </>
        )}
      </>
    );
  }

  return (
    <>
      {Array(display === "both" ? 2 : 1)
        .fill(crypto.randomUUID())
        .map((uuid: string) => (
          <React.Fragment key={uuid}>
            <Card
              variant="outlined"
              sx={{ marginBottom: "20px", opacity: 0.5 }}
            >
              <CardContent>
                <Box>
                  <Stack>
                    <Grid
                      container
                      spacing={2}
                      padding={0}
                      sx={{ marginBottom: "20px" }}
                    >
                      <Grid xs>
                        <Skeleton
                          variant="circular"
                          sx={{}}
                          width="70px"
                          height="70px"
                        />

                        <Skeleton
                          variant="rounded"
                          sx={{ marginTop: "20px", marginBottom: "10px" }}
                          width="120px"
                          height="20px"
                        />
                      </Grid>
                      <Grid
                        display="flex"
                        alignItems="flex-end"
                        flexDirection="column"
                      >
                        <Skeleton
                          variant="rounded"
                          sx={{ marginBottom: "10px" }}
                          width="80px"
                          height="40px"
                        />
                        <Skeleton
                          sx={{ marginBottom: "10px" }}
                          width="120px"
                        />
                      </Grid>
                    </Grid>

                    <Skeleton
                      variant="rounded"
                      sx={{ width: "100%" }}
                      height="140px"
                    />
                  </Stack>
                </Box>
              </CardContent>
            </Card>

            <Grid
              container
              padding={0}
              sx={{ opacity: 0.5 }}
            >
              <Grid xs={4}>
                <Card variant="outlined">
                  <CardContent>
                    <Skeleton
                      variant="rounded"
                      sx={{ marginBottom: "10px" }}
                      width="80px"
                      height="40px"
                    />
                    <Skeleton width="120px" />
                  </CardContent>
                </Card>
              </Grid>
              <Grid xs={4}>
                <Card variant="outlined">
                  <CardContent>
                    <Skeleton
                      variant="rounded"
                      sx={{ marginBottom: "10px" }}
                      width="80px"
                      height="40px"
                    />
                    <Skeleton width="120px" />
                  </CardContent>
                </Card>
              </Grid>
              <Grid xs={4}>
                <Card variant="outlined">
                  <CardContent>
                    <Skeleton
                      variant="rounded"
                      sx={{ marginBottom: "10px" }}
                      width="80px"
                      height="40px"
                    />
                    <Skeleton width="120px" />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </React.Fragment>
        ))}
    </>
  );
};
