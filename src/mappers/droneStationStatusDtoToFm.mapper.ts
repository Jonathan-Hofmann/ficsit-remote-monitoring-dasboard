import { DroneStationStatusEnum } from "../enums/droneStationStatus.enum";

export const droneStationStatusDtoToFm = (
  status: string,
): DroneStationStatusEnum => {
  switch (status) {
    case "No Drones":
      return DroneStationStatusEnum.No_Drones;
    case "Cannot Unload":
      return DroneStationStatusEnum.Cannot_Unload;
    case "Docked":
      return DroneStationStatusEnum.Docked;
    case "Takeoff":
      return DroneStationStatusEnum.Takeoff;
    default:
      throw new Error(
        "droneStationStatusDtoToFm.ts => Drone Status not handled",
      );
  }
};
