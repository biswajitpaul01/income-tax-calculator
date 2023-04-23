import { library } from "@fortawesome/fontawesome-svg-core";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { FormRow } from "../FormRow";
import { TaxReport } from "../results/TaxReport";

library.add(faExclamationTriangle);

export const OldIncomeTax = () => {
  const [chargableIncome, setChargableIncome] = useState(0);
  const [totalSalary, setTotalSalary] = useState(0);
  const [standardDeduction, setStandardDeduction] = useState(50000);
  const [profTax, setProfTax] = useState(2400);
  const [eightyCCD1Deduction, setEightyCCD1Deduction] = useState(0);
  const [eightyCCD1BDeduction, setEightyCCD1BDeduction] = useState(0);
  const [mediclaim, setMediclaim] = useState(0);

  const calculateChargableIncome = (e) => {
    e.preventDefault();
    let totalDeduction =
      parseFloat(standardDeduction) +
      parseFloat(profTax) +
      parseFloat(eightyCCD1Deduction) +
      parseFloat(eightyCCD1BDeduction) +
      parseFloat(mediclaim);
    let income = Math.round(totalSalary - totalDeduction);
    setChargableIncome(income);
  };

  return (
    <>
      <small className="text-danger text-end d-block pb-2">
        <FontAwesomeIcon icon="exclamation-triangle" /> All numbers should be in
        yearly
      </small>
      <form>
        <FormRow
          label="Total Income"
          name="total_salary"
          value={totalSalary}
          className="form-control"
          onChange={(e) => setTotalSalary(e.target.value)}
        />
        <p className="lead">Deductions</p>
        <FormRow
          label="Less: Standard Deduction"
          name="standard_deduction"
          value={standardDeduction}
          className="form-control"
          onChange={(e) => setStandardDeduction(e.target.value)}
        />
        <FormRow
          label="Less: Prof.Tax (Yearly)"
          name="prof_tax"
          value={profTax}
          className="form-control"
          onChange={(e) => setProfTax(e.target.value)}
        />
        <FormRow
          label="Less: 80CCD (1) Deduction"
          name="80ccd1_deduction"
          value={eightyCCD1Deduction}
          className="form-control"
          max="150000"
          onChange={(e) => setEightyCCD1Deduction(e.target.value)}
        />
        <FormRow
          label="Less: 80CCD (1B) Deduction"
          name="80ccd1b_deduction"
          value={eightyCCD1BDeduction}
          className="form-control"
          max="50000"
          onChange={(e) => setEightyCCD1BDeduction(e.target.value)}
        />
        <FormRow
          label="Less: Medical Insr Premium"
          name="mediclaim"
          value={mediclaim}
          className="form-control"
          onChange={(e) => setMediclaim(e.target.value)}
        />
        <button
          type="button"
          className="btn btn-primary"
          onClick={calculateChargableIncome}
        >
          Calculate
        </button>
      </form>
      <hr />
      {chargableIncome > 0 && <TaxReport income={chargableIncome} />}
    </>
  );
};
