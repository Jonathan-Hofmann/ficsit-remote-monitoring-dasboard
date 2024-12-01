// Grouped type from BiomassGeneratorDto ; CoalGeneratorDto ; FuelGeneratorDto ; NuclearGeneratorDto but not Geothermal wich have specifications
export type Location = {
  x: number;
  y: number;
  z: number;
  rotation: number;
};
export type Supplement = {
  Name: string;
  ClassName: string;
  CurrentConsumed: number;
  MaxConsumed: number;
  PercentFull: number;
};
export type AvailableFuelEntity = {
  Name: string;
  ClassName: string;
  Amount: number;
};
export type Features = {
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
export type FuelInventoryItem = {
  Name: string;
  ClassName: string;
  Amount: number;
  MaxAmount: number;
}

export type GeneratorDto = {
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
  AvailableFuel?: AvailableFuelEntity[] | null;
  WasteInventory?: null[] | null;
  features: Features;
  PowerInfo: PowerInfo;
  FuelInventory: FuelInventoryItem[]
};
