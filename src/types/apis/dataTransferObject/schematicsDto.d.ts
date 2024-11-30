type RecipesEntity = {
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

export type SchematicsDto = {
  Name: string;
  ClassName: string;
  TechTier: number;
  Type: string;
  Recipes?: (RecipesEntity | null)[] | null;
  HasUnlocks: boolean;
  Locked: boolean;
  Purchased: boolean;
  DepLocked: boolean;
  LockedTutorial: boolean;
  LockedPhase: boolean;
  Tutorial: boolean;
};
