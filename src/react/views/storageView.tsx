import {
  Card,
  CardContent,
  Container,
  Grid,
  IconButton,
  Switch,
  ToggleButtonGroup,
  Tooltip,
  Typography,
} from "@mui/joy";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { MdOutlineGridView, MdOutlineTableRows } from "react-icons/md";

import { EndpointEnum } from "../../enums/endpoint.enum";
import { StorageItemSetEnum } from "../../enums/storageItemSet.enum";
import { StorageLayoutEnum } from "../../enums/storageLayout.enum";
import { useAutoRefetch } from "../../hooks/useAutoRefetch";
import { useItemProducers } from "../../hooks/useItemProducers";
import type { ProdStatsDto } from "../../types/apis/dataTransferObject/prodStatsDto";
import type { WorldInvDto } from "../../types/apis/dataTransferObject/worldInvDto";
import type { ProductionStatFm } from "../../types/apis/frontModel/productionStatFm";
import type { WorldInvFm } from "../../types/apis/frontModel/worldInvFm";
import type { StorageItemFm, StorageItemRow } from "../../types/storageItem";
import { StorageItemPanels } from "../components/storage/storageItemPanels";
import { StorageItemTable } from "../components/storage/storageItemTable";

const ITEM_SET_TITLES: Record<StorageItemSetEnum, string> = {
  [StorageItemSetEnum.STORAGE]: "All Storage Items",
  [StorageItemSetEnum.PRODUCED]: "All Produced Items",
};

// Rates are displayed as whole numbers, so the shortfall is derived from the
// same rounded figures. That keeps the column equal to the difference the user
// can read off the Produced and Consumed columns, and stops a sub-unit gap from
// rendering as "-0/min".
const getDeficitHelper = (item: StorageItemFm): number => {
  const deficit =
    Math.round(item.currentConsumption) - Math.round(item.currentProduction);
  return deficit > 0 ? deficit : 0;
};

export const StorageView: React.FC = () => {
  const { data: worldInv } = useAutoRefetch<WorldInvDto[], WorldInvFm[]>(
    EndpointEnum.WORLD_INV,
  );

  const { data: prodStats } = useAutoRefetch<
    ProdStatsDto[],
    ProductionStatFm[]
  >(EndpointEnum.PRODUCTION_STAT);

  const [items, setItems] = useState<StorageItemFm[]>();
  const [layout, setLayout] = useState<StorageLayoutEnum>(
    StorageLayoutEnum.PANELS,
  );
  const [itemSet, setItemSet] = useState<StorageItemSetEnum>(
    StorageItemSetEnum.STORAGE,
  );

  // Only the grid layout offers the machine filter, and pulling every factory
  // endpoint is expensive, so the panels layout skips those requests entirely.
  const { machines, producersByItem } = useItemProducers(
    layout !== StorageLayoutEnum.GRID,
  );

  const handlePrepareItems = useCallback(() => {
    const temp: StorageItemFm[] = [];

    // Produced items are driven by the production stats, which cover items that
    // never sit in a container. Ingots are the clearest case: they go straight
    // from smelter to the next machine, so world inventory never reports them.
    if (itemSet === StorageItemSetEnum.PRODUCED) {
      prodStats?.forEach((prodItem) => {
        const stored = worldInv?.find((item) => item.name === prodItem.name);
        temp.push({ ...prodItem, amount: stored?.amount ?? 0 });
      });
      setItems(temp);
      return;
    }

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
  }, [worldInv, prodStats, itemSet]);

  useEffect(() => {
    handlePrepareItems();
  }, [handlePrepareItems]);

  const rows = useMemo((): StorageItemRow[] | undefined => {
    return items?.map((item) => {
      return { ...item, deficit: getDeficitHelper(item) };
    });
  }, [items]);

  const handleChangeItemSet = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setItemSet(
        event.target.checked
          ? StorageItemSetEnum.PRODUCED
          : StorageItemSetEnum.STORAGE,
      );
    },
    [],
  );

  const handleChangeLayout = useCallback(
    (_event: React.MouseEvent, value: StorageLayoutEnum | null) => {
      // Null when the active button is clicked again, which should keep the
      // current layout rather than leaving the view with nothing selected.
      if (value) setLayout(value);
    },
    [],
  );

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
                {ITEM_SET_TITLES[itemSet]}
              </Typography>
            </Grid>
            <Grid sx={{ paddingRight: "20px" }}>
              <Switch
                checked={itemSet === StorageItemSetEnum.PRODUCED}
                onChange={handleChangeItemSet}
                startDecorator="Storage"
                endDecorator="Produced"
                slotProps={{
                  input: { "aria-label": "Show all produced items" },
                }}
              />
            </Grid>
            <Grid>
              <ToggleButtonGroup
                value={layout}
                onChange={handleChangeLayout}
                variant="outlined"
                size="md"
              >
                <Tooltip title="Panel view">
                  <IconButton
                    value={StorageLayoutEnum.PANELS}
                    aria-label="Panel view"
                  >
                    <MdOutlineGridView size="20px" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Grid view">
                  <IconButton
                    value={StorageLayoutEnum.GRID}
                    aria-label="Grid view"
                  >
                    <MdOutlineTableRows size="20px" />
                  </IconButton>
                </Tooltip>
              </ToggleButtonGroup>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      {layout === StorageLayoutEnum.PANELS ? (
        <StorageItemPanels items={rows} />
      ) : (
        <StorageItemTable
          items={rows}
          machines={machines}
          producersByItem={producersByItem}
        />
      )}
    </Container>
  );
};
