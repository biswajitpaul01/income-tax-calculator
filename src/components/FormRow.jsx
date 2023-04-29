export const FormRow = ({
  label,
  name,
  value,
  className,
  required,
  readOnly,
  helpText,
  onChange,
}) => (
  <>
    <div>
      <label htmlFor={name} className="label">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
    </div>
    <div className="col-span-2">
      <div className="flex rounded-md shadow-sm">
        <input
          type="number"
          name={name}
          id={name}
          value={value}
          className={className}
          onChange={onChange}
          {...(readOnly && { readOnly: "readOnly" })}
          {...(required && { required: "required" })}
        />
      </div>
      {helpText && <p className="input-help">{helpText}</p>}
    </div>
  </>
);
