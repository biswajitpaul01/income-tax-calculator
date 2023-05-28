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
  const [mediInsPremium, setMediInsPremium] = useState(0);
  const [gratuityPercent, setGratuityPercent] = useState(4.81);
  const [gratuity, setGratuity] = useState(0);
  const [employeePFPercent, setEmployeePFPercent] = useState(12);
  const [employeePF, setEmployeePF] = useState(0);
  const [otherIncome, setOtherIncome] = useState(0);
  const [chargableIncome, setChargableIncome] = useState(0);
  const [totalSalary, setTotalSalary] = useState(0);
  const [standardDeduction, setStandardDeduction] = useState(50000);
  const [profTax, setProfTax] = useState(2400);
  const [eightyCCD2Deduction, setEightyCCD2Deduction] = useState(0);
  const [homeLoanInterest, setHomeLoanInterest] = useState(0);

  useEffect(() => {
    const gratuity = Math.round((basicSalary * gratuityPercent) / 100);
    setGratuity(gratuity);

    const employeePF = Math.round((basicSalary * employeePFPercent) / 100);
    setEmployeePF(employeePF);

    let totalIncome = parseFloat(ctc) + parseFloat(otherIncome);

    const totalSalary = Math.round(
      totalIncome - gratuity - employeePF - mediInsPremium
    );
    setTotalSalary(totalSalary);
  }, [
    basicSalary,
    ctc,
    employeePFPercent,
    gratuityPercent,
    mediInsPremium,
    otherIncome,
  ]);

  const calculateTaxChargeableIncome = (e) => {
    e.preventDefault();
    const totalDeduction =
      parseFloat(standardDeduction) +
      parseFloat(eightyCCD2Deduction) +
      parseFloat(homeLoanInterest);
    const income = Math.round(totalSalary - totalDeduction);

    setChargableIncome(income);
  };

  return (
    <>
      <Alert type="info">All figures should be in yearly format</Alert>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <FormRowFloatable
            label="CTC"
            name="ctc"
            value={ctc}
            required="true"
            className="text-input"
            onChange={(e) => setCTC(e.target.value)}
          />
          <FormRowFloatable
            label="Basic Salary"
            name="basic_salary"
            value={basicSalary}
            className="text-input"
            required="true"
            onChange={(e) => setBasicSalary(e.target.value)}
          />
          <FormRowFloatable
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
            firstInputName="employee_pf_percent"
            firstInputValue={employeePFPercent}
            firstInputRequired={true}
            onFirstInputChange={(e) => setEmployeePFPercent(e.target.value)}
            secondInputLabel="Employee PF (12% of Basic)"
            secondInputName="employee_pf"
            secondInputValue={employeePF}
            secondInputReadOnly={true}
          />
          <FormRowFloatable
            label="Other Income"
            name="other_income"
            value={otherIncome}
            className="text-input"
            onChange={(e) => setOtherIncome(e.target.value)}
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
          pf={employeePF}
          profTax={profTax}
          method="new"
        />
      )}
    </>
  );
};

export default NewIncomeTax;
