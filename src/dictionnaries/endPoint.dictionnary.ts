import { EndpointEnum } from "../enums/endpoint.enum";
import { droneDtoToFmMapper } from "../mappers/droneDtoToFm.mapper";
import { droneStationDtoToFmMapper } from "../mappers/droneStationDtoToFm.mapper";
import { powerDtoToFmMapper } from "../mappers/powerDtoToFm.mapper";
import { worldInvDtoToFmMapper } from "../mappers/worldInvDtoToFm.mapper";
import type { EndPoint } from "../types/endpoint";

export const endPointDictionnaries: EndPoint = {
  [EndpointEnum.DRONE]: droneDtoToFmMapper,
  [EndpointEnum.DRONE_STATION]: droneStationDtoToFmMapper,
  [EndpointEnum.POWER]: powerDtoToFmMapper,
  [EndpointEnum.WORLD_INV]: worldInvDtoToFmMapper,
};
