import type { DroneStationDto } from "../types/apis/dataTransferObject/droneStationDto";
import type { DroneStationFm } from "../types/apis/frontModel/droneStationFm";
import { droneStationStatusDtoToFm } from "./droneStationStatusDtoToFm.mapper";

export const droneStationDtoToFm = (
  dto: DroneStationDto[],
): DroneStationFm[] => {
  return dto.map((droneStationDto) => ({
    name: droneStationDto.Name,
    droneStatus: droneStationStatusDtoToFm(droneStationDto.DroneStatus),
    totalTransportRateEstimation: droneStationDto.EstTotalTransRate,
    activeFuel: {
      fuelCostRateEstimation: droneStationDto.ActiveFuel.EstimatedFuelCostRate,
    },
    latestRoundTrip: droneStationDto.LatestRndTrip,
    averageRoundTrip: droneStationDto.AvgRndTrip,
  }));
};
