type ItemsEntity = {
  Name: string;
  ClassName: string;
  Amount: number;
  MaxAmount: number;
  ManualRate: number;
  FactoryRate: number;
};

export type RecipesDto = {
  ID: string;
  Name: string;
  ClassName: string;
  Category: string;
  Events?: (string | null)[] | null;
  Ingredients?: (ItemsEntity | null)[];
  Products?: (ItemsEntity | null)[];
  ProducedIn?: (string)[] | null;
  ManualDuration: number;
  FactoryDuration: number; 
};
