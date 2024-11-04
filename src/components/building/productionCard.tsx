import { Card, CardContent, Grid, Typography } from "@mui/joy";
import React from "react";

type Props = {
  product: any;
  fullRefs: any;
};

export const ProductionCard: React.FC<Props> = ({ product, fullRefs }) => {
  let exists = false;
  if (fullRefs[product.Name] != null) {
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
              ? fullRefs[product.Name].type === "l"
                ? Math.round(product.Amount / 10) / 10
                : product.Amount
              : product.Amount,
          ) > 50
            ? "var(--joy-palette-warning-main)"
            : "var(--joy-palette-neutral-outlinedBorder)",
        borderWidth: Math.floor(product.Inventory) > 50 ? "3px" : "1px",
      }}
    >
      <CardContent>
        <Typography
          level="body1"
          alignSelf="center"
          sx={{ paddingTop: "3px", paddingBottom: "2px" }}
        >
          {product.Name}
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
                  ? `/assets/${fullRefs[product.Name].category}/${
                      product.Name
                    }.png`
                  : undefined
              }
              alt={product.Name}
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
                      ? fullRefs[product.Name].type === "l"
                        ? `${Math.round(product.CurrentProd / 10) / 100} m³`
                        : product.CurrentProd.toFixed(2)
                      : product.CurrentProd.toFixed(2)
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
                      ? fullRefs[product.Name].type === "l"
                        ? `${Math.round(product.MaxProd / 10) / 100} m³`
                        : product.MaxProd.toFixed(2)
                      : product.MaxProd.toFixed(2)
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
                <Typography>{product.ProdPercent.toFixed(2)} %</Typography>
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
                          fullRefs[product.Name].type === "l"
                            ? Math.round(product.Amount / 10) / 10
                            : product.Amount,
                        )
                      : product.Amount > 50
                        ? "var(--joy-palette-warning-main)"
                        : "var(--joy-palette-text-main)",
                  }}
                >
                  {exists
                    ? fullRefs[product.Name].type === "l"
                      ? `${Math.round(product.Amount / 10) / 100} m³`
                      : product.Amount
                    : product.Amount}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
