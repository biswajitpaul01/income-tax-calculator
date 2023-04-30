import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import { Alert } from "../Alert";
import { HRAExemptionReport } from "../results/HRAExemptionReport";
import { FormRow } from "../slices/FormRow";

library.add(faArrowRight);

const HraExemption = (props) => {
  const childRef = useRef();
  const [basicSalary, setBasicSalary] = useState(0);
  const [da, setDa] = useState(0);
  const [hra, setHra] = useState(0);
  const [rentPaid, setRentPaid] = useState(0);
  const [liveInMetropolitan, setLiveInMetropolitan] = useState(1);

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
      <Alert type="info">All figures should be in yearly format</Alert>
      <form>
        <div className="grid grid-cols-3 gap-3">
          <FormRow
            label="Basic salary"
            name="basic_salary"
            value={basicSalary}
            className="text-input"
            required="true"
            onChange={(e) => manageBasicSalary(e.target.value)}
          />
          <FormRow
            label="Dearness Allowance (DA)"
            name="da"
            value={da}
            className="text-input"
            onChange={(e) => setDa(e.target.value)}
          />
          <FormRow
            label="House Rent Allowance (HRA)"
            name="hra"
            value={hra}
            className="text-input"
            onChange={(e) => setHra(e.target.value)}
          />
          <FormRow
            label="Annual Rent Paid"
            name="rent_paid"
            value={rentPaid}
            className="text-input"
            required="true"
            onChange={(e) => setRentPaid(e.target.value)}
          />
        </div>
        <div className="flex mt-3">
          <label className="me-3 label">Do you live in metro city?</label>
          <div className="flex items-center mr-4">
            <input
              id="metro-yes"
              type="radio"
              value="1"
              name="metro"
              className="radio-inline"
              defaultChecked={liveInMetropolitan}
              onChange={(e) => setLiveInMetropolitan(e.target.value)}
            />
            <label htmlFor="metro-yes" className="radio-inline-label">
              Yes
            </label>
          </div>
          <div className="flex items-center mr-4">
            <input
              id="metro-no"
              type="radio"
              value="0"
              name="metro"
              className="radio-inline"
              defaultChecked={!liveInMetropolitan}
              onChange={(e) => setLiveInMetropolitan(e.target.value)}
            />
            <label htmlFor="metro-no" className="radio-inline-label">
              No
            </label>
          </div>
        </div>
        <button className="btn btn-primary my-3" disabled={basicSalary <= 0 || rentPaid <= 0} onClick={calculate}>
          Calculate
          <FontAwesomeIcon icon="arrow-right" className="ml-2" />
        </button>
      </form>

      <hr />

      <HRAExemptionReport
        ref={childRef}
        basicSalary={basicSalary}
        da={da}
        hra={hra}
        rentPaid={rentPaid}
        liveInMetorpolitan={liveInMetropolitan}
      />
    </>
  );
};

export default HraExemption;
