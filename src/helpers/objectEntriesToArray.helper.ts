export const objectEntriesToArrayHelper = <T>(
  objectEntries: [string, T][],
): T[] => {
  return objectEntries.map(([, value]) => value);
};
