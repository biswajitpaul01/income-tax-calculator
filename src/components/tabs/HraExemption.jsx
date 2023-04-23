import { library } from "@fortawesome/fontawesome-svg-core";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { indianCurrency, isBoolean } from "../../config/helpers";
import { FormRow } from "../FormRow";

library.add(faExclamationTriangle);

export const HraExemption = () => {
  const [basicSalary, setBasicSalary] = useState(0);
  const [da, setDa] = useState(0);
  const [hra, setHra] = useState(0);
  const [rentPaid, setRentPaid] = useState(0);
  const [liveInMetorpolitan, setLiveInMetorpolitan] = useState(1);
  const [hraExemption, setHraExemption] = useState(0);
  const [companyProvidedHRA, setCompanyProvidedHra] = useState(0);
  const [excessHouseRentPaid, setExcessHouseRentPaid] = useState(0);
  const [metroHra, setMetroHra] = useState(0);

  const calculateHraExemption = (e) => {
    e.preventDefault();
    const totalBasicSalary = parseFloat(basicSalary) + parseFloat(da);
    const companyProvidedHRA = parseFloat(hra);
    const totalRentPaid = parseFloat(rentPaid);
    const excessHouseRentPaid = totalRentPaid - totalBasicSalary * 0.1;
    const metroHra = isBoolean(liveInMetorpolitan)
      ? companyProvidedHRA * 0.5
      : companyProvidedHRA * 0.4;
    const finalHRAExemption = Math.min(
      companyProvidedHRA,
      excessHouseRentPaid,
      metroHra
    );
    setCompanyProvidedHra(companyProvidedHRA);
    setExcessHouseRentPaid(excessHouseRentPaid);
    setMetroHra(metroHra);
    setHraExemption(finalHRAExemption);
  };

  return (
    <>
      <small className="text-danger text-end d-block pb-2">
        <FontAwesomeIcon icon="exclamation-triangle" /> All numbers should be in
        yearly
      </small>
      <form>
        <FormRow
          label="Basic salary"
          name="basic_salary"
          value={basicSalary}
          className="form-control"
          onChange={(e) => setBasicSalary(e.target.value)}
        />
        <FormRow
          label="DA"
          name="da"
          value={da}
          className="form-control"
          onChange={(e) => setDa(e.target.value)}
        />
        <FormRow
          label="HRA"
          name="hra"
          value={hra}
          className="form-control"
          onChange={(e) => setHra(e.target.value)}
        />
        <FormRow
          label="Annual Rent Paid"
          name="rent_paid"
          value={rentPaid}
          className="form-control"
          onChange={(e) => setRentPaid(e.target.value)}
        />
        <label className="me-3">Do you live in metro city?</label>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="metro"
            id="metro-yes"
            value="1"
            defaultChecked={liveInMetorpolitan}
            onChange={(e) => setLiveInMetorpolitan(e.target.value)}
          />
          <label className="form-check-label" htmlFor="metro-yes">
            Yes
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="metro"
            id="metro-no"
            value="0"
            defaultChecked={!liveInMetorpolitan}
            onChange={(e) => setLiveInMetorpolitan(e.target.value)}
          />
          <label className="form-check-label" htmlFor="metro-no">
            No
          </label>
        </div>
        <br />
        <button
          className="btn btn-primary mt-3"
          onClick={calculateHraExemption}
        >
          Calculate
        </button>
      </form>
      {hraExemption > 0 && (
        <div className="mt-3">
          <p className="lead">HRA Exemption</p>
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
            Minimum of above 3 is {indianCurrency(hraExemption)}
          </p>
        </div>
      )}
    </>
  );
};
