import { useState } from "react";
import { Table, TableRow, TableCell } from "@mui/material";
import SalaryChart from "./SalaryChart";

const SalaryCalculator = () => {
  const [startingSalary, setStartingSalary] = useState(20000);

  const res = Array.from(Array(10)).map((_, i) => {
    const growthRate = 0.05 * i;
    const multiple = 1 + growthRate;
    const gross = startingSalary * multiple;
    return {
      date: i,
      net: gross * 0.7,
      netColor: "hsl(193, 70%, 50%)",
      taxes: gross * 0.3,
      taxesColor: "hsl(213, 70%, 50%)",
      gross,
    };
  });

  console.log(res);
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
          {res.map((bar, index) => (
            <TableRow>
              <TableCell>{bar.date}</TableCell>
              <TableCell>{bar.net}</TableCell>
              <TableCell>{bar.taxes}</TableCell>
              <TableCell>{bar.gross}</TableCell>
            </TableRow>
          ))}
        </Table>
      ) : (
        <div>nope</div>
      )}
    </div>
  );
};

export default SalaryCalculator;
