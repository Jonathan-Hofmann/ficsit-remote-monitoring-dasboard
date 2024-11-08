import { DroneFlyingModeEnum } from "../enums/droneFlyingMode.enum";

// eslint-disable-next-line import/no-unused-modules
export const droneFlyingModeDtoToFm = (
  flyingMode: string,
): DroneFlyingModeEnum => {
  switch (flyingMode) {
    case "Flying":
      return DroneFlyingModeEnum.Flying;
    case "Travel":
      return DroneFlyingModeEnum.Travel;
    case "None":
      return DroneFlyingModeEnum.None;
    default:
      throw new Error(
        "droneFlyingModeDtoToFm.mapper.ts => Flying mode not handled",
      );
  }
};
