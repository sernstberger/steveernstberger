import { TextField } from "@mui/material";
import { useFormikContext } from "formik";
import React from "react";

export interface InputProps {
  name: string;
  label: string;
  helperText?: string;
  type?:
    | "text"
    | "number"
    | "password"
    | "color"
    | "email"
    | "number"
    | "password"
    | "search"
    | "tel"
    | "text"
    | "url";
  disabled?: boolean;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
}

const Input = (props: InputProps) => {
  const { values, errors, touched, handleChange, handleBlur, isSubmitting } =
    useFormikContext<any>();
  const {
    disabled = false,
    endAdornment = undefined,
    helperText = "",
    label,
    name,
    startAdornment = undefined,
    type = "text",
  } = props;
  const hasError = !!errors[name] && !!touched[name];
  return (
    <TextField
      {...{ label, name, type }}
      id={name}
      value={values[name]}
      variant="outlined"
      helperText={hasError ? errors[name] : helperText}
      error={hasError}
      onChange={handleChange}
      onBlur={handleBlur}
      fullWidth
      disabled={disabled || isSubmitting}
      InputProps={{
        endAdornment,
        startAdornment,
      }}
    />
  );
};

export default Input;
