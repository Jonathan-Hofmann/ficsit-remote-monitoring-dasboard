import { Card, CardContent, Grid, Stack, Typography } from "@mui/joy";
import React from "react";
import { Link } from "react-router-dom";

import { fullRefs } from "../constants/refs";

export const BuildingButton: React.FC<{ factory: any; page: any }> = (
  props,
) => {
  let link = `/${props.page}/?${props.page}=${props.factory}&endpoint=get`;
  if (props.page === "generator") {
    link = `${link + props.factory.split(" ")[0].split("-")[0]}Generator`;
  } else if (props.factory === "Quantum Encoder") {
    link += props.factory.split(" ")[1];
  } else {
    link += props.factory.split(" ")[0];
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
                src={`./assets/${fullRefs[props.factory]?.category}/${
                  props.factory
                }.png`}
                alt={props.factory}
                style={{ height: "70px", width: "70px" }}
              />
              <Typography level="h5">
                {`Open ${props.factory} Panel`}
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  );
};
