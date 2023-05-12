import { FC, InputHTMLAttributes } from "react";

interface InputProp extends InputHTMLAttributes<HTMLInputElement> {
  touched?: boolean;
  error?: boolean;
  helperText?: string;
  label?: string;
  additionalClass?: string;
}
export const Input: FC<InputProp> = ({
  touched,
  error,
  label,
  additionalClass,
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
      <input
        type="email"
        className={`form-control ${additionalClass ?? ""}`}
        id={`customInput__${label}`}
        {...rest}
      />
      {error && (
        <small
          id={`${label}__help`}
          className="form-text position-absolute error-color"
        >
          {helperText}
        </small>
      )}
    </div>
  );
};
