import { forwardRef, useImperativeHandle, useState } from "react";
import { indianCurrency } from "../../config/helpers";
import { getHRAExemption } from "../../config/utils";
import { Alert } from "../Alert";

export const HRAExemptionReport = forwardRef((props, ref) => {
  const [companyProvidedHRA, setCompanyProvidedHra] = useState(0);
  const [excessHouseRentPaid, setExcessHouseRentPaid] = useState(0);
  const [metroHra, setMetroHra] = useState(0);
  const [hraExemption, setHraExemption] = useState(0);

  useImperativeHandle(
    ref,
    () => ({
      calculateHraExemption() {
        const {
          companyProvidedHRA,
          excessHouseRentPaid,
          metroHra,
          finalHRAExemption,
        } = getHRAExemption(props);
        setCompanyProvidedHra(companyProvidedHRA);
        setExcessHouseRentPaid(excessHouseRentPaid);
        setMetroHra(metroHra);
        setHraExemption(finalHRAExemption);
      },
    }),
    [props]
  );

  return (
    <>
      {hraExemption > 0 && (
        <div className="result-box" ref={ref}>
          <p className="text-2xl font-extralight">HRA Exemption Rules</p>
          <ul className="list-decimal mb-3 list-inside">
            <li>
              Actual house rent allowance received from your employer:
              <span className="text-cyan-400 font-semibold ml-1">
                {indianCurrency(companyProvidedHRA)}
              </span>
            </li>
            <li>
              Actual house rent paid minus 10% of your basic salary:
              <span className="text-cyan-400 font-semibold ml-1">
                {indianCurrency(excessHouseRentPaid)}
              </span>
            </li>
            <li>
              50% of your basic salary if you live in a metro or 40% of your
              basic salary if you live in a non-metro:
              <span className="text-cyan-400 font-semibold ml-1">
                {indianCurrency(metroHra)}
              </span>
            </li>
          </ul>
          <Alert type="success">
            Minimum of above 3 rules is {indianCurrency(hraExemption)}
          </Alert>
        </div>
      )}
    </>
  );
});
