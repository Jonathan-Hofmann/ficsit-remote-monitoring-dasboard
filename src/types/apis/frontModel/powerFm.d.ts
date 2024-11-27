export type PowerFm = {
  id: number;
  powerCapacity: number;
  powerConsumed: number;
  powerMaxConsumed: number;
  powerProduction: number;
  batteryCapacity: number;
  batteryTimeFull: string;
  batteryTimeEmpty: string;
  batteryPercent: number;
  batteryDifferential: number;
  fuseTriggered: boolean;
};
