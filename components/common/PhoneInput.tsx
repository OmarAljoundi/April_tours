import { FC, InputHTMLAttributes } from "react";
import PhoneInput, { PhoneInputProps } from "react-phone-input-2";

interface InputProp extends InputHTMLAttributes<PhoneInputProps> {
  touched?: boolean;
  error?: boolean;
  helperText?: string;
  label?: string;
}
export const CustomPhoneInput: FC<InputProp & PhoneInputProps> = ({
  touched,
  error,
  label,
  helperText,
  ...rest
}) => {
  return (
    <div className="form-group">
      <div style={{ textAlign: "right" }} className="mt-20 mb-5">
        <label htmlFor={`customInput__${label}`} className="text-14 md:text-12">
          {label}
        </label>
      </div>
      <PhoneInput country={"jo"} defaultErrorMessage="text" {...rest} />
      {error && (
        <small
          id={`${label}__help`}
          className="form-text  position-absolute error-color"
        >
          {helperText}
        </small>
      )}
    </div>
  );
};
