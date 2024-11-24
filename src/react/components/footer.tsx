import { Box, Container, Divider, Grid, Typography } from "@mui/joy";
import React from "react";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  return (
    <Box>
      <Container sx={{ paddingBottom: "40px" }}>
        <Divider sx={{ marginTop: "40px", marginBottom: "20px" }} />
        <Grid container>
          <Grid xs>
            <Typography level="body-md">
              Created with lots of ☕ by{" "}
              <Link
                style={{
                  color: "var(--joy-palette-primary-main)",
                  textDecoration: "none",
                }}
                target="_blank"
                to="https://github.com/Jonathan-Hofmann"
              >
                Jonathan
              </Link>
              ,{" "}
              <Link
                style={{
                  color: "var(--joy-palette-primary-main)",
                  textDecoration: "none",
                }}
                target="_blank"
                to="https://github.com/arfla"
              >
                Arfla
              </Link>{" "}
              &{" "}
              <Link
                style={{
                  color: "var(--joy-palette-primary-main)",
                  textDecoration: "none",
                }}
                target="_blank"
                to="https://github.com/tomatoSauc"
              >
                Tomas
              </Link>
              .
            </Typography>
          </Grid>
          <Grid xs>
            <Typography
              level="body-lg"
              marginBottom="5px"
              textAlign="center"
            >
              Ficsit Remote Monitoring Dashboard
            </Typography>
            <Typography
              level="body-md"
              textAlign="center"
            >
              Github Repository{" "}
              <Link
                style={{
                  color: "var(--joy-palette-primary-main)",
                  textDecoration: "none",
                }}
                target="_blank"
                to="https://github.com/Jonathan-Hofmann/ficsit-remote-monitoring-dasboard"
              >
                here
              </Link>
            </Typography>
          </Grid>
          <Grid xs>
            <Typography
              textAlign="right"
              level="body-md"
            >
              Base Mod for Satisfactory:{" "}
              <Link
                style={{
                  color: "var(--joy-palette-primary-main)",
                  textDecoration: "none",
                }}
                target="_blank"
                to="https://ficsit.app/mod/FicsitRemoteMonitoring"
              >
                Ficsit Remote Monitoring
              </Link>
            </Typography>
            <Typography
              textAlign="right"
              level="body-md"
            >
              Start mod with{" "}
              <Typography
                style={{
                  color: "var(--joy-palette-primary-main)",
                  textDecoration: "none",
                }}
              >
                /frm http start
              </Typography>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
