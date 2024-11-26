import { gameItemsDictionnary } from "../dictionaries/gameItems.dictionary";
import type { GameClassNamesEnum } from "../enums/gameClassNames.enum";

export const getImageHelper = (className: GameClassNamesEnum): string => {
  const item = gameItemsDictionnary[className];
  if (!item) return `/assets/Icon/notFound.png`;
  return `/assets/${item.category}/${item.name}.png`;
};
