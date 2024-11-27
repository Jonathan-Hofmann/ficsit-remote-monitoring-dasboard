import type { PlayerDto } from "../types/apis/dataTransferObject/playerDto";
import type { PlayerFm } from "../types/apis/frontModel/playerFm";

export const playerDtoToFmMapper = (dto: PlayerDto[]): PlayerFm[] => {
  return dto.map((playerDto) => ({
    id: playerDto.ID,
    name: playerDto.Name,
  }));
};
