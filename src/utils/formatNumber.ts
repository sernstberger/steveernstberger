import { FormattedNumber } from "../types";

const formatNumber = (amount: number): FormattedNumber => {
  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
  return {
    raw: amount,
    formatted,
  };
};

export default formatNumber;
