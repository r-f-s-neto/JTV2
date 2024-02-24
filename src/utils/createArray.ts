export const createArray = (value: number): number[] => {
  const array: number[] = [];
  for (let i = 1; i <= value; i++) {
    array.push(i);
  }
  return array;
};
