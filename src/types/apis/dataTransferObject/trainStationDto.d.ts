type Location = {
  x: number;
  y: number;
  z: number;
  rotation: number;
};
type CargoInventoryEntity = {
  Name: string;
  ClassName: string;
  location: Location;
  PowerInfo: PowerInfo;
  TransferRate: number;
  InflowRate: number;
  OutflowRate: number;
  LoadingMode: string;
  LoadingStatus: string;
  DockingStatus: string;
  Inventory?: (InventoryEntity | null)[] | null;
};
type PowerInfo = {
  CircuitGroupID: number;
  CircuitID: number;
  PowerConsumed: number;
  MaxPowerConsumed: number;
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

export type TrainStationDto = {
  Name: string;
  ClassName: string;
  location: Location;
  TransferRate: number;
  InflowRate: number;
  OutflowRate: number;
  CargoInventory?: CargoInventoryEntity[] | null;
  features: Features;
  PowerInfo: PowerInfo;
};
