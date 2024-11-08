import type { WorldInvDto } from "../types/apis/dataTransferObject/worldInvDto";
import type { WorldInvFm } from "../types/apis/frontModel/worldInvFm";
import { itemNameDtoToFm } from "./itemNameDtoToFm.mapper";

export const worldInvDtoToFmMapper = (dto: WorldInvDto[]): WorldInvFm[] => {
  return dto.map((worldInv) => ({
    name: itemNameDtoToFm(worldInv.Name),
    className: worldInv.ClassName,
    amount: worldInv.Amount,
  }));
};
