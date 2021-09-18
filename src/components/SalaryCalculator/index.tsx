import { useState } from "react";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
} from "@mui/material";
import SalaryChart from "./SalaryChart";
import { addYears, format } from "date-fns";

const SalaryCalculator = () => {
  const [startingSalary, setStartingSalary] = useState(20000);

  const res = Array.from(Array(10)).map((_, i) => {
    const growthRate = 0.05 * i;
    const multiple = 1 + growthRate;
    const gross = startingSalary * multiple;
    const date = addYears(new Date(), i);
    const formattedDate = format(date, "MM/yyyy");

    return {
      date: formattedDate,
      net: gross * 0.7,
      taxes: gross * 0.3,
      gross,
    };
  });

  return (
    <div>
      <input
        type="number"
        value={startingSalary}
        onChange={(e: any) => setStartingSalary(e.target.value)}
      />

      <SalaryChart data={res} />
      {res.length !== 0 ? (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>date</TableCell>
              <TableCell>net</TableCell>
              <TableCell>taxes</TableCell>
              <TableCell>gross</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {res.map((bar) => (
              <TableRow key={bar.date}>
                <TableCell>{bar.date}</TableCell>
                <TableCell>{bar.net}</TableCell>
                <TableCell>{bar.taxes}</TableCell>
                <TableCell>{bar.gross}</TableCell>
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
