type Location = {
  x: number;
  y: number;
  z: number;
  rotation: number;
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

export type DroneDto = {
  ID: string;
  Name: string;
  ClassName: string;
  location: Location;
  HomeStation: string;
  PairedStation: string;
  CurrentDestination: string;
  FlyingSpeed: number;
  CurrentFlyingMode: string;
  features: Features;
};
