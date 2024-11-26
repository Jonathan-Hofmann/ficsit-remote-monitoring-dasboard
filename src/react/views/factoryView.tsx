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
import { BsArrowRightShort, BsExclamationTriangleFill } from "react-icons/bs";
import { redirect, useSearchParams } from "react-router-dom";

import { gameItemsDictionnary } from "../../dictionaries/gameItems.dictionary";
import type { GameItemsEnum } from "../../enums/gameItems.enum";
import { gameItemFilterHelper } from "../../helpers/gameItemFilter.helper";
import { getImageHelper } from "../../helpers/getImage.helper";
import { objectEntriesToArrayHelper } from "../../helpers/objectEntriesToArray.helper";
import { useAutoRefetch } from "../../hooks/useAutoRefetch";
import type { FactoryDto } from "../../types/apis/dataTransferObject/factoryDto";
import type { FactoryFm } from "../../types/apis/frontModel/factoryFm";
import type { GameItems } from "../../types/gameItems/gameItems";
import type { GameItemManufacturerBuilding } from "../../types/gameItems/manufacturerBuilding";
import { IngredientCard } from "../components/building/ingredientCard";
import { ProductionCard } from "../components/building/productionCard";

export const DetailedFactoryView: React.FC = () => {
  const [params] = useSearchParams();
  const currentFactoryName = params.get("factory") as GameItemsEnum;

  const factoriesList = objectEntriesToArrayHelper<GameItems>(
    gameItemFilterHelper({
      gameItemsDictionnary,
      filter: "factories",
    }),
  );
  const currentFactory = currentFactoryName
    ? (factoriesList.find(
        (factory) => factory.name === currentFactoryName,
      ) as GameItemManufacturerBuilding)
    : undefined;
  const factoryEndpoint = currentFactory ? currentFactory.endpoint : undefined;
  if (!factoryEndpoint) redirect("/power");

  const { data: factories } = useAutoRefetch<FactoryDto[], FactoryFm[]>(
    factoryEndpoint,
    !factoryEndpoint,
  );

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
                {currentFactoryName}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {factories ? (
        <Grid
          container
          spacing={3}
        >
          {factories.map((factory) => {
            return (
              <Grid
                xs={4}
                key={factory.id}
              >
                <Card variant="outlined">
                  <CardContent>
                    <Grid
                      padding={0}
                      container
                    >
                      <Grid xs>
                        {factory.isProducing ? (
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
                        {factory.isConfigured ? (
                          <Chip
                            size="sm"
                            color="neutral"
                            variant="soft"
                          >
                            Configured
                          </Chip>
                        ) : (
                          <Chip
                            size="sm"
                            color="danger"
                            variant="soft"
                          >
                            Not Configured
                          </Chip>
                        )}
                      </Grid>
                    </Grid>
                    <Stack alignItems="center">
                      <img
                        src={getImageHelper(factory.className)}
                        alt=""
                        style={{
                          height: "100px",
                          width: "100px",
                          marginTop: "10px",
                        }}
                      />
                      <Typography sx={{ marginTop: "5px" }}>
                        {factory.recipe}
                      </Typography>
                      {factory.isConfigured && (
                        <Box>
                          <Grid
                            spacing={0}
                            container
                            sx={{ marginTop: "5px" }}
                          >
                            <Grid>
                              {factory.ingredients.map((ingredient) => (
                                <img
                                  key={ingredient.className}
                                  src={
                                    getImageHelper(ingredient.className) ?? null
                                  }
                                  alt={ingredient.name}
                                  style={{ height: "40px", width: "40px" }}
                                />
                              ))}
                            </Grid>
                            <Grid>
                              <BsArrowRightShort size="36px" />
                            </Grid>
                            <Grid>
                              {factory.products.map((product) => (
                                <img
                                  key={product.className}
                                  src={
                                    getImageHelper(product.className) ?? null
                                  }
                                  alt={product.name}
                                  style={{ height: "40px", width: "40px" }}
                                />
                              ))}
                            </Grid>
                          </Grid>
                        </Box>
                      )}
                    </Stack>
                    {factory.isConfigured && (
                      <Box>
                        <Grid
                          container
                          spacing={0}
                          sx={{ padding: 0, marginBottom: "15px" }}
                        >
                          <Grid xs>
                            <Typography>Ingredients</Typography>
                          </Grid>
                          <Grid>
                            <Box sx={{ display: "flex", flexDirection: "row" }}>
                              <img
                                src="/assets/Icon/Overclocking_Icon.png"
                                alt=""
                                style={{ height: "22px", width: "22px" }}
                              />
                              <Typography marginLeft="10px">
                                {factory.clockSpeed.toFixed(2)} %
                              </Typography>
                            </Box>
                          </Grid>
                        </Grid>
                        {factory.ingredients.map((ingredient) => {
                          return (
                            <IngredientCard
                              key={ingredient.className}
                              product={ingredient}
                            />
                          );
                        })}

                        <Typography
                          marginBottom="15px"
                          marginTop="30px"
                        >
                          Products
                        </Typography>
                        {factory.products.map((product) => {
                          return (
                            <ProductionCard
                              key={product.className}
                              product={product}
                            />
                          );
                        })}
                      </Box>
                    )}
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
