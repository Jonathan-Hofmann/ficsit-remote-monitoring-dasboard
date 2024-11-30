type Location = {
  x: number;
  y: number;
  z: number;
  rotation: number;
};
type InventoryEntity = {
  Name: string;
  ClassName: string;
  Amount: number;
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

export type StorageInvDto = {
  Name: string;
  ClassName: string;
  location: Location;
  Inventory?: (InventoryEntity | null)[] | null;
  features: Features;
};
