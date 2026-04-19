import { GameClassNamesEnum } from "../enums/gameClassNames.enum";
import type { GeneratorDto } from "../types/apis/dataTransferObject/generatorsDto";
import type { GeothermalGeneratorDto } from "../types/apis/dataTransferObject/geothermalGeneratorDto";
import type { GeneratorFm } from "../types/apis/frontModel/generatorsFm";
import { enumDtoToFmMapper } from "./enumDtoToFm.mapper";
import { v4 as uuidv4 } from 'uuid';

export const generatorsDtoToFmMapper = (
  dto: GeneratorDto[] | GeothermalGeneratorDto[],
): GeneratorFm[] => {
  return dto.map((generatorDto) => ({
    id: uuidv4(),
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
