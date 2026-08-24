import { Card, CardContent, Container, Grid, Typography } from "@mui/joy";
import React, { useCallback, useEffect, useState } from "react";

import { EndpointEnum } from "../../enums/endpoint.enum";
import { useAutoRefetch } from "../../hooks/useAutoRefetch";
import { useItemProducers } from "../../hooks/useItemProducers";
import type { ProdStatsDto } from "../../types/apis/dataTransferObject/prodStatsDto";
import type { WorldInvDto } from "../../types/apis/dataTransferObject/worldInvDto";
import type { ProductionStatFm } from "../../types/apis/frontModel/productionStatFm";
import type { WorldInvFm } from "../../types/apis/frontModel/worldInvFm";
import type { StorageItemFm } from "../../types/storageItem";
import { StorageItemTable } from "../components/storage/storageItemTable";

export const ItemsView: React.FC = () => {
  const { data: prodStats } = useAutoRefetch<
    ProdStatsDto[],
    ProductionStatFm[]
  >(EndpointEnum.PRODUCTION_STAT);

  const { data: worldInv } = useAutoRefetch<WorldInvDto[], WorldInvFm[]>(
    EndpointEnum.WORLD_INV,
  );

  const { machines, producersByItem } = useItemProducers();

  const [items, setItems] = useState<StorageItemFm[]>();

  // Driven by the production stats rather than world inventory, so items that
  // are never stored still appear. Ingots are the clearest case: they go
  // straight from smelter to the next machine and never sit in a container.
  const handlePrepareItems = useCallback(() => {
    const temp: StorageItemFm[] = [];
    prodStats?.forEach((prodItem) => {
      const stored = worldInv?.find((item) => item.name === prodItem.name);
      temp.push({ ...prodItem, amount: stored?.amount ?? 0 });
    });
    setItems(temp);
  }, [prodStats, worldInv]);

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
                All Produced Items
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <StorageItemTable
        items={items}
        machines={machines}
        producersByItem={producersByItem}
      />
    </Container>
  );
};
