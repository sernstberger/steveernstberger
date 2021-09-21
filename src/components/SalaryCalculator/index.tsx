import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  Typography,
} from "@mui/material";
import SalaryChart from "./SalaryChart";
import { DataStructure, IncomeCalculatorFormProps } from "../../types";
import { Formik, FormikProps } from "formik";
import * as Yup from "yup";
import Form from "./Form";
import calculateMonthly from "./calculateMonthly";

const SalaryCalculator = () => {
  const [data, setData] = useState<DataStructure[]>([]);
  return (
    <div>
      <Typography variant="h1">Income calculator</Typography>

      <Formik
        initialValues={{
          startingSalary: 40000,
          growthRate: 3,
          years: 20,
        }}
        onSubmit={(values: IncomeCalculatorFormProps) => {
          const { startingSalary, growthRate, years } = values;
          const res: DataStructure[] = calculateMonthly(
            startingSalary,
            growthRate,
            years
          );
          setData(res);
        }}
        validationSchema={Yup.object().shape({
          startingSalary: Yup.number().required(),
          growthRate: Yup.number().required(),
          years: Yup.number().required(),
        })}
      >
        {(props: FormikProps<IncomeCalculatorFormProps>) => {
          const {
            values: { growthRate, years, startingSalary },
            setSubmitting,
            submitCount,
          } = props;

          useEffect(() => {
            const res: DataStructure[] = calculateMonthly(
              startingSalary,
              growthRate,
              years
            );
            setData(res);
            setSubmitting(false);
          }, []);

          useEffect(() => {
            setSubmitting(false);
          }, [submitCount]);

          return (
            <>
              <Form />
              <SalaryChart data={data} />
              <Typography>Breakdown by year</Typography>
              {data.length !== 0 ? (
                <Table size="small">
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
                    {data.map((singleData: DataStructure) => (
                      <TableRow key={singleData.date}>
                        <TableCell>{singleData.date}</TableCell>
                        <TableCell>{singleData.net.formatted}</TableCell>
                        <TableCell>{singleData.taxes.formatted}</TableCell>
                        <TableCell>{singleData.gross.formatted}</TableCell>
                        <TableCell>
                          {singleData.monthlyGross.formatted}
                        </TableCell>
                        <TableCell>{singleData.monthlyNet.formatted}</TableCell>
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
