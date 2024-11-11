import { GameBuildingsTypeEnum } from "../enums/gameBuildingsType.enum";
import type { GameClassNamesEnum } from "../enums/gameClassNames.enum";
import { GameItemsCategoryEnum } from "../enums/gameItemsCategory.enum";
import type { GameItems } from "../types/gameItems";
import type { GameItemsDictionnary } from "../types/gameItemsDictionnary";

type Args = {
  gameItemsDictionnary: GameItemsDictionnary;
  filter: GameItemsCategoryEnum | GameBuildingsTypeEnum;
};

export const gameItemFilterHelper = ({
  gameItemsDictionnary,
  filter,
}: Args): [GameClassNamesEnum, GameItems][] => {
  const filteredArray = Object.entries(gameItemsDictionnary) as [
    GameClassNamesEnum,
    GameItems,
  ][];
  switch (filter) {
    case GameItemsCategoryEnum.Resource: {
      return filteredArray.filter(
        ([, item]) => item.category === GameItemsCategoryEnum.Resource,
      );
    }
    case GameBuildingsTypeEnum.Generator:
      return filteredArray.filter(
        ([, item]) =>
          item.category === GameItemsCategoryEnum.Building &&
          item.buildingType === GameBuildingsTypeEnum.Generator,
      );
    default:
      return filteredArray;
  }
};
