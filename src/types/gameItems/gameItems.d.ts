import type { GameItemDefault } from "./default";
import type { GameItemEquipment } from "./equipement";
import type { GameItemGeneratorBuilding } from "./generatorBuilding";
import type { GameItemManufacturerBuilding } from "./manufacturerBuilding";
import type { GameItemOtherBuilding } from "./otherBuilding";
import type { GameItemResource } from "./resource";
import type { GameItemVehicle } from "./vehicle";

export type GameItems =
  | GameItemDefault
  | GameItemResource
  | GameItemGeneratorBuilding
  | GameItemManufacturerBuilding
  | GameItemOtherBuilding
  | GameItemEquipment
  | GameItemVehicle;
