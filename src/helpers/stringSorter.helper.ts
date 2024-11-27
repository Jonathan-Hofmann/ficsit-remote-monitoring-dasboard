export const stringSorterHelper = (
  stringA: string,
  stringB: string,
): -1 | 0 | 1 => {
  if (stringA < stringB) {
    return -1;
  }
  if (stringA > stringB) {
    return 1;
  }
  return 0;
};
