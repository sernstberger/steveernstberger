import { addYears, format } from "date-fns";
import { DataStructure } from "../../types";
import formatNumber from "../../utils/formatNumber";

const calculateMonthly = (
  startingSalary: number,
  growthRate: number,
  years: number
): DataStructure[] =>
  Array.from(Array(years)).map((_, i) => {
    const yearlyGrowthRate = (growthRate / 100) * i;
    const multiple = 1 + yearlyGrowthRate;
    const gross = startingSalary * multiple;
    const date = addYears(new Date(), i);
    // const formattedDate = format(date, "MM/yyyy");
    const formattedDate = format(date, "yyyy");

    return {
      date: formattedDate,
      net: formatNumber(gross * 0.7),
      taxes: formatNumber(gross * 0.3),
      gross: formatNumber(gross),
      monthlyGross: formatNumber(gross / 12),
      monthlyNet: formatNumber((gross * 0.7) / 12),
    };
  });

export default calculateMonthly;
