import { EndpointEnum } from "../enums/endpoint.enum";
import { awesomeSinkDtoToFmMapper } from "../mappers/awesomeSinkDtoToFm.mapper";
import { droneDtoToFmMapper } from "../mappers/droneDtoToFm.mapper";
import { droneStationDtoToFmMapper } from "../mappers/droneStationDtoToFm.mapper";
import { factoryDtoToFmMapper } from "../mappers/factoryDtoToFm.mapper";
import { generatorsDtoToFmMapper } from "../mappers/generatorsDtoToFm.mapper";
import { playerDtoToFmMapper } from "../mappers/playerDtoToFm.mapper";
import { powerDtoToFmMapper } from "../mappers/powerDtoToFm.mapper";
import { productionStatDtoToFMapper } from "../mappers/productionStatDtoToFm.mapper";
import { trainDtoToFmMapper } from "../mappers/trainDtoToFm.mapper";
import { trainStationDtoToFmMapper } from "../mappers/trainStationDtoToFm.mapper";
import { vehicleDtoToFmMapper } from "../mappers/vehicleDtoToFm.mapper";
import { worldInvDtoToFmMapper } from "../mappers/worldInvDtoToFm.mapper";
import type { EndPoint } from "../types/endpoint";

export const endPointDictionnary: EndPoint = {
  [EndpointEnum.ASSEMBLER]: factoryDtoToFmMapper,
  [EndpointEnum.AWESOME_SINK_EXPLORATION]: awesomeSinkDtoToFmMapper,
  [EndpointEnum.AWESOME_SINK_RESOURCE]: awesomeSinkDtoToFmMapper,
  [EndpointEnum.BIOMASS_GENERATOR]: generatorsDtoToFmMapper,
  [EndpointEnum.BLENDER]: factoryDtoToFmMapper,
  [EndpointEnum.COAL_GENERATOR]: generatorsDtoToFmMapper,
  [EndpointEnum.CONSTRUCTOR]: factoryDtoToFmMapper,
  [EndpointEnum.CONVERTER]: factoryDtoToFmMapper,
  [EndpointEnum.DRONE]: droneDtoToFmMapper,
  [EndpointEnum.DRONE_STATION]: droneStationDtoToFmMapper,
  [EndpointEnum.FOUNDRY]: factoryDtoToFmMapper,
  [EndpointEnum.FUEL_GENERATOR]: generatorsDtoToFmMapper,
  [EndpointEnum.GEOTHERMAL_GENERATOR]: generatorsDtoToFmMapper,
  [EndpointEnum.MANUFACTURER]: factoryDtoToFmMapper,
  [EndpointEnum.NUCLEAR_GENERATOR]: generatorsDtoToFmMapper,
  [EndpointEnum.PACKAGER]: factoryDtoToFmMapper,
  [EndpointEnum.PARTICLE_ACCELERATOR]: factoryDtoToFmMapper,
  [EndpointEnum.PLAYER]: playerDtoToFmMapper,
  [EndpointEnum.POWER]: powerDtoToFmMapper,
  [EndpointEnum.PRODUCTION_STAT]: productionStatDtoToFMapper,
  [EndpointEnum.QUANTUM_ENCODER]: factoryDtoToFmMapper,
  [EndpointEnum.REFINERY]: factoryDtoToFmMapper,
  [EndpointEnum.SMELTER]: factoryDtoToFmMapper,
  [EndpointEnum.TRAIN]: trainDtoToFmMapper,
  [EndpointEnum.TRAIN_STATION]: trainStationDtoToFmMapper,
  [EndpointEnum.VEHICLE]: vehicleDtoToFmMapper,
  [EndpointEnum.WORLD_INV]: worldInvDtoToFmMapper,
};
