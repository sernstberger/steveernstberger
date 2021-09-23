import Input, { InputProps } from "../Input";

export interface EmailInputProps extends Omit<InputProps, "type"> {}

const EmailInput = (props: EmailInputProps) => {
  return <Input type="email" {...props} />;
};

export default EmailInput;
