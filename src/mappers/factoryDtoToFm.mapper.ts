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
        const inputInventoryItem = factoryDto.InputInventory ? factoryDto.InputInventory.filter((outputItem) => outputItem?.ClassName === ingredientDto.ClassName)[0] : undefined
        return {
          name: ingredientDto?.Name,
          className: enumDtoToFmMapper(
            ingredientDto?.ClassName,
            GameClassNamesEnum,
            "GameClassNamesEnum",
          ),
          amount: inputInventoryItem ? inputInventoryItem.Amount : 0,
          maxAmount: inputInventoryItem ? inputInventoryItem.MaxAmount: 0,
          recipeAmount: ingredientDto?.Amount,
          currentUsage: ingredientDto?.CurrentConsumed,
          maxUsage: ingredientDto?.MaxConsumed,
          usingPercent: ingredientDto?.ConsPercent,
        };
      }),
    products: (factoryDto.production ?? [])
      .filter((el): el is NonNullable<typeof el> => !!el)
      .map((productDto) => {
        const outputInventoryItem = factoryDto.OutputInventory ? factoryDto.OutputInventory.filter((outputItem) => outputItem?.ClassName === productDto.ClassName)[0] : undefined
        return {
          name: productDto?.Name,
          className: enumDtoToFmMapper(
            productDto?.ClassName,
            GameClassNamesEnum,
            "GameClassNamesEnum",
          ),
          amount: outputInventoryItem ? outputInventoryItem.Amount : 0,
          maxAmount: outputInventoryItem ? outputInventoryItem.MaxAmount: 0,
          recipeAmount: productDto?.Amount,
          currentUsage: productDto?.CurrentProd,
          maxUsage: productDto?.MaxProd,
          usingPercent: productDto?.ProdPercent,
        };
      }),
    clockSpeed: factoryDto.ManuSpeed,
  }));
};
