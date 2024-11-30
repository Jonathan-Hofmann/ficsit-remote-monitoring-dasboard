export type LocationState = {
  state?: {
    data: {
      IsConfigured: boolean;
      IsProducing: boolean;
      building: string;
      Recipe: string;
      ManuSpeed: string;
      CircuitID: string;
      IsPaused: boolean;
      production: {
        Name: string;
        CurrentProd: string;
        MaxProd: string;
        ProdPercent: string;
      }[];
      ingredients: {
        Name: string;
        CurrentConsumed: string;
        MaxConsumed: string;
        ConsPercent: string;
      }[];
    };
  };
};
