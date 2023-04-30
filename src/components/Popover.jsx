import { library } from "@fortawesome/fontawesome-svg-core";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PopOverContent } from "./slices/PopOverContent";

library.add(faCircleInfo);

export const Popover = ({ name, infoText }) => (
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
      <PopOverContent name={name}>
        <p>{infoText}</p>
      </PopOverContent>
    </>
  );
