import { GameClassNamesEnum } from "../enums/gameClassNames.enum";
import type { WorldInvDto } from "../types/apis/dataTransferObject/worldInvDto";
import type { WorldInvFm } from "../types/apis/frontModel/worldInvFm";
import { enumDtoToFmMapper } from "./enumDtoToFm.mapper";

export const worldInvDtoToFmMapper = (dto: WorldInvDto[]): WorldInvFm[] => {
  return dto.map((worldInv) => ({
    name: worldInv.Name,
    className: enumDtoToFmMapper(worldInv.ClassName, GameClassNamesEnum),
    amount: worldInv.Amount,
  }));
};
