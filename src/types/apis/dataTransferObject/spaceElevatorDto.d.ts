type Location = {
  x: number;
  y: number;
  z: number;
  rotation: number;
};
type CurrentPhaseEntity = {
  Name: string;
  ClassName: string;
  Amount: number;
  RemainingCost: number;
  TotalCost: number;
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

export type SpaceElevatorDto = {
  Name: string;
  ClassName: string;
  location: Location;
  CurrentPhase?: CurrentPhaseEntity[] | null;
  FullyUpgraded: boolean;
  UpgradeReady: boolean;
  features: Features;
};
