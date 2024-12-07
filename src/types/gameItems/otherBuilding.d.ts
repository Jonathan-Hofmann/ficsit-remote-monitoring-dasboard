import type { GameBuildingsTypeEnum } from "../../enums/gameBuildingsType.enum";
import type { GameItemsEnum } from "../../enums/gameItems.enum";
import type { GameItemsCategoryEnum } from "../../enums/gameItemsCategory.enum";

export type GameItemOtherBuilding = {
	name: GameItemsEnum;
	category: GameItemsCategoryEnum.Building;
	// Exclude references other buildings type file handled
	buildingType: Exclude<
		GameBuildingsTypeEnum,
		GameBuildingsTypeEnum.Generator | GameBuildingsTypeEnum.Manufacturer
	>;
};
