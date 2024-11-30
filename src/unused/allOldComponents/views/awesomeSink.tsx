import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Skeleton,
  Stack,
  Typography,
} from "@mui/joy";
import React, { useEffect, useRef } from "react";

import { EndpointEnum } from "../../enums/endpoint.enum";
import { useAutoRefetch } from "../../hooks/useAutoRefetch";
import { useGetAwesomeSinkGraph } './useGetAwesomeSinkGraph'
import type { AwesomeSinkDto } from "../../types/apis/dataTransferObject/awesomeSinkDto";
import type { AwesomeSinkFm } from "../../types/apis/frontModel/awesomeSinkFm";

export const AwesomeSink: React.FC = () => {
  const awesomeSinkRef = useRef<HTMLDivElement>(null);

  const { data: sinkResource } = useAutoRefetch<
    AwesomeSinkDto[],
    AwesomeSinkFm[]
  >(EndpointEnum.AWESOME_SINK_RESOURCE);

  const { data: sinkExploration } = useAutoRefetch<
    AwesomeSinkDto[],
    AwesomeSinkFm[]
  >(EndpointEnum.AWESOME_SINK_EXPLORATION);

  const { sinkChart } = useGetAwesomeSinkGraph({
    sinkResource,
    sinkExploration,
  });

  useEffect(() => {
    if (!awesomeSinkRef.current || !sinkChart) return undefined;
    sinkChart.remove();
    awesomeSinkRef.current.appendChild(sinkChart);
    return () => sinkChart.remove();
  }, [sinkChart]);

  if (sinkExploration && sinkResource) {
    return (
      <Container>
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
                      src="/assets/Building/AWESOME_Sink.png"
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
                    <Typography level="body-md">Total Points</Typography>
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
                    "overflow": "visible",
                  }}
                >
                  <div
                    style={{
                      overflow: "visible",
                      width: "100%",
                      color: "white",
                    }}
                    ref={awesomeSinkRef}
                  />
                </Box>
              </Stack>
            </Box>
          </CardContent>
        </Card>

        <Grid
          container
          padding={0}
          spacing={2}
        >
          <Grid xs={4}>
            <Card variant="outlined">
              <CardContent>
                <Typography level="h4">
                  {new Intl.NumberFormat("en-US", {
                    style: "decimal",
                  }).format(sinkResource[0].nextCouponsRemainingPoints)}
                </Typography>
                <Typography level="body-md">Next Coupon in</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={4}>
            <Card variant="outlined">
              <CardContent>
                <Typography level="h4">
                  {new Intl.NumberFormat("en-US", {
                    style: "decimal",
                  }).format(sinkResource[0].progressionPercent * 100)}{" "}
                  %
                </Typography>
                <Typography level="body-md">Next Coupon (%)</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={4}>
            <Card variant="outlined">
              <CardContent>
                <Typography level="h4">
                  {new Intl.NumberFormat("en-US", {
                    style: "decimal",
                  }).format(sinkResource[0].couponNumber)}
                </Typography>
                <Typography level="body-md">Total Coupon(s)</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    );
  }

  return (
    <Container>
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
                    variant="rectangular"
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
                    variant="rectangular"
                    sx={{ marginBottom: "10px" }}
                    width="80px"
                    height="40px"
                  />
                  <Skeleton
                    sx={{ marginBottom: "10px" }}
                    width="120px"
                    variant="text"
                  />
                </Grid>
              </Grid>

              <Skeleton
                variant="rectangular"
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
        spacing={2}
      >
        <Grid xs={4}>
          <Card variant="outlined">
            <CardContent>
              <Skeleton
                variant="rectangular"
                sx={{ marginBottom: "10px" }}
                width="80px"
                height="40px"
              />
              <Skeleton
                variant="text"
                width="120px"
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={4}>
          <Card variant="outlined">
            <CardContent>
              <Skeleton
                variant="rectangular"
                sx={{ marginBottom: "10px" }}
                width="80px"
                height="40px"
              />
              <Skeleton
                variant="text"
                width="120px"
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={4}>
          <Card variant="outlined">
            <CardContent>
              <Skeleton
                variant="rectangular"
                sx={{ marginBottom: "10px" }}
                width="80px"
                height="40px"
              />
              <Skeleton
                variant="text"
                width="120px"
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};
