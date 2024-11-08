import type { PowerDto } from "../types/apis/dataTransferObject/powerDto";
import type { PowerFm } from "../types/apis/frontModel/powerFm";

export const powerDtoToFmMapper = (dto: PowerDto[]): PowerFm[] => {
  return dto.map((powerDto) => ({
    id: powerDto.CircuitGroupID,
    powerCapacity: powerDto.PowerCapacity,
    powerConsumed: powerDto.PowerConsumed,
    powerMaxConsumed: powerDto.PowerMaxConsumed,
    powerProduction: powerDto.PowerProduction,
    batteryCapacity: powerDto.BatteryCapacity,
    batteryTimeFull: powerDto.BatteryTimeFull,
    batteryTimeEmpty: powerDto.BatteryTimeEmpty,
    batteryPercent: powerDto.BatteryPercent,
    batteryDifferential: powerDto.BatteryDifferential,
    fuseTriggered: powerDto.FuseTriggered,
  }));
};
