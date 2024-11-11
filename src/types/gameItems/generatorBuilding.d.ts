import type { GameBuildingsTypeEnum } from "../../../enums/gameBuildingsType.enum";
import type { GameItemsEnum } from "../../../enums/gameItems.enum";
import type { EndpointEnum } from "../../enums/endpoint.enum";

export type GameItemGeneratorBuilding = {
  name: GameItemsEnum;
  buildingType: GameBuildingsTypeEnum.Generator;
  category: GameItemsCategoryEnum.Building;
  endpoint: EndpointEnum | undefined;
};
