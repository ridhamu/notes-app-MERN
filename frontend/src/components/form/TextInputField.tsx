import { Form } from "react-bootstrap";
import { FieldError, RegisterOptions, UseFormRegister } from "react-hook-form";

interface TextInputFiledProps {
  name: string;
  label: string;
  register: UseFormRegister<any>;
  registerOpions?: RegisterOptions;
  error?: FieldError;
  [x: string]: any;
}

const TextInputField = ({
  name,
  label,
  register,
  registerOpions,
  error,
  ...props
}: TextInputFiledProps) => {
  return (
    <Form.Group className="mb-3" controlId={name + "-input"}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        {...props}
        {...register(name, registerOpions)}
        isInvalid={!!error}
      />
      <Form.Control.Feedback type="invalid">
        {error?.message}
      </Form.Control.Feedback>
    </Form.Group>
  );
};

export default TextInputField;
