import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCheckCircle,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faCheckCircle, faExclamationCircle);

export const Alert = ({ type, children }) => {
  const alertClasses = `flex items-center gap-3 mb-3 alert alert-${type}`;
  const alertTypes = {
    info: "exclamation-circle",
    success: "check-circle",
  };

  return (
    <div className={alertClasses} role="alert">
      <FontAwesomeIcon size="lg" icon={alertTypes[type]} />
      <div>{children}</div>
    </div>
  );
};
