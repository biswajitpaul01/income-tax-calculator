export const FormRowFloatable = ({
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
  <div className="col-span-3 md:col-auto mb-1">
    <div className="relative">
      <input
        type="number"
        id={name}
        name={name}
        value={value}
        className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${readOnly && "cursor-not-allowed"}`}
        placeholder=" "
        onChange={onChange}
        {...(readOnly && { readOnly: "readOnly" })}
        {...(required && { required: "required" })}
        {...(min && { min: min })}
        {...(max && { max: max })}
      />
      <label
        htmlFor="floating_outlined"
        className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
    </div>
    {helpText && <p className="input-help text-xs">{helpText}</p>}
  </div>
);
