import type { DroneDto } from "../types/apis/dataTransferObject/droneDto";
import type { DroneFm } from "../types/apis/frontModel/droneFm";
import { droneFlyingModeDtoToFm } from "./droneFlyingModeDtoToFm.mapper";

export const droneDtoToFmMapper = (dto: DroneDto[]): DroneFm[] => {
  return dto.map((droneDto) => ({
    id: droneDto.ID,
    homeStation: droneDto.HomeStation,
    pairedStation: droneDto.PairedStation,
    currentDestination: droneDto.CurrentDestination,
    currentFlyingMode: droneFlyingModeDtoToFm(droneDto.CurrentFlyingMode),
    flyingSpeed: droneDto.FlyingSpeed,
    location: {
      x: droneDto.location.x,
      y: droneDto.location.y,
      z: droneDto.location.z,
    },
  }));
};
