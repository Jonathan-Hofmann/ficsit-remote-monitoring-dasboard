import { Card, CardContent, Grid, Typography } from "@mui/joy";
import React from "react";

import { gameItemsDictionary } from "../../../dictionaries/gameItems.dictionary";
import { GameResourcesTypeEnum } from "../../../enums/gameResourcesType.enum";
import { getImageHelper } from "../../../helpers/getImage.helper";
import type { RecipeItemFm } from "../../../types/apis/frontModel/recipeItemFm";
import type { GameItemResource } from "../../../types/gameItems/resource";

type Props = {
  product: RecipeItemFm;
};

export const IngredientCard: React.FC<Props> = ({ product }) => {
  const item = gameItemsDictionary[product.className];
  const isItemNotLiquid =
    (item as GameItemResource).resourceType !== GameResourcesTypeEnum.Fluid;

  return (
    <Card
      variant="outlined"
      sx={{
        padding: "3px",
        borderColor:
          Math.floor(product.amount) < Math.floor(product.recipeAmount)
            ? "var(--joy-palette-error-main)"
            : "var(--joy-palette-neutral-outlinedBorder)",
        borderWidth: Math.floor(product.currentUsage) === 0 ? "3px" : "1px",
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
              src={getImageHelper(product.className)}
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
                <Typography level="body-md">Current Consumed</Typography>
              </Grid>
              <Grid>
                <Typography>
                  {`${
                    isItemNotLiquid
                      ? product.currentUsage.toFixed(2)
                      : `${product.currentUsage.toFixed(2)} m³`
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
                <Typography level="body-md">Max Consumed</Typography>
              </Grid>
              <Grid>
                <Typography>
                  {`${
                    isItemNotLiquid
                      ? product.maxUsage.toFixed(2)
                      : `${product.maxUsage.toFixed(2)} m³`
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
                <Typography level="body-md">Efficency Consume</Typography>
              </Grid>
              <Grid>
                <Typography>{product.usingPercent.toFixed(2)} %</Typography>
              </Grid>
            </Grid>
            <Grid
              spacing={0}
              container
              sx={{ paddingTop: 0 }}
            >
              <Grid xs>
                <Typography level="body-md">Consumption amount amount</Typography>
              </Grid>
              <Grid>
                <Typography>
                  {isItemNotLiquid
                    ? product.recipeAmount
                    : `${(product.recipeAmount).toFixed(2)} m³`
                  }
                </Typography>
              </Grid>
            </Grid>
            <Grid
              spacing={0}
              container
              sx={{
                color:
                  Math.floor(product.amount) < Math.floor(product.recipeAmount)
                    ? "var(--joy-palette-error-main)"
                    : "var(--joy-palette-text-main)",
                paddingY: 0,
              }}
            >
              <Grid xs>
                <Typography level="body-md">Input Inventory</Typography>
              </Grid>
              <Grid>
                {isItemNotLiquid
                  ? product.amount
                  : `${product.amount.toFixed(2)} m³`}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
