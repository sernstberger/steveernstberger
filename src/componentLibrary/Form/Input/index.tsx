import { TextField } from "@mui/material";
import { useFormikContext } from "formik";

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
}

const Input = (props: InputProps) => {
  const { values, errors, touched, handleChange, handleBlur, isSubmitting } =
    useFormikContext<any>();
  const {
    name,
    label,
    helperText = "",
    type = "text",
    disabled = false,
  } = props;
  const hasError = !!errors[name] && !!touched[name];
  return (
    <TextField
      {...{ name, label, type }}
      id={name}
      value={values[name]}
      variant="outlined"
      helperText={hasError ? errors[name] : helperText}
      error={hasError}
      onChange={handleChange}
      onBlur={handleBlur}
      fullWidth
      disabled={disabled || isSubmitting}
    />
  );
};

export default Input;
