import {
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Skeleton,
  Stack,
  Typography,
} from "@mui/joy";
import React from "react";
import { BsExclamationTriangleFill } from "react-icons/bs";
import { redirect, useSearchParams } from "react-router-dom";

import { gameItemsDictionnary } from "../../dictionaries/gameItems.dictionary";
import type { GameItemsEnum } from "../../enums/gameItems.enum";
import { gameItemFilterHelper } from "../../helpers/gameItemFilter.helper";
import { getImageHelper } from "../../helpers/getImage.helper";
import { objectEntriesToArrayHelper } from "../../helpers/objectEntriesToArray.helper";
import { useAutoRefetch } from "../../hooks/useAutoRefetch";
import type { GeneratorDto } from "../../types/apis/dataTransferObject/generatorsDto";
import type { GeothermalGeneratorDto } from "../../types/apis/dataTransferObject/geothermalGeneratorDto";
import type { GeneratorFm } from "../../types/apis/frontModel/generatorsFm";
import type { GameItems } from "../../types/gameItems/gameItems";
import type { GameItemGeneratorBuilding } from "../../types/gameItems/generatorBuilding";

export const DetailedGeneratorView: React.FC = () => {
  const [params] = useSearchParams();
  const currentGeneratorName = params.get("generator") as GameItemsEnum;

  const generatorsList = objectEntriesToArrayHelper<GameItems>(
    gameItemFilterHelper({
      gameItemsDictionnary,
      filter: "generatorsWithEndpoint",
    }),
  );

  const generatorEndpoint = currentGeneratorName
    ? (
        generatorsList.find(
          (generator) => generator.name === currentGeneratorName,
        ) as GameItemGeneratorBuilding
      ).endpoint
    : undefined;
  if (!generatorEndpoint) redirect("/power");

  const { data: generators } = useAutoRefetch<
    GeneratorDto[] | GeothermalGeneratorDto[],
    GeneratorFm[]
  >(generatorEndpoint, !generatorEndpoint);

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
                {currentGeneratorName}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {generators ? (
        <Grid
          container
          spacing={3}
        >
          {generators.map((generator) => {
            return (
              <Grid
                xs={4}
                key={generator.id}
              >
                <Card variant="outlined">
                  <CardContent>
                    <Grid
                      padding={0}
                      container
                    >
                      <Grid xs>
                        {generator.isFullSpeed ? (
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
                        {generator.isGeneratorCanStart ? (
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
                        src={getImageHelper(generator.className)}
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
                              {generator.dynamicProductionCapacity.toFixed(2)}{" "}
                              MW
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
                    variant="rectangular"
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
                      <Skeleton
                        variant="text"
                        width="80px"
                      />
                    </Grid>
                  </Grid>
                  <Skeleton
                    variant="rectangular"
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
                    variant="rectangular"
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
                    variant="rectangular"
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
                      <Skeleton
                        variant="text"
                        width="80px"
                      />
                    </Grid>
                  </Grid>
                  <Skeleton
                    variant="rectangular"
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
                    variant="rectangular"
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
                    variant="rectangular"
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
                      <Skeleton
                        variant="text"
                        width="80px"
                      />
                    </Grid>
                  </Grid>
                  <Skeleton
                    variant="rectangular"
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
                    variant="rectangular"
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
