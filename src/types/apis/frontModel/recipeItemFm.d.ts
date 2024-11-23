import type { GameClassNamesEnum } from "../../../enums/gameClassNames.enum";

export type RecipeItemFm = {
  name: string;
  className: GameClassNamesEnum;
  amount: number;
  currentUsage: number;
  maxUsage: number;
  usingPercent: number;
};
