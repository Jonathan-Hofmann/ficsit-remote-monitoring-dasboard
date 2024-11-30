import { TrainStationLoadingStatusEnum } from "../enums/trainStationLoadingStatus.enum";
import type { TrainStationDto } from "../types/apis/dataTransferObject/trainStationDto";
import type { TrainStationFm } from "../types/apis/frontModel/trainStationFm";
import { enumDtoToFmMapper } from "./enumDtoToFm.mapper";

export const trainStationDtoToFmMapper = (
  dto: TrainStationDto[],
): TrainStationFm[] => {
  return dto.map((trainStationDto) => {
    const loadingStatusDto = trainStationDto.CargoInventory?.[0].LoadingStatus;

    return {
      name: trainStationDto.Name,
      loadingStatus: loadingStatusDto
        ? enumDtoToFmMapper(
            loadingStatusDto,
            TrainStationLoadingStatusEnum,
            "TrainStationLoadingStatusEnum",
          )
        : TrainStationLoadingStatusEnum.Idle,
      location: trainStationDto.location,
    };
  });
};
