import type {
  GameBuildingsTypeEnum,
  GameRefsResourceTypeEnum,
} from "../enums/gameBuildingsType.enum";
import type { GameItemsEnum } from "../enums/gameItems.enum";
import type { GameItemsCategoryEnum } from "../enums/gameItemsCategory.enum";

export type GameItems = {
  name: GameItemsEnum;
} & (
  | {
      category: GameItemsCategoryEnum.Resource;
      resourceType: GameRefsResourceTypeEnum;
      buildingType?: never;
    }
  | {
      category: GameItemsCategoryEnum.Building;
      resourceType?: never;
      buildingType: GameBuildingsTypeEnum;
    }
  | {
      category: Exclude<
        GameItemsCategoryEnum,
        GameItemsCategoryEnum.Resource | GameItemsCategoryEnum.Building
      >;
      resourceType?: never;
      buildingType?: never;
    }
);
