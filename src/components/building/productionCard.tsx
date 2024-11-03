import { Card, CardContent, Grid, Typography } from "@mui/joy";
import React from "react";

export const ProductionCard: React.FC<{ product: any; fullRefs: any }> = (
  props,
) => {
  let exists = false;
  if (props.fullRefs[props.product.Name] != null) {
    exists = true;
  }
  return (
    <Card
      variant="outlined"
      sx={{
        padding: "3px",
        borderColor:
          Math.floor(
            exists
              ? props.fullRefs[props.product.Name].type === "l"
                ? Math.round(props.product.Amount / 10) / 10
                : props.product.Amount
              : props.product.Amount,
          ) > 50
            ? "var(--joy-palette-warning-main)"
            : "var(--joy-palette-neutral-outlinedBorder)",
        borderWidth: Math.floor(props.product.Inventory) > 50 ? "3px" : "1px",
      }}
    >
      <CardContent>
        <Typography
          level="body1"
          alignSelf="center"
          sx={{ paddingTop: "3px", paddingBottom: "2px" }}
        >
          {props.product.Name}
        </Typography>
        <Grid
          spacing={2}
          sx={{ paddingTop: "2px" }}
          container
        >
          <Grid>
            <img
              src={
                exists
                  ? `/assets/${props.fullRefs[props.product.Name].category}/${
                      props.product.Name
                    }.png`
                  : undefined
              }
              alt={props.product.Name}
              style={{ height: "30px", width: "30px" }}
            />
          </Grid>
          <Grid xs>
            <Grid
              spacing={0}
              container
              sx={{ paddingTop: 0 }}
            >
              <Grid xs>
                <Typography level="body2">Current Production</Typography>
              </Grid>
              <Grid>
                <Typography>
                  {`${
                    exists
                      ? props.fullRefs[props.product.Name].type === "l"
                        ? `${
                            Math.round(props.product.CurrentProd / 10) / 100
                          } m³`
                        : props.product.CurrentProd.toFixed(2)
                      : props.product.CurrentProd.toFixed(2)
                  }/min`}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              spacing={0}
              container
              sx={{ paddingTop: 0 }}
            >
              <Grid xs>
                <Typography level="body2">Max. Production</Typography>
              </Grid>
              <Grid>
                <Typography>
                  {`${
                    exists
                      ? props.fullRefs[props.product.Name].type === "l"
                        ? `${Math.round(props.product.MaxProd / 10) / 100} m³`
                        : props.product.MaxProd.toFixed(2)
                      : props.product.MaxProd.toFixed(2)
                  }/min`}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              spacing={0}
              container
              sx={{ paddingTop: 0 }}
            >
              <Grid xs>
                <Typography level="body2">Efficency Production</Typography>
              </Grid>
              <Grid>
                <Typography>
                  {props.product.ProdPercent.toFixed(2)} %
                </Typography>
              </Grid>
            </Grid>
            <Grid
              spacing={0}
              container
              sx={{ paddingY: 0 }}
            >
              <Grid xs>
                <Typography level="body2">Output Inventory</Typography>
              </Grid>
              <Grid>
                <Typography
                  sx={{
                    color: exists
                      ? Math.floor(
                          props.fullRefs[props.product.Name].type === "l"
                            ? Math.round(props.product.Amount / 10) / 10
                            : props.product.Amount,
                        )
                      : props.product.Amount > 50
                        ? "var(--joy-palette-warning-main)"
                        : "var(--joy-palette-text-main)",
                  }}
                >
                  {exists
                    ? props.fullRefs[props.product.Name].type === "l"
                      ? `${Math.round(props.product.Amount / 10) / 100} m³`
                      : props.product.Amount
                    : props.product.Amount}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
