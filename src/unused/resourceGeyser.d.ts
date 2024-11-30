type CoordinatesOrLocation = {
  X: number;
  Y: number;
  Z: number;
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
  coordinates: CoordinatesOrLocation;
  type: string;
};

export type ResourceGeyser = {
  Name: string;
  ClassName: string;
  location: CoordinatesOrLocation;
  EnumPurity: string;
  Purity: string;
  NodeType: string;
  Exploited: boolean;
  features: Features;
};
