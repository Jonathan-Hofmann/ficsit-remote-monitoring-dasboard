import { GameClassNamesEnum } from "../enums/gameClassNames.enum";
import type { GeneratorDto } from "../types/apis/dataTransferObject/generatorsDto";
import type { GeothermalGeneratorDto } from "../types/apis/dataTransferObject/geothermalGeneratorDto";
import type { GeneratorFm } from "../types/apis/frontModel/generatorsFm";
import { enumDtoToFmMapper } from "./enumDtoToFm.mapper";

export const generatorsDtoToFmMapper = (
  dto: GeneratorDto[] | GeothermalGeneratorDto[],
): GeneratorFm[] => {
  return dto.map((generatorDto) => ({
    id: crypto.randomUUID(),
    className: enumDtoToFmMapper(
      generatorDto.ClassName,
      GameClassNamesEnum,
      "GameClassNamesEnum",
    ),
    isFullSpeed: generatorDto.IsFullSpeed,
    isGeneratorCanStart: generatorDto.CanStart,
    dynamicProductionCapacity: generatorDto.DynamicProdCapacity,
  }));
};
