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

export type DropPodDto = {
  ID: string;
  location: Location;
  Opened: boolean;
  Looted: boolean;
  RepairItem: string;
  RepairItemClass: string;
  RepairAmount: number;
  PowerRequired: number;
  features: Features;
};
