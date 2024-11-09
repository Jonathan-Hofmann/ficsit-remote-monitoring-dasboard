import type { GameClassNamesEnum } from "../../../enums/gameClassNames.enum";

export type WorldInvFm = {
  name: string;
  className: GameClassNamesEnum;
  amount: number;
};
