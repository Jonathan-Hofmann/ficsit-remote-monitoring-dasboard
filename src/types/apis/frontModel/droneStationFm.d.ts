import type { DroneStationStatusEnum } from "../../../enums/droneStationStatus.enum";

export type DroneStationFm = {
  name: string;
  droneStatus: DroneStationStatusEnum;
  totalTransportRateEstimation: number;
  activeFuel: {
    fuelCostRateEstimation: number;
  };
  latestRoundTrip: number;
  averageRoundTrip: string;
};
