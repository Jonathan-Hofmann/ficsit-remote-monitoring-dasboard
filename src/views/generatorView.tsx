import {
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/joy";
import { Skeleton } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsExclamationTriangleFill } from "react-icons/bs";
import { useSearchParams } from "react-router-dom";

import { fullRefs } from "../constants/refs";
import { useLocalStorage } from "../hooks/localStorage";
import { defaultSettingsData } from "./settings";

export const DetailedGeneratorView: React.FC = () => {
  const [params] = useSearchParams();
  const generator = params.get("generator");
  const generatorEndpoint = params.get("endpoint");
  const [GeneratorData, setGeneratorData] = useState<undefined | any>(
    undefined,
  );
  const [settings] = useLocalStorage("rmd_settings", defaultSettingsData);
  let intervalVar: any;

  const loadData = async (endpoint: string) => {
    intervalVar = setInterval(async () => {
      const response = await axios.get(
        `http://${settings.ip}:${settings.port}/${endpoint}`,
      );
      if (response.data[0]) {
        setGeneratorData(response.data);
      } else {
        setGeneratorData([]);
      }
    }, settings.interval);
  };

  useEffect(() => {
    if (generatorEndpoint) loadData(generatorEndpoint);
    return () => {
      clearInterval(intervalVar);
    };
  });

  function getImage(item: any): any {
    let value = null;
    if (fullRefs[item] != null) {
      value = `/assets/${fullRefs[item].category}/${item}.png`;
    }
    return value;
  }

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
                {generator}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {GeneratorData ? (
        <Grid
          container
          spacing={3}
        >
          {GeneratorData.map((_generator: any, index: any) => {
            return (
              <Grid
                xs={4}
                key={index}
              >
                <Card variant="outlined">
                  <CardContent>
                    <Grid
                      padding={0}
                      container
                    >
                      <Grid xs>
                        {_generator.IsFullSpeed === true ? (
                          <Chip
                            size="sm"
                            color="success"
                            variant="soft"
                          >
                            Producing ...
                          </Chip>
                        ) : (
                          <Chip
                            size="sm"
                            color="danger"
                            variant="soft"
                            startDecorator={
                              <BsExclamationTriangleFill
                                style={{ marginRight: "5px" }}
                              />
                            }
                          >
                            Problems detected
                          </Chip>
                        )}
                      </Grid>
                      <Grid>
                        {_generator.CanStart === true ? (
                          <Chip
                            size="sm"
                            color="neutral"
                            variant="soft"
                          >
                            Can Start
                          </Chip>
                        ) : (
                          <Chip
                            size="sm"
                            color="danger"
                            variant="soft"
                          >
                            Cannot Start!
                          </Chip>
                        )}
                      </Grid>
                    </Grid>
                    <Stack alignItems="center">
                      <img
                        src={getImage(_generator.Name)}
                        alt=""
                        style={{
                          height: "100px",
                          width: "100px",
                          marginTop: "10px",
                        }}
                      />
                    </Stack>
                    <Box>
                      <Grid
                        container
                        spacing={0}
                        sx={{ padding: 0, marginBottom: "15px" }}
                      >
                        <Grid xs>
                          <Typography>Current Power Production:</Typography>
                        </Grid>
                        <Grid>
                          <Box sx={{ display: "flex", flexDirection: "row" }}>
                            <Typography marginLeft="10px">
                              {_generator.DynamicProdCapacity.toFixed(2)} MW
                            </Typography>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      ) : (
        <Grid
          container
          spacing={3}
          sx={{ opacity: 0.5 }}
        >
          <Grid xs={4}>
            <Card variant="outlined">
              <CardContent>
                <Stack alignItems="center">
                  <Skeleton
                    variant="circular"
                    sx={{ marginTop: "10px" }}
                    width="100px"
                    height="100px"
                  />

                  <Skeleton
                    variant="rounded"
                    sx={{ marginTop: "20px", marginBottom: "10px" }}
                    width="120px"
                    height="20px"
                  />
                </Stack>

                <Box>
                  <Grid
                    container
                    spacing={0}
                    sx={{ padding: 0, marginBottom: "15px", marginTop: "20px" }}
                  >
                    <Grid xs>
                      <Typography>PRODUCTION</Typography>
                    </Grid>
                    <Grid>
                      <Skeleton width="80px" />
                    </Grid>
                  </Grid>
                  <Skeleton
                    variant="rounded"
                    sx={{ width: "100%" }}
                    height="140px"
                  />

                  <Typography
                    marginBottom="15px"
                    marginTop="30px"
                  >
                    INGREDIENTS
                  </Typography>
                  <Skeleton
                    variant="rounded"
                    sx={{ width: "100%" }}
                    height="140px"
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={4}>
            <Card variant="outlined">
              <CardContent>
                <Stack alignItems="center">
                  <Skeleton
                    variant="circular"
                    sx={{ marginTop: "10px" }}
                    width="100px"
                    height="100px"
                  />

                  <Skeleton
                    variant="rounded"
                    sx={{ marginTop: "20px", marginBottom: "10px" }}
                    width="120px"
                    height="20px"
                  />
                </Stack>

                <Box>
                  <Grid
                    container
                    spacing={0}
                    sx={{ padding: 0, marginBottom: "15px", marginTop: "20px" }}
                  >
                    <Grid xs>
                      <Typography>PRODUCTION</Typography>
                    </Grid>
                    <Grid>
                      <Skeleton width="80px" />
                    </Grid>
                  </Grid>
                  <Skeleton
                    variant="rounded"
                    sx={{ width: "100%" }}
                    height="140px"
                  />

                  <Typography
                    marginBottom="15px"
                    marginTop="30px"
                  >
                    INGREDIENTS
                  </Typography>
                  <Skeleton
                    variant="rounded"
                    sx={{ width: "100%" }}
                    height="140px"
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={4}>
            <Card variant="outlined">
              <CardContent>
                <Stack alignItems="center">
                  <Skeleton
                    variant="circular"
                    sx={{ marginTop: "10px" }}
                    width="100px"
                    height="100px"
                  />

                  <Skeleton
                    variant="rounded"
                    sx={{ marginTop: "20px", marginBottom: "10px" }}
                    width="120px"
                    height="20px"
                  />
                </Stack>

                <Box>
                  <Grid
                    container
                    spacing={0}
                    sx={{ padding: 0, marginBottom: "15px", marginTop: "20px" }}
                  >
                    <Grid xs>
                      <Typography>PRODUCTION</Typography>
                    </Grid>
                    <Grid>
                      <Skeleton width="80px" />
                    </Grid>
                  </Grid>
                  <Skeleton
                    variant="rounded"
                    sx={{ width: "100%" }}
                    height="140px"
                  />

                  <Typography
                    marginBottom="15px"
                    marginTop="30px"
                  >
                    INGREDIENTS
                  </Typography>
                  <Skeleton
                    variant="rounded"
                    sx={{ width: "100%" }}
                    height="140px"
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};
