export const convertToNumber = (input: string | number, radix = 10) => {
  return parseInt(`${input}`, radix);
};
export const convertToNumberOrZero = (input: string | number, radix = 10) => {
  if (!input) {
    return 0;
  }
  return convertToNumber(input, radix);
};
export const convertToFloat = (input: string | number) => {
  return parseFloat(`${input}`.replace(',', '.'));
};

export const convertToPercent = (input: number) => {
  return (input * 100).toFixed(2);
};

export const removeNonNumbers = (input: string | number) => {
  return input.toString().replace(/\D+/g, '');
};
