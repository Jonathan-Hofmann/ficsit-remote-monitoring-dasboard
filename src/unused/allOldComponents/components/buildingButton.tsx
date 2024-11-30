import { Card, CardContent, Grid, Stack, Typography } from "@mui/joy";
import React from "react";
import { Link } from "react-router-dom";

import type { GameItemsEnum } from "../../enums/gameItems.enum";
import type { GameItemsCategoryEnum } from "../../enums/gameItemsCategory.enum";

type Props = {
  page: string;
  factory: GameItemsEnum;
  assetsLocation: GameItemsCategoryEnum;
};

export const BuildingButton: React.FC<Props> = ({
  page,
  factory,
  assetsLocation,
}) => {
  const link = `/${page}/?${page}=${factory}`;

  return (
    <Grid xs={4}>
      <Link
        to={link}
        style={{ textDecoration: "none" }}
      >
        <Card
          variant="outlined"
          sx={{
            "&:hover": {
              borderColor: "var(--joy-palette-neutral-700)",
            },
            "cursor": "pointer",
          }}
        >
          <CardContent>
            <Stack alignItems="center">
              <img
                src={`/assets/${assetsLocation}/${factory}.png`}
                alt={factory}
                style={{ height: "70px", width: "70px" }}
              />
              <Typography level="h4">{`Open ${factory} Panel`}</Typography>
            </Stack>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  );
};
