import type { DroneFlyingModeEnum } from "../../../enums/droneFlyingMode.enum";

export type DroneFm = {
  id: string;
  homeStation: string;
  pairedStation: string;
  currentDestination: string;
  currentFlyingMode: DroneFlyingModeEnum;
  flyingSpeed: number;
  location: {
    x: number;
    y: number;
    z: number;
  };
};
