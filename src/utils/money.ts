import { convertToFloat } from '@Utils/numbers';
export const convertCentsToMoney = (cents) => {
  return (cents / 100);
};
export const convertCentsToMoneyWithFraction = (cents) => {
  return (cents / 100).toFixed(2).replace('.', ',');
};

export const convertMoneyToCents = (money) => {
  return Math.floor(convertToFloat(money) * 100);
};
