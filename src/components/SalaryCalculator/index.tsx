import { useState } from "react";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  Typography,
  TextField,
} from "@mui/material";
import SalaryChart from "./SalaryChart";
import { addYears, format } from "date-fns";
import { DataStructure, FormattedNumber } from "../../types";

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

const SalaryCalculator = () => {
  const [startingSalary, setStartingSalary] = useState(20000);

  const res: DataStructure[] = Array.from(Array(30)).map((_, i) => {
    const growthRate = 0.05 * i;
    const multiple = 1 + growthRate;
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

  return (
    <div>
      <TextField
        id="annual-income"
        label="Annual income"
        type="number"
        variant="outlined"
        value={startingSalary}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setStartingSalary(parseInt(e.target.value, 10))
        }
      />

      <Typography>5% growth each year for 30 years</Typography>
      <SalaryChart data={res} />
      <Typography>Breakdown by year</Typography>
      {res.length !== 0 ? (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>date</TableCell>
              <TableCell>net</TableCell>
              <TableCell>taxes</TableCell>
              <TableCell>gross</TableCell>
              <TableCell>monthly gross</TableCell>
              <TableCell>monthly net</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {res.map((bar) => (
              <TableRow key={bar.date}>
                <TableCell>{bar.date}</TableCell>
                <TableCell>{bar.net.formatted}</TableCell>
                <TableCell>{bar.taxes.formatted}</TableCell>
                <TableCell>{bar.gross.formatted}</TableCell>
                <TableCell>{bar.monthlyGross.formatted}</TableCell>
                <TableCell>{bar.monthlyNet.formatted}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <div>nope</div>
      )}
    </div>
  );
};

export default SalaryCalculator;
