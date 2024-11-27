import type { GameItemsEnum } from "../../enums/gameItems.enum";
import type { GameItemsCategoryEnum } from "../../enums/gameItemsCategory.enum";
import type { GameResourcesTypeEnum } from "../../enums/gameResourcesType.enum";

export type GameItemResource = {
  name: GameItemsEnum;
  category: GameItemsCategoryEnum.Resource;
  resourceType: GameResourcesTypeEnum;
};
