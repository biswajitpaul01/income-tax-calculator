import { Tooltip } from "../Tooltip";

export const FormRowComboInput = ({
  firstInputLabel,
  secondInputLabel,
  firstInputName,
  secondInputName,
  firstInputValue,
  secondInputValue,
  firstInputRequired,
  secondInputRequired,
  firstInputReadOnly,
  secondInputReadOnly,
  infoText,
  helpText,
  min,
  max,
  onFirstInputChange,
  onSecondInputChange,
}) => (
  <>
    <div className="col-span-3 md:col-auto">
      <label htmlFor={firstInputName} className="label">
        {secondInputLabel} {secondInputRequired && <span className="text-red-500">*</span>}
        {infoText && (
          <>
            <Tooltip name={secondInputName} infoText={infoText} />
          </>
        )}
      </label>
    </div>
    <div className="col-span-3 md:col-span-2">
      <div className="flex rounded-md shadow-sm">
        <div className="relative">
          <input
            type="text"
            id={`floating_${firstInputName}`}
            value={firstInputValue}
            placeholder=" "
            className="block px-2.5 pb-2 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-l border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus-0 peer"
            onChange={onFirstInputChange}
            {...(firstInputReadOnly && { readOnly: "readOnly" })}
            {...(firstInputRequired && { required: "required" })}
            {...(min && { min: min })}
            {...(max && { max: max })}
          />
          <label
            htmlFor={`floating_${firstInputName}`}
            className="text-combo-label-first"
          >
            {firstInputLabel} {firstInputRequired && <span className="text-red-500">*</span>}
          </label>
        </div>
        <input
          type="number"
          name={secondInputName}
          id={secondInputName}
          value={secondInputValue}
          className="text-combo-input-second"
          onChange={onSecondInputChange}
          {...(secondInputReadOnly && { readOnly: "readOnly" })}
          {...(secondInputRequired && { required: "required" })}
          {...(min && { min: min })}
          {...(max && { max: max })}
        />
      </div>
      {helpText && <p className="input-help">{helpText}</p>}
    </div>
  </>
);
