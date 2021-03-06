import { Grid, Button } from "@mui/material";
import {
  Formik,
  Form as FormikForm,
  FormikProps,
  useFormikContext,
} from "formik";
import * as Yup from "yup";
import Input from "../Form/Input";
import { IncomeCalculatorFormProps } from "../../types";

const Form = () => {
  const { isSubmitting } = useFormikContext<any>();

  return (
    <FormikForm>
      <Grid container spacing={3}>
        <Grid item md={3} xs={12}>
          <Input name="startingSalary" label="Starting salary" />
        </Grid>
        <Grid item md={3} xs={12}>
          <Input name="growthRate" label="Growth rate" />
        </Grid>
        <Grid item md={3} xs={12}>
          <Input name="years" label="Years" />
        </Grid>
        <Grid item md={3} xs={12}>
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
    </FormikForm>
  );
};

export default Form;
