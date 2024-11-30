type Location = {
  x: number;
  y: number;
  z: number;
  rotation: number;
};
type ActiveMilestone = {
  Name: string;
  ClassName: string;
  TechTier: number;
  Type: string;
  Recipes?: null[] | null;
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

export type HUBTerminalDto = {
  Name: string;
  ClassName: string;
  location: Location;
  ActiveMilestone: ActiveMilestone;
  ShipDock: boolean;
  SchName: string;
  ShipReturn: string;
  features: Features;
};
