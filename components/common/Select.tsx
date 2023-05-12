import { FC, InputHTMLAttributes } from "react";

interface SelectProp extends InputHTMLAttributes<HTMLSelectElement> {
  touched?: boolean;
  error?: string;
  label?: string;
  additionalClass?: string;
  options?: any[];
}
export const Select: FC<SelectProp> = ({
  touched,
  error,
  label,
  additionalClass,
  options,
  ...rest
}) => {
  return (
    <div className="form-group">
      <div style={{ textAlign: "right" }} className="mt-20 mb-5">
        <label htmlFor={`customInput__${label}`} className="text-14 md:text-12">
          {label}
        </label>
      </div>
      <select
        className={`form-control ${additionalClass ?? ""}`}
        id={`customInput__${label}`}
        {...rest}
      >
        {options.map((i, index) => (
          <option value={i.value} key={index}>
            {i.label}
          </option>
        ))}
      </select>
      <small id={`${label}__help`} className="form-text text-muted">
        {error}
      </small>
    </div>
  );
};
