import type { GameItemsEnum } from "../../enums/gameItems.enum";
import type { GameItemsCategoryEnum } from "../../enums/gameItemsCategory.enum";

export type GameItemVehicle = {
  name: GameItemsEnum;
  category: GameItemsCategoryEnum.Vehicle;
};
