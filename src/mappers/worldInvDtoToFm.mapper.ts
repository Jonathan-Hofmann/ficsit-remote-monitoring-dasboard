import { gameItemsDictionnary } from "../dictionnaries/gameItems.dictionnary";
import { GameClassNamesEnum } from "../enums/gameClassNames.enum";
import type { WorldInvDto } from "../types/apis/dataTransferObject/worldInvDto";
import type { WorldInvFm } from "../types/apis/frontModel/worldInvFm";
import { enumDtoToFmMapper } from "./enumDtoToFm.mapper";

export const worldInvDtoToFmMapper = (dto: WorldInvDto[]): WorldInvFm[] => {
  return dto.map((worldInvDto) => {
    const className = enumDtoToFmMapper(
      worldInvDto.ClassName,
      GameClassNamesEnum,
      "GameClassNamesEnum",
    );

    return {
      name: gameItemsDictionnary[className].name,
      className,
      amount: worldInvDto.Amount,
    };
  });
};
