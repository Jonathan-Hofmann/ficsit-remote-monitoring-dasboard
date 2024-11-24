import { Card, CardContent, Grid, Typography } from "@mui/joy";
import React from "react";

import { gameItemsDictionnary } from "../../../dictionnaries/gameItems.dictionnary";
import { GameResourcesTypeEnum } from "../../../enums/gameResourcesType.enum";
import type { RecipeItemFm } from "../../../types/apis/frontModel/recipeItemFm";
import type { GameItemResource } from "../../../types/gameItems/resource";

type Props = {
  product: RecipeItemFm;
};

export const ProductionCard: React.FC<Props> = ({ product }) => {
  const item = gameItemsDictionnary[product.className];
  const isItemSolid =
    (item as GameItemResource).resourceType === GameResourcesTypeEnum.Solid;

  return (
    <Card
      variant="outlined"
      sx={{
        padding: "3px",
        borderColor:
          Math.floor(
            item && isItemSolid
              ? product.amount
              : Math.round(product.amount / 10) / 10,
          ) > 50
            ? "var(--joy-palette-warning-main)"
            : "var(--joy-palette-neutral-outlinedBorder)",
        borderWidth: Math.floor(product.amount) > 50 ? "3px" : "1px",
      }}
    >
      <CardContent>
        <Typography
          level="body-lg"
          alignSelf="center"
          sx={{ paddingTop: "3px", paddingBottom: "2px" }}
        >
          {product.name}
        </Typography>
        <Grid
          spacing={2}
          sx={{ paddingTop: "2px" }}
          container
        >
          <Grid>
            <img
              src={
                item
                  ? `/assets/${item.category}/${product.name}.png`
                  : undefined
              }
              alt={product.name}
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
                <Typography level="body-md">Current Production</Typography>
              </Grid>
              <Grid>
                <Typography>
                  {`${
                    item && isItemSolid
                      ? product.currentUsage.toFixed(2)
                      : `${Math.round(product.currentUsage / 10) / 100} m³`
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
                <Typography level="body-md">Max. Production</Typography>
              </Grid>
              <Grid>
                <Typography>
                  {`${
                    item && isItemSolid
                      ? product.maxUsage.toFixed(2)
                      : `${Math.round(product.maxUsage / 10) / 100} m³`
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
                <Typography level="body-md">Efficency Production</Typography>
              </Grid>
              <Grid>
                <Typography>{product.usingPercent.toFixed(2)} %</Typography>
              </Grid>
            </Grid>
            <Grid
              spacing={0}
              container
              sx={{ paddingY: 0 }}
            >
              <Grid xs>
                <Typography level="body-md">Output Inventory</Typography>
              </Grid>
              <Grid>
                <Typography
                  sx={{
                    color: (() => {
                      if (item && isItemSolid) {
                        return "inherit";
                      }
                      return product.amount > 50
                        ? "var(--joy-palette-warning-main)"
                        : "var(--joy-palette-text-main)";
                    })(),
                  }}
                >
                  {item && isItemSolid
                    ? product.amount
                    : `${(Math.round(product.amount / 10) / 100).toFixed(2)} m³`}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
