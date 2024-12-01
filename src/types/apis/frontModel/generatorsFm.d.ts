import type { GameClassNamesEnum } from "../../../enums/gameClassNames.enum";
import { AvailableFuelEntity, Features, PowerInfo, Supplement, Location, FuelInventoryItem } from "../dataTransferObject/generatorsDto";

export type GeneratorFm = {
  id: string;
  name: string;
  location: Location;
  className: GameClassNamesEnum;
  isFullSpeed: boolean;
  isGeneratorCanStart: boolean;
  dynamicProductionCapacity: number;
  baseProd: number,
  dynamicProductionFactor: number,
  regulatedDemandProduction: number,
  canStart: boolean,
  loadPercentage: number,
  productionPowerConsumption: number,
  currentPotential: number,
  productionCapacity: number,
  defaultProductionCapacity: number,
  powerProductionPotential: number,
  fuelAmount: number,
  supplement: Supplement,
  nuclearWarning: string,
  fuelResource: string,
  geoMinPower: number,
  geoMaxPower: number,
  availableFuel?: AvailableFuelEntity[] | null,
  wasteInventory?: null[] | null,
  features: Features,
  powerInfo: PowerInfo,
  fuelInventory: FuelInventoryItem[]
};
