import React, { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
import { Formik, Form, FormikProps } from "formik";
import * as Yup from "yup";

interface ISignUpForm {
  fullName: string;
  password: string;
  confirmPassword: string;
  email: string;
}

interface IFormStatus {
  message: string;
  type: string;
}

interface IFormStatusProps {
  [key: string]: IFormStatus;
}

const formStatusProps: IFormStatusProps = {
  success: {
    message: "Signed up successfully.",
    type: "success",
  },
  duplicate: {
    message: "Email-id already exist. Please use different email-id.",
    type: "error",
  },
  error: {
    message: "Something went wrong. Please try again.",
    type: "error",
  },
};

const SignUp: React.FunctionComponent = () => {
  const [formStatus, setFormStatus] = useState<IFormStatus>({
    message: "",
    type: "",
  });

  const createNewUser = async (data: ISignUpForm, resetForm: Function) => {
    // try {
    //   // API call integration will be here. Handle success / error response accordingly.
    //   if (data) {
    //     setFormStatus(formStatusProps.success);
    //     resetForm({});
    //   }
    // } catch (error) {
    //   // @ts-ignore
    //   const response = error.response;
    //   if (response.data === "user already exist" && response.status === 400) {
    //     setFormStatus(formStatusProps.duplicate);
    //   } else {
    //     setFormStatus(formStatusProps.error);
    //   }
    // } finally {
    //   setDisplayFormStatus(true);
    // }
  };

  return (
    <div>
      <Formik
        initialValues={{
          fullName: "",
          password: "",
          confirmPassword: "",
          email: "",
        }}
        onSubmit={(values: ISignUpForm, actions) => {
          createNewUser(values, actions.resetForm);
          setTimeout(() => {
            actions.setSubmitting(false);
          }, 500);
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email().required("Enter valid email-id"),
          fullName: Yup.string().required("Please enter full name"),
          password: Yup.string()
            .matches(
              /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()]).{8,20}\S$/
            )
            .required(
              "Please valid password. One uppercase, one lowercase, one special character and no spaces"
            ),
          confirmPassword: Yup.string()
            .required("Required")
            .test("password-match", "Password musth match", function (value) {
              return this.parent.password === value;
            }),
        })}
      >
        {(props: FormikProps<ISignUpForm>) => {
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
              <h1>Sign up</h1>
              <Grid container>
                <Grid item lg={10} md={10} sm={10} xs={10}>
                  <TextField
                    name="fullName"
                    id="fullName"
                    label="Full Name"
                    value={values.fullName}
                    type="text"
                    helperText={
                      errors.fullName && touched.fullName
                        ? errors.fullName
                        : "Enter your full name."
                    }
                    error={errors.fullName && touched.fullName ? true : false}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Grid>
                <Grid item lg={10} md={10} sm={10} xs={10}>
                  <TextField
                    name="password"
                    id="password"
                    label="Password"
                    value={values.password}
                    type="password"
                    helperText={
                      errors.password && touched.password
                        ? "Please valid password. One uppercase, one lowercase, one special character and no spaces"
                        : "One uppercase, one lowercase, one special character and no spaces"
                    }
                    error={errors.password && touched.password ? true : false}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Grid>
                <Grid item lg={10} md={10} sm={10} xs={10}>
                  <TextField
                    name="confirmPassword"
                    id="confirmPassword"
                    label="Confirm password"
                    value={values.confirmPassword}
                    type="password"
                    helperText={
                      errors.confirmPassword && touched.confirmPassword
                        ? errors.confirmPassword
                        : "Re-enter password to confirm"
                    }
                    error={
                      errors.confirmPassword && touched.confirmPassword
                        ? true
                        : false
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Grid>
                <Grid item lg={10} md={10} sm={10} xs={10}>
                  <TextField
                    name="email"
                    id="email"
                    label="Email-id"
                    value={values.email}
                    type="email"
                    helperText={
                      errors.email && touched.email
                        ? errors.email
                        : "Enter email-id"
                    }
                    error={errors.email && touched.email ? true : false}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Grid>
                <Grid item lg={10} md={10} sm={10} xs={10}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    disabled={isSubmitting}
                  >
                    Submit
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
