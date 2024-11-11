import { GameBuildingsTypeEnum } from "../enums/gameBuildingsType.enum";
import type { GameClassNamesEnum } from "../enums/gameClassNames.enum";
import { GameItemsCategoryEnum } from "../enums/gameItemsCategory.enum";
import type { GameItems } from "../types/apis/gameItems/gameItems";
import type { GameItemGeneratorBuilding } from "../types/apis/gameItems/generatorBuilding";
import type { GameItemsDictionnary } from "../types/gameItemsDictionnary";

type Args = {
  gameItemsDictionnary: GameItemsDictionnary;
  filter: GameItemsCategoryEnum | "generatorsWithEndpoint";
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
    case "generatorsWithEndpoint":
      return filteredArray.filter(([, item]) => {
        const buildingItem = item as GameItemGeneratorBuilding;
        return (
          buildingItem.category === GameItemsCategoryEnum.Building &&
          buildingItem.buildingType === GameBuildingsTypeEnum.Generator &&
          !!buildingItem.endpoint
        );
      });
    default:
      return filteredArray;
  }
};
