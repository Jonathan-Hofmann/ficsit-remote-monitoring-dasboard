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

export type SwitchesDto = {
  Name: string;
  ClassName: string;
  location: Location;
  SwitchTag: string;
  Connected0: number;
  IsOn: boolean;
  Connected1: number;
  Primary: number;
  Secondary: number;
  features: Features;
};
