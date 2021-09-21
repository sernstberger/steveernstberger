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
import {
  DataStructure,
  FormattedNumber,
  IncomeCalculatorFormProps,
} from "../../types";
import formatNumber from "../../utils/formatNumber";
import { useFormik, Formik, FormikProps } from "formik";
import * as Yup from "yup";
import Form from "./Form";
import calculateMonthly from "./calculateMonthly";

const SalaryCalculator = () => {
  const [data, setData] = useState([]);
  return (
    <div>
      <Typography variant="h1">Income calculator</Typography>

      <Formik
        initialValues={{
          startingSalary: 20000,
          growthRate: 5,
          years: 20,
        }}
        onSubmit={(values: any) => {
          console.log("!!!vals", values);
          const { startingSalary, growthRate, years } = values;
          const res: any = calculateMonthly(startingSalary, growthRate, years);
          setData(res);
        }}
        validationSchema={Yup.object().shape({
          startingSalary: Yup.number().required(),
          growthRate: Yup.number().required("Goooooooooooo"),
          years: Yup.number().required(),
        })}
      >
        {(props: FormikProps<IncomeCalculatorFormProps>) => {
          const {
            values: { growthRate, years, startingSalary },
            touched,
            errors,
            handleBlur,
            handleChange,
            isSubmitting,
          } = props;

          return (
            <>
              <Form />

              <Typography>
                {growthRate}% growth each year for {years} years
              </Typography>
              <SalaryChart data={data} />
              <Typography>Breakdown by year</Typography>
              {data.length !== 0 ? (
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
                    {data.map((bar: any) => (
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
            </>
          );
        }}
      </Formik>
    </div>
  );
};

export default SalaryCalculator;
