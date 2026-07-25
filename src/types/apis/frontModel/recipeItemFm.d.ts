import type { GameClassNamesEnum } from "../../../enums/gameClassNames.enum";

export type RecipeItemFm = {
  name: string;
  className: GameClassNamesEnum;
  amount: number;
  maxAmount: number;
  recipeAmount: number;
  currentUsage: number;
  maxUsage: number;
  usingPercent: number;
};
