import { EndpointEnum } from "../enums/endpoint.enum";
import { awesomeSinkDtoToFmMapper } from "../mappers/awesomeSinkDtoToFm.mapper";
import { droneDtoToFmMapper } from "../mappers/droneDtoToFm.mapper";
import { droneStationDtoToFmMapper } from "../mappers/droneStationDtoToFm.mapper";
import { generatorsDtoToFmMapper } from "../mappers/generatorsDtoToFm.mapper";
import { playerDtoToFmMapper } from "../mappers/playerDtoToFm.mapper";
import { powerDtoToFmMapper } from "../mappers/powerDtoToFm.mapper";
import { vehicleDtoToFmMapper } from "../mappers/vehicleDtoToFm.mapper";
import { worldInvDtoToFmMapper } from "../mappers/worldInvDtoToFm.mapper";
import type { EndPoint } from "../types/endpoint";

export const endPointDictionnary: EndPoint = {
  [EndpointEnum.AWESOME_SINK_EXPLORATION]: awesomeSinkDtoToFmMapper,
  [EndpointEnum.AWESOME_SINK_RESOURCE]: awesomeSinkDtoToFmMapper,
  [EndpointEnum.BIOMASS_GENERATOR]: generatorsDtoToFmMapper,
  [EndpointEnum.COAL_GENERATOR]: generatorsDtoToFmMapper,
  [EndpointEnum.DRONE]: droneDtoToFmMapper,
  [EndpointEnum.DRONE_STATION]: droneStationDtoToFmMapper,
  [EndpointEnum.FUEL_GENERATOR]: generatorsDtoToFmMapper,
  [EndpointEnum.GEOTHERMAL_GENERATOR]: generatorsDtoToFmMapper,
  [EndpointEnum.NUCLEAR_GENERATOR]: generatorsDtoToFmMapper,
  [EndpointEnum.PLAYER]: playerDtoToFmMapper,
  [EndpointEnum.POWER]: powerDtoToFmMapper,
  [EndpointEnum.VEHICLE]: vehicleDtoToFmMapper,
  [EndpointEnum.WORLD_INV]: worldInvDtoToFmMapper,
};
