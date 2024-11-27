type CoordinatesOrLocation0OrLocation1 = {
  x: number;
  y: number;
  z: number;
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
  coordinates: CoordinatesOrLocation0OrLocation1;
  type: string;
};

export type PipesDto = {
  Name: string;
  ClassName: string;
  location0: CoordinatesOrLocation0OrLocation1;
  Connected0: boolean;
  location1: CoordinatesOrLocation0OrLocation1;
  Connected1: boolean;
  Length: number;
  Speed: number;
  features: Features;
};
