import type { GameItemsEnum } from "../../../enums/gameItems.enum";
import type { GameItemsCategoryEnum } from "../../../enums/gameItemsCategory.enum";

export type GameItemEquipment = {
  name: GameItemsEnum;
  category: GameItemsCategoryEnum.Equipment;
};
