import { library } from "@fortawesome/fontawesome-svg-core";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faCircleInfo);

export const Popover = ({ name, infoText }) => {
  return (
    <>
      <button
        data-popover-target={`popover-${name}`}
        data-popover-placement="top"
        type="button"
      >
        <FontAwesomeIcon
          size="lg"
          icon={faCircleInfo}
          style={{ color: "#0ea5e9" }}
        />
      </button>
      <div
        data-popover
        id={`popover-${name}`}
        role="tooltip"
        className="absolute z-10 invisible inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 w-72 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400"
      >
        <div className="p-3 space-y-2">
          <p>{infoText}</p>
        </div>
        <div data-popper-arrow></div>
      </div>
    </>
  );
};
