type Location = {
  x: number;
  y: number;
  z: number;
  rotation: number;
};
type TimeTableEntity = {
  StationName: string;
};
type VehiclesEntity = {
  Name: string;
  ClassName: string;
  TotalMass: number;
  PayloadMass: number;
  MaxPayloadMass: number;
  Inventory?: (InventoryEntity | null)[] | null;
};
type InventoryEntity = {
  Name: string;
  ClassName: string;
  Amount: number;
};
type Features = {
  properties: Properties;
  geometry: Geometry;
};
type Properties = {
  name: string;
  type: string;
};
type Geometry = {
  coordinates: Coordinates;
  type: string;
};
type Coordinates = {
  x: number;
  y: number;
  z: number;
};
type PowerInfo = {
  CircuitGroupID: number;
  CircuitID: number;
  PowerConsumed: number;
  MaxPowerConsumed: number;
};

export type TrainsDto = {
  Name: string;
  ClassName: string;
  location: Location;
  TotalMass: number;
  PayloadMass: number;
  MaxPayloadMass: number;
  ForwardSpeed: number;
  ThrottlePercent: number;
  TrainStation: string;
  Derailed: boolean;
  PendingDerail: boolean;
  Status: string;
  TimeTable?: (TimeTableEntity | null)[] | null;
  Vehicles?: VehiclesEntity[] | null;
  features: Features;
  PowerInfo: PowerInfo;
};
