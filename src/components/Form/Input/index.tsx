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
  const { name, label, helperText } = props;
  return (
    <TextField
      {...{ name, label }}
      id={name}
      value={values[name]}
      type="number"
      helperText={errors[name] && touched[name] ? errors[name] : helperText}
      error={errors[name] && touched[name] ? true : false}
      onChange={handleChange}
      onBlur={handleBlur}
      fullWidth
    />
  );
};

export default Input;
