import type { TrainStatusEnum } from "../../../enums/trainStatus.enum";

export type TrainFm = {
  name: string;
  trainName?: string;
  status: TrainStatusEnum;
  nextStation: string;
  stationPlanning: string[];
  isDerailed: boolean;
  forwardSpeed: number;
  throttlePercent: number;
  powerConsumed: number;
  location: {
    x: number;
    y: number;
    z: number;
  };
};
