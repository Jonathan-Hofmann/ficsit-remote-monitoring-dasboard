type Location = {
  x: number;
  y: number;
  z: number;
  rotation: number;
};
type InventoryEntityOrFuelInventoryEntity = {
  Name: string;
  ClassName: string;
  Amount: number;
};
type InventoryEntityOrFuelInventoryEntity1 = {
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

export type TruckStationDto = {
  Name: string;
  ClassName: string;
  location: Location;
  DockVehicleCount: number;
  LoadMode: string;
  TransferRate: number;
  MaxTransferRate: number;
  StationStatus: string;
  FuelRate: number;
  Inventory?: (InventoryEntityOrFuelInventoryEntity | null)[] | null;
  FuelInventory?: (InventoryEntityOrFuelInventoryEntity1 | null)[] | null;
  features: Features;
  PowerInfo: PowerInfo;
};
