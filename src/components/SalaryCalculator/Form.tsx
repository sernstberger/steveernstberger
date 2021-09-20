import React, { useState } from "react";
import { Grid, Button } from "@mui/material";
import { Formik, Form, FormikProps } from "formik";
import * as Yup from "yup";
import Input from "../Form/Input";

interface IncomeCalculatorFormProps {
  startingSalary: number;
  growthRate: number;
  years: number;
}

const SignUp: React.FunctionComponent = () => {
  const createNewUser = async (
    data: IncomeCalculatorFormProps,
    resetForm: Function
  ) => {
    // calculate
  };

  return (
    <div>
      <Formik
        initialValues={{
          startingSalary: 20000,
          growthRate: 5,
          years: 20,
        }}
        onSubmit={(values: IncomeCalculatorFormProps, actions) => {
          createNewUser(values, actions.resetForm);
          setTimeout(() => {
            actions.setSubmitting(false);
          }, 500);
        }}
        validationSchema={Yup.object().shape({
          startingSalary: Yup.number().required(),
          growthRate: Yup.number().required("Goooooooooooo"),
          years: Yup.number().required(),
        })}
      >
        {(props: FormikProps<IncomeCalculatorFormProps>) => {
          const {
            values,
            touched,
            errors,
            handleBlur,
            handleChange,
            isSubmitting,
          } = props;
          return (
            <Form>
              <Grid container spacing={3}>
                <Grid item md={4} xs={12}>
                  <Input
                    name="startingSalary"
                    label="Starting salary"
                    helperText="Fooooooooo"
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Input name="growthRate" label="Growth rate" />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Input name="years" label="Years" />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    disabled={isSubmitting}
                  >
                    Calculate
                  </Button>
                </Grid>
              </Grid>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default SignUp;
