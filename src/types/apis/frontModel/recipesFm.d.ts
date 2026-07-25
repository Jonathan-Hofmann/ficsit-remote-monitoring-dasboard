import { GameItems } from "../../gameItems/gameItems";
import type { GameClassNamesEnum } from "../../../enums/gameClassNames.enum";

type ItemsEntity = {
  Name: string;
  ClassName: string;
  Amount: number;
  MaxAmount: number;
  ManualRate: number;
  FactoryRate: number;
};


export type RecipesFm = {
    Name: string;
    ClassName: GameClassNamesEnum;
    Category: string;
    Ingredients?: (ItemsEntity | null)[];
    Products?: (ItemsEntity | null)[];
    ProducedIn: GameItems[];
    ManualDuration: number;
    FactoryDuration: number; 
}