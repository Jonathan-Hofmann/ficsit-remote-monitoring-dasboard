type Location = {
  x: number;
  y: number;
  z: number;
  rotation: number;
};
type Supplement = {
  ClassName: string;
  CurrentConsumed: number;
  MaxConsumed: number;
  PercentFull: number;
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

export type GeothermalGeneratorDto = {
  Name: string;
  ClassName: string;
  location: Location;
  BaseProd: number;
  DynamicProdCapacity: number;
  DynamicProdDemandFactor: number;
  RegulatedDemandProd: number;
  IsFullSpeed: boolean;
  CanStart: boolean;
  LoadPercentage: number;
  ProdPowerConsumption: number;
  CurrentPotential: number;
  ProductionCapacity: number;
  DefaultProductionCapacity: number;
  PowerProductionPotential: number;
  FuelAmount: number;
  Supplement: Supplement;
  NuclearWarning: string;
  FuelResource: string;
  GeoMinPower: number;
  GeoMaxPower: number;
  AvailableFuel?: null[] | null;
  WasteInventory?: null[] | null;
  features: Features;
  PowerInfo: PowerInfo;
};
