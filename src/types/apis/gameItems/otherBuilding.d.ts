import type { GameBuildingsTypeEnum } from "../../../enums/gameBuildingsType.enum";
import type { GameItemsEnum } from "../../../enums/gameItems.enum";

export type GameItemOtherBuilding = {
  name: GameItemsEnum;
  category: GameItemsCategoryEnum.Building;
  buildingType: Exclude<GameBuildingsTypeEnum, GameBuildingsTypeEnum.Generator>;
};
