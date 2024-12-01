import { GameClassNamesEnum } from "../enums/gameClassNames.enum";
import type { GeneratorDto } from "../types/apis/dataTransferObject/generatorsDto";
// import type { GeothermalGeneratorDto } from "../types/apis/dataTransferObject/geothermalGeneratorDto";
import type { GeneratorFm } from "../types/apis/frontModel/generatorsFm";
import { enumDtoToFmMapper } from "./enumDtoToFm.mapper";

export const generatorsDtoToFmMapper = (
  dto: GeneratorDto[],
): GeneratorFm[] => {
  return dto.map((generatorDto) => ({
    id: crypto.randomUUID(),
    className: enumDtoToFmMapper(
      generatorDto.ClassName,
      GameClassNamesEnum,
      "GameClassNamesEnum",
    ),
    location: generatorDto.location,
    name: generatorDto.Name,
    isFullSpeed: generatorDto.IsFullSpeed,
    isGeneratorCanStart: generatorDto.CanStart,
    dynamicProductionCapacity: generatorDto.DynamicProdCapacity,
    baseProd: generatorDto.BaseProd,
    dynamicProductionFactor: generatorDto.DynamicProdDemandFactor,
    regulatedDemandProduction: generatorDto.RegulatedDemandProd,
    canStart: generatorDto.CanStart,
    loadPercentage: generatorDto.LoadPercentage,
    productionPowerConsumption: generatorDto.ProdPowerConsumption,
    currentPotential: generatorDto.CurrentPotential,
    productionCapacity: generatorDto.ProductionCapacity,
    defaultProductionCapacity: generatorDto.DefaultProductionCapacity,
    powerProductionPotential: generatorDto.PowerProductionPotential,
    fuelAmount: generatorDto.FuelAmount,
    supplement: generatorDto.Supplement,
    nuclearWarning: generatorDto.NuclearWarning,
    fuelResource: generatorDto.FuelResource,
    geoMinPower: generatorDto.GeoMinPower,
    geoMaxPower: generatorDto.GeoMaxPower,
    availableFuel: generatorDto.AvailableFuel,
    wasteInventory: generatorDto.WasteInventory,
    features: generatorDto.features,
    powerInfo: generatorDto.PowerInfo,
    fuelInventory: generatorDto.FuelInventory
  }));
};
