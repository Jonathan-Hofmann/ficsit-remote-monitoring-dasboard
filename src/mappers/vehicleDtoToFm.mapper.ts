import { gameItemsDictionnary } from "../dictionaries/gameItems.dictionary";
import { GameClassNamesEnum } from "../enums/gameClassNames.enum";
import type { VehicleDto } from "../types/apis/dataTransferObject/vehicleDto";
import type { VehicleFm } from "../types/apis/frontModel/vehicleFm";
import { enumDtoToFmMapper } from "./enumDtoToFm.mapper";

export const vehicleDtoToFmMapper = (dto: VehicleDto[]): VehicleFm[] => {
  return dto.map((vehicleDto) => {
    const vehicleClassName = enumDtoToFmMapper(
      vehicleDto.ClassName,
      GameClassNamesEnum,
      "GameClassNamesEnum",
    );

    return {
      id: vehicleDto.ID,
      name: gameItemsDictionnary[vehicleClassName].name,
      className: vehicleClassName,
      autopilot: vehicleDto.Autopilot,
      speed: vehicleDto.ForwardSpeed,
      airborne: vehicleDto.Airborne,
      currentGear: vehicleDto.CurrentGear,
      engineRPM: vehicleDto.EngineRPM,
      fuel: vehicleDto?.FuelInventory?.flatMap((inventory) => {
        if (!inventory) return [];
        return {
          name: gameItemsDictionnary[
            enumDtoToFmMapper(
              inventory.ClassName,
              GameClassNamesEnum,
              "GameClassNamesEnum",
            )
          ].name,
          className: enumDtoToFmMapper(
            inventory?.ClassName,
            GameClassNamesEnum,
            "GameClassNamesEnum",
          ),
          amount: inventory?.Amount,
        };
      }),
    };
  });
};
