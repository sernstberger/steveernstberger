import { TextField } from "@mui/material";
import { useFormikContext } from "formik";

interface InputProps {
  name: string;
  label: string;
  helperText?: string;
}

const Input = (props: InputProps) => {
  const { values, errors, touched, handleChange, handleBlur } =
    useFormikContext<any>();
  const { name, label, helperText = "" } = props;
  const hasError = !!errors[name] && !!touched[name];
  return (
    <TextField
      {...{ name, label }}
      id={name}
      value={values[name]}
      variant="outlined"
      type="number"
      helperText={hasError ? errors[name] : helperText}
      error={hasError}
      onChange={handleChange}
      onBlur={handleBlur}
      fullWidth
    />
  );
};

export default Input;
