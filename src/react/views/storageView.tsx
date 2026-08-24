import { Card, CardContent, Container, Grid, Typography } from "@mui/joy";
import React, { useCallback, useEffect, useState } from "react";

import { EndpointEnum } from "../../enums/endpoint.enum";
import { useAutoRefetch } from "../../hooks/useAutoRefetch";
import type { ProdStatsDto } from "../../types/apis/dataTransferObject/prodStatsDto";
import type { WorldInvDto } from "../../types/apis/dataTransferObject/worldInvDto";
import type { ProductionStatFm } from "../../types/apis/frontModel/productionStatFm";
import type { WorldInvFm } from "../../types/apis/frontModel/worldInvFm";
import type { StorageItemFm } from "../../types/storageItem";
import { StorageItemPanels } from "../components/storage/storageItemPanels";

export const StorageView: React.FC = () => {
  const { data: worldInv } = useAutoRefetch<WorldInvDto[], WorldInvFm[]>(
    EndpointEnum.WORLD_INV,
  );

  const { data: prodStats } = useAutoRefetch<
    ProdStatsDto[],
    ProductionStatFm[]
  >(EndpointEnum.PRODUCTION_STAT);

  const [items, setItems] = useState<StorageItemFm[]>();

  const handlePrepareItems = useCallback(() => {
    const temp: StorageItemFm[] = [];
    worldInv?.forEach((item) => {
      const foundedItem = prodStats?.find(
        (prodItem) => prodItem.name === item.name,
      );
      if (foundedItem) temp.push({ ...foundedItem, amount: item.amount });
      if (!foundedItem)
        temp.push({
          name: item.name,
          className: item.className,
          amount: 0,
          currentProduction: 0,
          currentConsumption: 0,
          percentProduction: 0,
          percentConsumption: 0,
          maxProduction: 0,
          maxConsumption: 0,
          productionPerMinunte: "P:0.0/min - C: 0.0/min",
        });
    });
    setItems(temp);
  }, [worldInv, prodStats]);

  useEffect(() => {
    handlePrepareItems();
  }, [handlePrepareItems]);

  return (
    <Container sx={{ paddingTop: "50px" }}>
      <Card
        variant="outlined"
        sx={{ paddingBottom: "0px", marginBottom: "30px" }}
      >
        <CardContent>
          <Grid
            container
            display="flex"
            alignItems="center"
            marginBottom="20px"
          >
            <Grid xs>
              <Typography
                level="h2"
                fontWeight={600}
              >
                All Items in World
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <StorageItemPanels items={items} />
    </Container>
  );
};
