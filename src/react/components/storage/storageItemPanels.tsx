import { Card, CardContent, Grid, Skeleton, Typography } from "@mui/joy";
import React from "react";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";

import { gameItemsDictionnary } from "../../../dictionaries/gameItems.dictionary";
import { getImageHelper } from "../../../helpers/getImage.helper";
import type { StorageItemRow } from "../../../types/storageItem";

const SKELETON_PANELS_COUNT = 16;

// Built from the numeric rates rather than the API's ProdPerMin string, which
// carries the raw float precision (for example "P: 20.799999/ min").
const formatRatesHelper = (item: StorageItemRow): string => {
  const production = item.currentProduction.toFixed(1);
  const consumption = item.currentConsumption.toFixed(1);
  return `P: ${production}/min - C: ${consumption}/min`;
};

type StorageItemPanelsProps = {
  items?: StorageItemRow[];
};

export const StorageItemPanels: React.FC<StorageItemPanelsProps> = ({
  items,
}) => {
  return (
    <Grid
      container
      paddingY={0}
      px={0}
      spacing={2}
    >
      {items
        ? items.map((item) => {
            const isUnderProduced = item.deficit > 0;

            return (
              <Grid
                xs={4}
                key={item.className}
              >
                <Card
                  variant="outlined"
                  sx={{
                    height: "100%",
                    padding: "3px",
                    borderColor: isUnderProduced
                      ? "var(--joy-palette-warning-main)"
                      : "var(--joy-palette-neutral-outlinedBorder)",
                    borderWidth: isUnderProduced ? "3px" : "1px",
                  }}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      padding: "16px",
                    }}
                  >
                    {gameItemsDictionnary[item.className] !== undefined ? (
                      <img
                        src={getImageHelper(item.className) ?? null}
                        alt="Satisfactory item illustration"
                        style={{ height: "70px", width: "70px" }}
                      />
                    ) : (
                      <HiOutlineQuestionMarkCircle size="70px" />
                    )}
                    <Typography marginBottom="5px">{item.name}</Typography>
                    <Typography level="body-md">
                      Total: {item.amount.toLocaleString()}
                    </Typography>
                    <Typography level="body-md">
                      {formatRatesHelper(item)}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })
        : Array.from({ length: SKELETON_PANELS_COUNT }).map((_, index) => {
            return (
              <Grid
                xs={4}
                key={`storage-panel-skeleton-${String(index)}`}
              >
                <Card
                  variant="outlined"
                  sx={{ height: "100%", padding: 0 }}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      padding: "16px",
                    }}
                  >
                    <Skeleton
                      variant="circular"
                      height="70px"
                      width="70px"
                      sx={{ marginBottom: "10px" }}
                    />
                    <Skeleton
                      variant="text"
                      width="80px"
                      sx={{ marginBottom: "10px" }}
                    />
                    <Skeleton
                      variant="text"
                      width="50px"
                      sx={{ marginBottom: "10px" }}
                    />
                    <Skeleton
                      variant="text"
                      width="150px"
                    />
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
    </Grid>
  );
};
