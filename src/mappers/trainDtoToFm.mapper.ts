import { TrainStatusEnum } from "../enums/trainStatus.enum";
import type { TrainsDto } from "../types/apis/dataTransferObject/trainsDto";
import type { TrainFm } from "../types/apis/frontModel/trainFm";
import { enumDtoToFmMapper } from "./enumDtoToFm.mapper";

export const trainDtoToFmMapper = (dto: TrainsDto[]): TrainFm[] => {
  return dto.map((trainDto) => ({
    name: trainDto.Name,
    trainName: trainDto.Vehicles?.[0].Name,
    status: enumDtoToFmMapper(
      trainDto.Status,
      TrainStatusEnum,
      "TrainStatusEnum",
    ),
    nextStation: trainDto.TrainStation,
    stationPlanning: (trainDto.TimeTable ?? [])
      .filter((el): el is NonNullable<typeof el> => !!el)
      .map((station) => station.StationName),
    isDerailed: trainDto.Derailed,
    forwardSpeed: trainDto.ForwardSpeed,
    throttlePercent: trainDto.ThrottlePercent,
    powerConsumed: trainDto.PowerInfo.PowerConsumed,
    location: trainDto.location,
  }));
};
