type Location = {
  x: number;
  y: number;
  z: number;
  rotation: number;
};
type ProductionEntity = {
  Name: string;
  ClassName: string;
  Amount: number;
  CurrentProd: number;
  MaxProd: number;
  ProdPercent: number;
};
type IngredientsEntity = {
  Name: string;
  ClassName: string;
  Amount: number;
  CurrentConsumed: number;
  MaxConsumed: number;
  ConsPercent: number;
};
type PowerInfo = {
  CircuitGroupID: number;
  CircuitID: number;
  PowerConsumed: number;
  MaxPowerConsumed: number;
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

export type AssemblerDto = {
  ID: string;
  Name: string;
  ClassName: string;
  location: Location;
  Recipe: string;
  RecipeClassName: string;
  production?: ProductionEntity[] | null;
  ingredients?: IngredientsEntity[] | null;
  Productivity: number;
  ManuSpeed: number;
  IsConfigured: boolean;
  IsProducing: boolean;
  IsPaused: boolean;
  PowerInfo: PowerInfo;
  features: Features;
};
