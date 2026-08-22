import type { ProductionStatFm } from "./apis/frontModel/productionStatFm";
import type { WorldInvFm } from "./apis/frontModel/worldInvFm";

export type StorageItemFm = ProductionStatFm & Pick<WorldInvFm, "amount">;

export type StorageItemRow = StorageItemFm & {
  // Positive only when the item counts as under produced, so that sorting on
  // the column matches exactly what is rendered in it.
  deficit: number;
};
