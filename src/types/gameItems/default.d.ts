import type { GameItemsEnum } from "../../enums/gameItems.enum";
import type { GameItemsCategoryEnum } from "../../enums/gameItemsCategory.enum";

export type GameItemDefault = {
  name: GameItemsEnum;
  category: GameItemsCategoryEnum.Default;
};
