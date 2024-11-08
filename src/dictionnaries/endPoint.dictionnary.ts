import { EndpointEnum } from "../enums/endpoint.enum";
import { droneDtoToFmMapper } from "../mappers/droneDtoToFm.mapper";
import { droneStationDtoToFm } from "../mappers/droneStationDtoToFm.mapper";
import type { EndPoint } from "../types/endpoint";

export const endPointDictionnaries: EndPoint = {
  [EndpointEnum.DRONE]: droneDtoToFmMapper,
  [EndpointEnum.DRONE_STATION]: droneStationDtoToFm,
};
