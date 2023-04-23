import { library } from "@fortawesome/fontawesome-svg-core";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import { FormRow } from "../FormRow";
import { HRAExemptionReport } from "../results/HRAExemptionReport";

library.add(faExclamationTriangle);

export const HraExemption = (props) => {
  const childRef = useRef();
  const [basicSalary, setBasicSalary] = useState(0);
  const [da, setDa] = useState(0);
  const [hra, setHra] = useState(0);
  const [rentPaid, setRentPaid] = useState(0);
  const [liveInMetorpolitan, setLiveInMetorpolitan] = useState(1);

  const manageBasicSalary = (basicAmount) => {
    setBasicSalary(basicAmount);
    setHra(basicAmount * 0.5);
  };


  const calculate = (e) => {
    e.preventDefault();
    childRef.current.calculateHraExemption();
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
          onChange={(e) => manageBasicSalary(e.target.value)}
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
          onClick={calculate}
        >
          Calculate
        </button>
      </form>

      <HRAExemptionReport ref={childRef} basicSalary={basicSalary} da={da} hra={hra} rentPaid={rentPaid} liveInMetorpolitan={liveInMetorpolitan} />
    </>
  );
};
