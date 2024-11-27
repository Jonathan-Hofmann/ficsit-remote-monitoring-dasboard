import type { TrainStationLoadingStatusEnum } from "../../../enums/trainStationLoadingStatus.enum";

export type TrainStationFm = {
  name: string;
  loadingStatus: TrainStationLoadingStatusEnum;
  location: {
    x: number;
    y: number;
    z: number;
  };
};
