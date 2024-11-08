import { FullRefsEnum } from "../enums/fullRefs.enum";
import type { WorldInvDto } from "../types/apis/dataTransferObject/worldInvDto";
import type { WorldInvFm } from "../types/apis/frontModel/worldInvFm";
import { enumDtoToFmMapper } from "./enumDtoToFm.mapper";

export const worldInvDtoToFmMapper = (dto: WorldInvDto[]): WorldInvFm[] => {
  return dto.map((worldInv) => ({
    name: enumDtoToFmMapper(worldInv.Name, FullRefsEnum),
    className: worldInv.ClassName,
    amount: worldInv.Amount,
  }));
};
