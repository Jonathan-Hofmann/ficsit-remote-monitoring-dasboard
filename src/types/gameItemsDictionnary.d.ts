import type { GameClassNamesEnum } from "../enums/gameClassNames.enum";
import type { GameItems } from "./apis/gameItems/gameItems";

export type GameItemsDictionnary = Record<GameClassNamesEnum, GameItems>;
