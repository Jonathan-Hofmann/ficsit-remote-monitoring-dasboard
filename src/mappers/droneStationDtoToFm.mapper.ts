import { DroneStationStatusEnum } from "../enums/droneStationStatus.enum";
import type { DroneStationDto } from "../types/apis/dataTransferObject/droneStationDto";
import type { DroneStationFm } from "../types/apis/frontModel/droneStationFm";
import { enumDtoToFmMapper } from "./enumDtoToFm.mapper";

export const droneStationDtoToFmMapper = (
  dto: DroneStationDto[],
): DroneStationFm[] => {
  return dto.map((droneStationDto) => ({
    name: droneStationDto.Name,
    droneStatus: enumDtoToFmMapper(
      droneStationDto.DroneStatus,
      DroneStationStatusEnum,
      "DroneStationStatusEnum",
    ),
    totalTransportRateEstimation: droneStationDto.EstTotalTransRate,
    activeFuel: {
      fuelCostRateEstimation: droneStationDto.ActiveFuel.EstimatedFuelCostRate,
    },
    latestRoundTrip: droneStationDto.LatestRndTrip,
    averageRoundTrip: droneStationDto.AvgRndTrip,
  }));
};
