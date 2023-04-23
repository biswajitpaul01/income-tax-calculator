import { forwardRef, useImperativeHandle, useState } from "react";
import { indianCurrency } from "../../config/helpers";
import { getHRAExemption } from "../../config/utils";

export const HRAExemptionReport = forwardRef((props, ref) => {
  const [companyProvidedHRA, setCompanyProvidedHra] = useState(0);
  const [excessHouseRentPaid, setExcessHouseRentPaid] = useState(0);
  const [metroHra, setMetroHra] = useState(0);
  const [hraExemption, setHraExemption] = useState(0);

  useImperativeHandle(ref, () => ({
    calculateHraExemption() {
        const { companyProvidedHRA, excessHouseRentPaid, metroHra, finalHRAExemption } = getHRAExemption(props);
        setCompanyProvidedHra(companyProvidedHRA);
        setExcessHouseRentPaid(excessHouseRentPaid);
        setMetroHra(metroHra);
        setHraExemption(finalHRAExemption);
    }
  }), [props]);

  return (
    <>
      {hraExemption > 0 && (
        <div className="mt-3" ref={ref}>
          <p className="lead">HRA Exemption Rules</p>
          <ol>
            <li>
              Actual house rent allowance received from your employer:{" "}
              <span className="text-info">
                {indianCurrency(companyProvidedHRA)}
              </span>
            </li>
            <li>
              Actual house rent paid minus 10% of your basic salary:{" "}
              <div className="text-info">
                {indianCurrency(excessHouseRentPaid)}
              </div>
            </li>
            <li>
              50% of your basic salary if you live in a metro or 40% of your
              basic salary if you live in a non-metro:{" "}
              <div className="text-info">{indianCurrency(metroHra)}</div>
            </li>
          </ol>
          <p className="lead p-3 bg-success text-white rounded">
            Minimum of above 3 rules is {indianCurrency(hraExemption)}
          </p>
        </div>
      )}
    </>
  );
});
