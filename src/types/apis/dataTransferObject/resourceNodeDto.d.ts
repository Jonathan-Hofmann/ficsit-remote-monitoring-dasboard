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

export type ResourceNodeDto = {
  Name: string;
  ClassName: string;
  Purity: string;
  EnumPurity: string;
  ResourceForm: string;
  NodeType: string;
  Exploited: boolean;
  location: Location;
  features: Features;
};
