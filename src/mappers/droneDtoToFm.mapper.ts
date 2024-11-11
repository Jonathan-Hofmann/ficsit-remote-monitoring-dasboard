import { DroneFlyingModeEnum } from "../enums/droneFlyingMode.enum";
import type { DroneDto } from "../types/apis/dataTransferObject/droneDto";
import type { DroneFm } from "../types/apis/frontModel/droneFm";
import { enumDtoToFmMapper } from "./enumDtoToFm.mapper";

export const droneDtoToFmMapper = (dto: DroneDto[]): DroneFm[] => {
  return dto.map((droneDto) => ({
    id: droneDto.ID,
    homeStation: droneDto.HomeStation,
    pairedStation: droneDto.PairedStation,
    currentDestination: droneDto.CurrentDestination,
    currentFlyingMode: enumDtoToFmMapper(
      droneDto.CurrentFlyingMode,
      DroneFlyingModeEnum,
      "DroneFlyingModeEnum",
    ),
    flyingSpeed: droneDto.FlyingSpeed,
    location: {
      x: droneDto.location.x,
      y: droneDto.location.y,
      z: droneDto.location.z,
    },
  }));
};
