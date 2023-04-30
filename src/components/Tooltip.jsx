import { library } from "@fortawesome/fontawesome-svg-core";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faCircleInfo);

export const Tooltip = ({ name, infoText }) => (
<>
  <button
    data-tooltip-target={`tooltip-${name}`}
    data-popover-placement="top"
    type="button"
  >
    <FontAwesomeIcon size="lg" icon={faCircleInfo} style={{ color: "#0ea5e9" }} />
  </button>
  <div
    id={`tooltip-${name}`}
    role="tooltip"
    className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-sky-500 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
  >
    {infoText}
    <div className="tooltip-arrow" data-popper-arrow></div>
  </div>
</>
);
