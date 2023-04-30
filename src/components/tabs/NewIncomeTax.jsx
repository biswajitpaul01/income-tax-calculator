import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Alert } from "../Alert";
import { TaxReport } from "../results/TaxReport";
import { FormRow } from "../slices/FormRow";
import { FormRowComboInput } from "../slices/FormRowComboInput";
import { FormRowFloatable } from "../slices/FormRowFloatable";

library.add(faArrowRight);

const NewIncomeTax = () => {
  const [ctc, setCTC] = useState(0);
  const [basicSalary, setBasicSalary] = useState(0);
  const [gratuityPercent, setGratuityPercent] = useState(4.81);
  const [gratuity, setGratuity] = useState(0);
  const [pfPercent, setPFPercent] = useState(12);
  const [pf, setPF] = useState(0);
  const [mediInsPremium, setMediInsPremium] = useState(0);
  const [chargableIncome, setChargableIncome] = useState(0);
  const [totalSalary, setTotalSalary] = useState(0);
  const [standardDeduction, setStandardDeduction] = useState(50000);
  const [profTax, setProfTax] = useState(2400);
  const [eightyCCD2Deduction, setEightyCCD2Deduction] = useState(0);
  const [homeLoanInterest, setHomeLoanInterest] = useState(0);

  useEffect(() => {
    let gratuity = Math.round((basicSalary * gratuityPercent) / 100);
    setGratuity(gratuity);

    let pf = Math.round((basicSalary * pfPercent) / 100);
    setPF(pf);

    let totalSalary = Math.round(ctc - gratuity - pf - mediInsPremium);
    setTotalSalary(totalSalary);
  }, [basicSalary, ctc, gratuityPercent, mediInsPremium, pfPercent]);

  const calculateTaxChargeableIncome = (e) => {
    e.preventDefault();
    let totalDeduction =
      parseFloat(standardDeduction) +
      parseFloat(profTax) +
      parseFloat(eightyCCD2Deduction) +
      parseFloat(homeLoanInterest);
    let income = Math.round(totalSalary - totalDeduction);
    setChargableIncome(income);
  };

  return (
    <>
      <Alert type="info">All figures should be in yearly format</Alert>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <FormRow
            label="CTC"
            name="ctc"
            value={ctc}
            required="true"
            className="text-input"
            onChange={(e) => setCTC(e.target.value)}
          />
          <FormRow
            label="Basic Salary"
            name="basic_salary"
            value={basicSalary}
            className="text-input"
            required="true"
            onChange={(e) => setBasicSalary(e.target.value)}
          />
          <FormRow
            label="Medical Insr Premium from Salary Slip"
            name="mediclaim"
            value={mediInsPremium}
            className="text-input"
            onChange={(e) => setMediInsPremium(e.target.value)}
          />
          <FormRowComboInput
            firstInputLabel="Basic %"
            firstInputName="gratuity_percent"
            firstInputValue={gratuityPercent}
            firstInputRequired={true}
            onFirstInputChange={(e) => setGratuityPercent(e.target.value)}
            secondInputLabel="Gratuity (4.81% of Basic)"
            secondInputName="gratuity"
            secondInputValue={gratuity}
            secondInputReadOnly={true}
          />
          <FormRowComboInput
            firstInputLabel="Basic %"
            firstInputName="pf_percent"
            firstInputValue={pfPercent}
            firstInputRequired={true}
            onFirstInputChange={(e) => setPFPercent(e.target.value)}
            secondInputLabel="Provident Fund (12% of Basic)"
            secondInputName="pf"
            secondInputValue={pf}
            secondInputReadOnly={true}
          />
          <FormRow
            label="Total Income"
            name="total_salary"
            value={totalSalary}
            className="text-input"
            onChange={(e) => setTotalSalary(e.target.value)}
          />
          <p className="col-span-3">Deductions</p>

          <FormRowFloatable
            label="Standard Deduction"
            name="standard_deduction"
            value={standardDeduction}
            className="text-input"
            onChange={(e) => setStandardDeduction(e.target.value)}
          />

          <FormRowFloatable
            label="Prof.Tax (Yearly)"
            name="prof_tax"
            value={profTax}
            className="text-input"
            onChange={(e) => setProfTax(e.target.value)}
          />
          <FormRowFloatable
            label="80CCD (2) Deduction"
            name="80ccd2_deduction"
            value={eightyCCD2Deduction}
            className="text-input"
            max="150000"
            helpText="Max allowed: 1.5L"
            onChange={(e) => setEightyCCD2Deduction(e.target.value)}
          />
          <FormRowFloatable
            label="80EE Home Loan Interest"
            name="home_loan_interest"
            value={homeLoanInterest}
            className="text-input"
            max="50000"
            helpText="Max allowed: 50K"
            onChange={(e) => setHomeLoanInterest(e.target.value)}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary my-3"
          disabled={ctc <= 0 || basicSalary <= 0}
          onClick={calculateTaxChargeableIncome}
        >
          Calculate
          <FontAwesomeIcon icon="arrow-right" className="ml-2" />
        </button>
      </form>
      <hr />
      {chargableIncome > 0 && (
        <TaxReport
          income={chargableIncome}
          totalSalary={totalSalary}
          pf={pf}
          profTax={profTax}
          method="new"
        />
      )}
    </>
  );
};

export default NewIncomeTax;
