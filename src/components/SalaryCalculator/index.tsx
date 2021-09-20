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
import formatNumber from "../../utils/formatNumber";
import { useFormik } from "formik";
import { string, object } from "yup";
import Form from "./Form";

// const validationSchema = object({
//   email: string("Enter your email"),
//     // .email("Enter a valid email")
//     // .required("Email is required"),
//   password: yup
//     // .string("Enter your password")
//     // .min(8, "Password should be of minimum 8 characters length")
//     .required("Password is required"),
// });

const SalaryCalculator = () => {
  const [startingSalary, setStartingSalary] = useState(20000);
  const [growthRate, setGrowthRate] = useState(4);
  const [years, setYears] = useState(20);

  // const formik = useFormik({
  //   initialValues: {
  //     email: "foobar@example.com",
  //     password: "foobar",
  //   },
  //   validationSchema,
  //   onSubmit: (values) => {
  //     alert(JSON.stringify(values, null, 2));
  //   },
  // });

  const res: DataStructure[] = Array.from(Array(years)).map((_, i) => {
    console.log("!!!", "goooo");
    const foo = (growthRate / 100) * i;
    const multiple = 1 + foo;
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
      <Typography variant="h1">Income calculator</Typography>
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

      <TextField
        id="growth-rate"
        label="Annual growth rate"
        type="number"
        variant="outlined"
        value={growthRate}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setGrowthRate(parseInt(e.target.value, 10))
        }
      />

      <TextField
        id="years"
        label="Years"
        type="number"
        variant="outlined"
        value={years}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setYears(parseInt(e.target.value, 10))
        }
      />

      {/* <form onSubmit={formik.handleSubmit}>
        
      </form> */}
      <Form />

      <Typography>
        {growthRate}% growth each year for {years} years
      </Typography>
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
