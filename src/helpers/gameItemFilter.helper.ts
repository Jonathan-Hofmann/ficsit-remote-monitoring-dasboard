import { GameBuildingsTypeEnum } from "../enums/gameBuildingsType.enum";
import type { GameClassNamesEnum } from "../enums/gameClassNames.enum";
import { GameItemsCategoryEnum } from "../enums/gameItemsCategory.enum";
import type { GameItems } from "../types/gameItems/gameItems";
import type { GameItemGeneratorBuilding } from "../types/gameItems/generatorBuilding";
import type { GameItemManufacturerBuilding } from "../types/gameItems/manufacturerBuilding";
import type { GameItemsDictionary } from "../types/gameItemsDictionary";

type Args = {
  gameItemsDictionary: GameItemsDictionary;
  filter: GameItemsCategoryEnum | "generatorsWithEndpoint" | "factories";
};

export const gameItemFilterHelper = ({
  gameItemsDictionary,
  filter,
}: Args): [GameClassNamesEnum, GameItems][] => {
  const filteredArray = Object.entries(gameItemsDictionary) as [
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
    case "factories":
      return filteredArray.filter(([, item]) => {
        const buildingItem = item as GameItemManufacturerBuilding;
        return (
          buildingItem.category === GameItemsCategoryEnum.Building &&
          buildingItem.buildingType === GameBuildingsTypeEnum.Manufacturer
        );
      });
    default:
      return filteredArray;
  }
};
