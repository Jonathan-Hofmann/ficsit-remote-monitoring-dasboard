export const enumDtoToFmMapper = <E extends object>(
  dto: string,
  enumType: E,
): E[keyof E] => {
  const enumKeys = Object.keys(enumType) as (keyof E)[];
  const foundKeyIndex = enumKeys.findIndex((key) => key === dto);

  if (foundKeyIndex !== -1) {
    return enumType[enumKeys[foundKeyIndex]];
  }

  throw new Error(
    `Invalid dto name [${dto}]: can't found in enum ${enumType.constructor.name}`,
  );
};
