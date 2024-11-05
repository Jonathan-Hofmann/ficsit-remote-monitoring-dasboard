type Location = {
  x: number;
  y: number;
  z: number;
  rotation: number;
};
type InputInventoryEntityOrFuelInventoryEntityOrOutputInventoryEntity = {
  Name: string;
  ClassName: string;
  Amount: number;
};
type InputInventoryEntityOrFuelInventoryEntityOrOutputInventoryEntity1 = {
  Name: string;
  ClassName: string;
  Amount: number;
};
type InputInventoryEntityOrFuelInventoryEntityOrOutputInventoryEntity2 = {
  Name: string;
  ClassName: string;
  Amount: number;
};
type FuelInfoEntityOrActiveFuel = {
  FuelName: string;
  SingleTripFuelCost: number;
  EstimatedTransportRate: number;
  EstimatedRoundTripTime: number;
  EstimatedFuelCostRate: number;
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

export type DroneStationDto = {
  Name: string;
  ClassName: string;
  location: Location;
  InputInventory?:
    | (InputInventoryEntityOrFuelInventoryEntityOrOutputInventoryEntity | null)[]
    | null;
  OutputInventory?:
    | (InputInventoryEntityOrFuelInventoryEntityOrOutputInventoryEntity1 | null)[]
    | null;
  FuelInventory?:
    | (InputInventoryEntityOrFuelInventoryEntityOrOutputInventoryEntity2 | null)[]
    | null;
  PairedStation: string;
  DroneStatus: string;
  AvgIncRate: number;
  AvgIncStack: number;
  AvgOutRate: number;
  AvgOutStack: number;
  AvgRndTrip: string;
  AvgTotalIncRate: number;
  AvgTotalIncStack: number;
  AvgTotalOutRate: number;
  AvgTotalOutStack: number;
  AvgTripIncAmt: number;
  AvgTripOutAmt: number;
  EstTotalTransRate: number;
  EstLatestTotalIncStack: number;
  EstLatestTotalOutStack: number;
  LatestIncStack: number;
  LatestOutStack: number;
  LatestRndTrip: number;
  LatestTripIncAmt: number;
  LatestTripOutAmt: number;
  MedianRndTrip: string;
  MedianTripIncAmt: number;
  MedianTripOutAmt: number;
  ActiveFuel: FuelInfoEntityOrActiveFuel;
  FuelInfo?: FuelInfoEntityOrActiveFuel[] | null;
  features: Features;
  PowerInfo: PowerInfo;
};
