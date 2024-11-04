import { Card, CardContent, Grid, Stack, Typography } from "@mui/joy";
import React from "react";
import { Link } from "react-router-dom";

import { fullRefs } from "../constants/refs";

type Props = {
  factory: any;
  page: any;
};

export const BuildingButton: React.FC<Props> = ({ factory, page }) => {
  let link = `/${page}/?${page}=${factory}&endpoint=get`;
  if (page === "generator") {
    link = `${link + factory.split(" ")[0].split("-")[0]}Generator`;
  } else if (factory === "Quantum Encoder") {
    link += factory.split(" ")[1];
  } else {
    link += factory.split(" ")[0];
  }

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
                src={`./assets/${fullRefs[factory]?.category}/${factory}.png`}
                alt={factory}
                style={{ height: "70px", width: "70px" }}
              />
              <Typography level="h5">{`Open ${factory} Panel`}</Typography>
            </Stack>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  );
};
