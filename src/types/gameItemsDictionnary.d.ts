import type { GameClassNamesEnum } from "../enums/gameClassNames.enum";
import type { GameItems } from "./gameItems";

export type GameItemsDictionnary = Record<GameClassNamesEnum, GameItems>;
