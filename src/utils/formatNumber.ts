import { FormattedNumber } from "../types";

const formatNumber = (
  value: number,
  currency: boolean = false
): FormattedNumber => {
  const minimumFractionDigits = value % 1 === 0 ? 0 : 2; // only show cents if its not a whole number
  const isCurrency = currency
    ? {
        style: "currency",
        currency: "USD",
      }
    : {};
  const formatted = new Intl.NumberFormat("en-US", {
    ...isCurrency,
    minimumFractionDigits,
  }).format(value);
  return {
    raw: value,
    formatted,
  };
};

export default formatNumber;
