import {
  Card,
  CardContent,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/joy";
import React from "react";
import { GiCargoCrate } from "react-icons/gi";

import { gameItemsDictionnary } from "../../dictionaries/gameItems.dictionary";
import { GameItemsCategoryEnum } from "../../enums/gameItemsCategory.enum";
import { gameItemFilterHelper } from "../../helpers/gameItemFilter.helper";
import { objectEntriesToArrayHelper } from "../../helpers/objectEntriesToArray.helper";
import type { GameItems } from "../../types/gameItems/gameItems";
import { BuildingButton } from "../components/buildingButton";

export const FactorysSwitch: React.FC = () => {
  const factories = objectEntriesToArrayHelper<GameItems>(
    gameItemFilterHelper({
      gameItemsDictionnary,
      filter: "factories",
    }),
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
                Available Factories
              </Typography>
            </Grid>
            <Grid>
              <IconButton size="lg">
                <GiCargoCrate
                  size="22px"
                  color="rgba(255,255,255,0.1)"
                />
              </IconButton>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Grid
        container
        spacing={3}
      >
        {factories.map((factory) => {
          return (
            <BuildingButton
              key={factory.name}
              factory={factory.name}
              page="factory"
              assetsLocation={GameItemsCategoryEnum.Building}
            />
          );
        })}
      </Grid>
    </Container>
  );
};
