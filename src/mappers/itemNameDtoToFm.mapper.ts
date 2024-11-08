import { FullRefsEnum } from "../enums/fullRefs.enum";

export const itemNameDtoToFm = (dto: string): FullRefsEnum => {
  const enumKeys = Object.keys(FullRefsEnum);
  const foundKeyIndex = enumKeys.findIndex((key) => key === dto);
  if (foundKeyIndex !== -1) return enumKeys[foundKeyIndex] as FullRefsEnum;
  throw new Error("itemNameDtoToFm.mapper.ts => Invalid item name");
};
