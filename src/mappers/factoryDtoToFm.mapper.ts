import { GameClassNamesEnum } from "../enums/gameClassNames.enum";
import type { FactoryDto } from "../types/apis/dataTransferObject/factoryDto";
import type { FactoryFm } from "../types/apis/frontModel/factoryFm";
import { enumDtoToFmMapper } from "./enumDtoToFm.mapper";

export const factoryDtoToFmMapper = (dto: FactoryDto[]): FactoryFm[] => {
  return dto.map((factoryDto) => ({
    id: factoryDto.ID,
    name: factoryDto.Name,
    className: enumDtoToFmMapper(
      factoryDto.ClassName,
      GameClassNamesEnum,
      "GameClassNamesEnum",
    ),
    isConfigured: factoryDto.IsConfigured,
    isProducing: factoryDto.IsProducing,
    recipe: factoryDto.Recipe,
    ingredients: (factoryDto.ingredients ?? [])
      .filter((el): el is NonNullable<typeof el> => !!el)
      .map((ingredientDto) => {
        return {
          name: ingredientDto?.Name,
          className: enumDtoToFmMapper(
            ingredientDto?.ClassName,
            GameClassNamesEnum,
            "GameClassNamesEnum",
          ),
          amount: ingredientDto?.Amount,
          currentUsage: ingredientDto?.CurrentConsumed,
          maxUsage: ingredientDto?.MaxConsumed,
          usingPercent: ingredientDto?.ConsPercent,
        };
      }),
    products: (factoryDto.production ?? [])
      .filter((el): el is NonNullable<typeof el> => !!el)
      .map((productDto) => {
        return {
          name: productDto?.Name,
          className: enumDtoToFmMapper(
            productDto?.ClassName,
            GameClassNamesEnum,
            "GameClassNamesEnum",
          ),
          amount: productDto?.Amount,
          currentUsage: productDto?.CurrentProd,
          maxUsage: productDto?.MaxProd,
          usingPercent: productDto?.ProdPercent,
        };
      }),
    clockSpeed: factoryDto.ManuSpeed,
  }));
};
