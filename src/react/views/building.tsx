import {
  Card,
  CardHeader,
  Container,
  Divider,
  Grid,
  IconButton,
  Paper,
  Tooltip,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/system";
import React, { useEffect, useState } from "react";
import { BsX } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";

import type { LocationState } from "../../types/locationState";
import type { Theme } from "../../types/theme";

export const Building: React.FC = () => {
  const theme: Theme = useTheme();
  const location: LocationState = useLocation();
  const [, setStep] = useState(0);

  const locationState = location.state;
  const buildingsData = locationState?.data;

  useEffect(() => {
    if (buildingsData) {
      if (buildingsData.IsConfigured === false) {
        setStep(0);
      } else if (
        buildingsData.IsProducing === false &&
        buildingsData.IsPaused === true
      ) {
        setStep(1);
      } else {
        setStep(2);
      }
    }
  }, [locationState, buildingsData]);

  if (!buildingsData) return null;

  return (
    <Container sx={{ paddingTop: "50px" }}>
      <Grid
        container
        display="flex"
        alignItems="center"
      >
        <Grid
          item
          xs
        >
          <Typography
            variant="h2"
            fontWeight={600}
          >
            {buildingsData.building}
          </Typography>
        </Grid>
        <Grid item>
          <Link to="/production">
            <IconButton size="large">
              <BsX />
            </IconButton>
          </Link>
        </Grid>
      </Grid>
      <Divider sx={{ margin: "20px 0" }} />

      <Grid
        container
        spacing={2}
        sx={{ marginBottom: "30px" }}
      >
        <Grid
          item
          xs
        >
          <Card>
            <CardHeader
              title={buildingsData.Recipe}
              subheader="Currently Producing"
            />
          </Card>
        </Grid>
        <Grid
          item
          xs
        >
          <Card>
            <CardHeader
              title={`${parseFloat(buildingsData.ManuSpeed) * 100} %`}
              subheader="Overclocking Speed"
            />
          </Card>
        </Grid>
        <Grid
          item
          xs
        >
          <Card>
            <CardHeader
              title={buildingsData.CircuitID}
              subheader="Power Circuit"
            />
          </Card>
        </Grid>
        <Tooltip title="errorText">
          <Grid
            item
            xs
          >
            {buildingsData.IsConfigured === true &&
            buildingsData.IsProducing === true &&
            buildingsData.IsPaused === false ? (
              <Card sx={{ backgroundColor: theme.palette.success.main }}>
                <CardHeader
                  title="No Problems"
                  subheader="Current Status"
                />
              </Card>
            ) : (
              <Card sx={{ backgroundColor: theme.palette.error.main }}>
                <CardHeader
                  title="Broken!"
                  subheader="Fuse Status"
                />
              </Card>
            )}
          </Grid>
        </Tooltip>
      </Grid>

      <Divider sx={{ marginBottom: "30px" }} />

      <Paper
        elevation={1}
        sx={{ marginBottom: "30px", padding: "20px" }}
      >
        <Grid container>
          <Grid
            item
            xs
          >
            <Typography
              variant="h5"
              sx={{ marginBottom: "20px" }}
            >
              {buildingsData.building} produces {buildingsData.Recipe}
            </Typography>
          </Grid>
          <Grid item>
            {/* {productionItem.FuseTriggered === true ? <Chip icon={<BsExclamationTriangleFill size={'17px'}/> } sx={{paddingLeft: '6px'}} color="error" label="FUSE BROKEN"></Chip> : <Chip icon={<BsCheck size={'22px'}/> } sx={{paddingLeft: '6px', color: 'white'}} color="success" label="Fuse: All Good"></Chip>} */}
          </Grid>
        </Grid>
        {buildingsData.production.map((productionItem) => {
          return (
            <Grid
              container
              spacing={2}
            >
              <Grid
                item
                xs
              >
                <Card variant="outlined">
                  <CardHeader
                    title={productionItem.Name}
                    subheader="Name"
                  />
                </Card>
              </Grid>
              <Grid
                item
                xs
              >
                <Card variant="outlined">
                  <CardHeader
                    title={parseFloat(productionItem.CurrentProd).toFixed(2)}
                    subheader="Current Production"
                  />
                </Card>
              </Grid>
              <Grid
                item
                xs
              >
                <Card variant="outlined">
                  <CardHeader
                    title={parseFloat(productionItem.MaxProd).toFixed(2)}
                    subheader="Maximum Production"
                  />
                </Card>
              </Grid>
              <Grid
                item
                xs
              >
                <Card variant="outlined">
                  <CardHeader
                    title={`${parseFloat(productionItem.ProdPercent).toFixed(2)} %`}
                    subheader="Efficentcy Percentage"
                  />
                </Card>
              </Grid>
            </Grid>
          );
        })}
      </Paper>

      <Divider sx={{ marginBottom: "30px" }} />

      <Paper
        elevation={1}
        sx={{ marginBottom: "30px", padding: "20px", paddingBottom: "5px" }}
      >
        <Grid container>
          <Grid
            item
            xs
          >
            <Typography
              variant="h5"
              sx={{ marginBottom: "20px" }}
            >
              {buildingsData.building} needs Ingredients:
            </Typography>
          </Grid>
          <Grid item>
            {/* {productionItem.FuseTriggered === true ? <Chip icon={<BsExclamationTriangleFill size={'17px'}/> } sx={{paddingLeft: '6px'}} color="error" label="FUSE BROKEN"></Chip> : <Chip icon={<BsCheck size={'22px'}/> } sx={{paddingLeft: '6px', color: 'white'}} color="success" label="Fuse: All Good"></Chip>} */}
          </Grid>
        </Grid>
        {buildingsData.ingredients.map((productionItem) => {
          return (
            <Grid
              container
              spacing={2}
              sx={{ marginBottom: "20px" }}
            >
              <Grid
                item
                xs
              >
                <Card variant="outlined">
                  <CardHeader
                    title={productionItem.Name}
                    subheader="Name"
                  />
                </Card>
              </Grid>
              <Grid
                item
                xs
              >
                <Card variant="outlined">
                  <CardHeader
                    title={parseFloat(productionItem.CurrentConsumed).toFixed(
                      2,
                    )}
                    subheader="Current Consumption"
                  />
                </Card>
              </Grid>
              <Grid
                item
                xs
              >
                <Card variant="outlined">
                  <CardHeader
                    title={parseFloat(productionItem.MaxConsumed).toFixed(2)}
                    subheader="Maximum Consumption"
                  />
                </Card>
              </Grid>
              <Grid
                item
                xs
              >
                <Card variant="outlined">
                  <CardHeader
                    title={`${parseFloat(productionItem.ConsPercent).toFixed(2)} %`}
                    subheader="Efficentcy Percentage"
                  />
                </Card>
              </Grid>
            </Grid>
          );
        })}
      </Paper>
    </Container>
  );
};
