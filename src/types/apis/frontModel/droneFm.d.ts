export type DroneFm = {
  id: string;
  homeStation: string;
  pairedStation: string;
  currentDestination: string;
  currentFlyingMode: "Flying" | "Travel" | "None";
  flyingSpeed: number;
  location: {
    x: number;
    y: number;
    z: number;
  };
};
