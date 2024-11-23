import type { GameClassNamesEnum } from "../../../enums/gameClassNames.enum";
import type { GameItemsEnum } from "../../../enums/gameItems.enum";

export type ProductionStatFm = {
  name: GameItemsEnum;
  className: GameClassNamesEnum;
  currentProduction: number;
  currentConsumption: number;
  percentProduction: number;
  percentConsumption: number;
  maxProduction: number;
  maxConsumption: number;
  productionPerMinunte: string;
};
