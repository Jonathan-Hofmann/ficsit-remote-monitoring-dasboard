type IngredientsEntityOrProductsEntity = {
  Name: string;
  ClassName: string;
  Amount: number;
  ManualRate: number;
  FactoryRate: number;
};
type IngredientsEntityOrProductsEntity1 = {
  Name: string;
  ClassName: string;
  Amount: number;
  ManualRate: number;
  FactoryRate: number;
};

export type RecipesDto = {
  Name: string;
  ClassName: string;
  Category: string;
  Events?: (string | null)[] | null;
  Ingredients?: (IngredientsEntityOrProductsEntity | null)[] | null;
  Products?: (IngredientsEntityOrProductsEntity1 | null)[] | null;
  ProducedIn?: (string | null)[] | null;
  ManualDuration: number;
  FactoryDuration: number;
};
