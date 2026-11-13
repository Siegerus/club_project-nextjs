export const getItemsParts = (
  array: readonly string[],
): {
  firstPart: readonly string[];
  secondPart: readonly string[];
} => {
  const mid = Math.ceil(array.length / 2);

  const firstPart = array.slice(0, mid);
  const secondPart = array.slice(mid);

  return { firstPart, secondPart };
};
