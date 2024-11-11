import type { EndpointEnum } from "../../../enums/endpoint.enum";
import type { GameBuildingsTypeEnum } from "../../../enums/gameBuildingsType.enum";
import type { GameItemsEnum } from "../../../enums/gameItems.enum";

export type GameItemGeneratorBuilding = {
  name: GameItemsEnum;
  buildingType: GameBuildingsTypeEnum.Generator;
  category: GameItemsCategoryEnum.Building;
  endpoint: EndpointEnum | undefined;
};
