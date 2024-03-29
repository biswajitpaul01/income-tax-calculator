import { Tooltip } from "../Tooltip";

export const FormRow = ({
  label,
  name,
  value,
  className,
  required,
  readOnly,
  infoText,
  helpText,
  min,
  max,
  onChange,
}) => (
  <>
    <div className="col-span-3 md:col-auto">
      <label htmlFor={name} className="label">
        {label} {required && <span className="text-red-500">*</span>}
        {infoText && (
          <>
            <Tooltip name={name} infoText={infoText} />
          </>
        )}
      </label>
    </div>
    <div className="col-span-3 md:col-span-2">
      <div className="flex rounded-md shadow-sm">
        <input
          type="number"
          name={name}
          id={name}
          value={value}
          className={`${className} ${readOnly && "cursor-not-allowed"}`}
          onChange={onChange}
          {...(readOnly && { readOnly: "readOnly" })}
          {...(required && { required: "required" })}
          {...(min && { min: min })}
          {...(max && { max: max })}
        />
      </div>
      {helpText && <p className="input-help text-xs">{helpText}</p>}
    </div>
  </>
);
