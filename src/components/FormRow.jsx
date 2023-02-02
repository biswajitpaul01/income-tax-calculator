export const FormRow = ({
  label,
  name,
  value,
  className,
  readOnly,
  onChange,
}) => (
  <div className="mb-3 row">
    <label htmlFor={name} className="col-sm-5 col-form-label">
      {label}
    </label>
    <div className="col-sm-7">
      <input
        type="number"
        readOnly={readOnly}
        className={className}
        value={value}
        name={name}
        id={name}
        onChange={onChange}
      />
    </div>
  </div>
);
