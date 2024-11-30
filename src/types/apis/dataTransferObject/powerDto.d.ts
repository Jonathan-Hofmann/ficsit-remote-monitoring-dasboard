export type PowerDto = {
  CircuitGroupID: number;
  PowerProduction: number;
  PowerConsumed: number;
  PowerCapacity: number;
  PowerMaxConsumed: number;
  BatteryInput: number;
  BatteryOutput: number;
  BatteryDifferential: number;
  BatteryPercent: number;
  BatteryCapacity: number;
  BatteryTimeEmpty: string;
  BatteryTimeFull: string;
  AssociatedCircuits?: number[] | null;
  FuseTriggered: boolean;
};
