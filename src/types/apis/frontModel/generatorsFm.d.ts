import type { GameClassNamesEnum } from "../../../enums/gameClassNames.enum";

export type GeneratorFm = {
  id: string;
  className: GameClassNamesEnum;
  isFullSpeed: boolean;
  isGeneratorCanStart: boolean;
  dynamicProductionCapacity: number;
};
