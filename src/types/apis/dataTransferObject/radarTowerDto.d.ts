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

type Fauna = {
  Name: string;
  ClassName: string;
  Remaining: number;
};

type Signal = {
  Name: string;
  ClassName: string;
  Remaining: number;
};

type Flora = {
  Name: string;
  ClassName: string;
  Remaining: number;
};

export type RadarTowerDto = {
  Name: string;
  ClassName: string;
  location: Location;
  RevealRadius: number;
  RevealType: string;
  ScannedResourceNodes?: null[] | null;
  Fauna?: Fauna[] | null;
  Signal?: Signal[] | null;
  Flora?: Flora[] | null;
  features: Features;
};
