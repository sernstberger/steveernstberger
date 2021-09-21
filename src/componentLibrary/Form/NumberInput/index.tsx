import Input, { InputProps } from "../Input";

export interface NumberInputProps extends Omit<InputProps, "type"> {}

const NumberInput = (props: NumberInputProps) => {
  return <Input type="number" {...props} />;
};

export default NumberInput;
