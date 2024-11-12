import type { GameClassNamesEnum } from "../../../enums/gameClassNames.enum";
import type { GameItemsEnum } from "../../../enums/gameItems.enum";

export type WorldInvFm = {
  name: GameItemsEnum;
  className: GameClassNamesEnum;
  amount: number;
};
