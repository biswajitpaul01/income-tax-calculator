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

const OldIncomeTax = () => {
  const [ctc, setCTC] = useState(0);
  const [basicSalary, setBasicSalary] = useState(0);
  const [gratuityPercent, setGratuityPercent] = useState(4.81);
  const [gratuity, setGratuity] = useState(0);
  const [employeePFPercent, setEmployeePFPercent] = useState(12);
  const [employeePF, setEmployeePF] = useState(0);
  const [employerPFPercent, setEmployerPFPercent] = useState(13);
  const [employerPF, setEmployerPF] = useState(0);
  const [mediInsPremium, setMediInsPremium] = useState(0);
  const [chargableIncome, setChargableIncome] = useState(0);
  const [totalSalary, setTotalSalary] = useState(0);
  const [hraExemption, setHRAExemption] = useState(0);
  const [standardDeduction, setStandardDeduction] = useState(50000);
  const [profTax, setProfTax] = useState(2400);
  const [eightyCCD1Deduction, setEightyCCD1Deduction] = useState(0);
  const [eightyCCD1BDeduction, setEightyCCD1BDeduction] = useState(0);
  const [mediclaim, setMediclaim] = useState(0);
  const [educationLoanInterest, setEducationLoanInterest] = useState(0);
  const [homeLoanInterest, setHomeLoanInterest] = useState(0);
  const [savingsInterest, setSavingsInterest] = useState(0);
  const [lta, setLTA] = useState(0);

  useEffect(() => {
    const gratuity = Math.round((basicSalary * gratuityPercent) / 100);
    setGratuity(gratuity);

    const employeePF = Math.round((basicSalary * employeePFPercent) / 100);
    setEmployeePF(employeePF);

    const employerPF = Math.round((basicSalary * employerPFPercent) / 100);
    setEmployerPF(employerPF);

    const totalSalary = Math.round(
      ctc - gratuity - employeePF - employerPF - mediInsPremium
    );
    setTotalSalary(totalSalary);
  }, [
    basicSalary,
    ctc,
    gratuityPercent,
    mediInsPremium,
    employeePFPercent,
    employerPFPercent,
  ]);

  const calculateTaxChargeableIncome = (e) => {
    e.preventDefault();
    const totalDeduction =
      parseFloat(hraExemption) +
      parseFloat(standardDeduction) +
      parseFloat(profTax) +
      parseFloat(eightyCCD1Deduction) +
      parseFloat(eightyCCD1BDeduction) +
      parseFloat(mediclaim) +
      parseFloat(educationLoanInterest) +
      parseFloat(homeLoanInterest) +
      parseFloat(savingsInterest) +
      parseFloat(lta);
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
          <FormRowComboInput
            firstInputLabel="Basic %"
            firstInputName="employer_pf_percent"
            firstInputValue={employerPFPercent}
            firstInputRequired={true}
            onFirstInputChange={(e) => setEmployerPFPercent(e.target.value)}
            secondInputLabel="Employer PF (13% of Basic)"
            secondInputName="employer_pf"
            secondInputValue={employerPF}
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
            label="HRA Exemption"
            name="hra_exemption"
            value={hraExemption}
            helpText="Calculate on next tab"
            onChange={(e) => setHRAExemption(e.target.value)}
          />
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
            label="80CCD (1) Deduction"
            name="80ccd1_deduction"
            value={eightyCCD1Deduction}
            className="text-input"
            max="150000"
            helpText="Max allowed: 1.5L"
            onChange={(e) => setEightyCCD1Deduction(e.target.value)}
          />
          <FormRowFloatable
            label="80CCD (1B) Deduction"
            name="80ccd1b_deduction"
            value={eightyCCD1BDeduction}
            className="text-input"
            max="50000"
            helpText="Max allowed: 50K"
            onChange={(e) => setEightyCCD1BDeduction(e.target.value)}
          />
          <FormRowFloatable
            label="80D Medical Insr Premium"
            name="mediclaim"
            value={mediclaim}
            className="text-input"
            max="25000"
            helpText="Max allowed: 25K"
            onChange={(e) => setMediclaim(e.target.value)}
          />
          <FormRowFloatable
            label="80E Education Loan Interest"
            name="education_loan_interest"
            value={educationLoanInterest}
            className="text-input"
            onChange={(e) => setEducationLoanInterest(e.target.value)}
          />
          <FormRowFloatable
            label="80EE Home Loan Interest"
            name="home_loan_interest"
            value={homeLoanInterest}
            className="text-input"
            max="200000"
            helpText="Max allowed: 2L"
            onChange={(e) => setHomeLoanInterest(e.target.value)}
          />
          <FormRowFloatable
            label="80TTA Bank Savings Interest"
            name="saving_interest"
            value={savingsInterest}
            className="text-input"
            max="10000"
            helpText="Max allowed: 10K"
            onChange={(e) => setSavingsInterest(e.target.value)}
          />
          <FormRowFloatable
            label="LTA Availed"
            name="lta"
            value={lta}
            className="text-input"
            onChange={(e) => setLTA(e.target.value)}
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
          method="old"
        />
      )}
    </>
  );
};

export default OldIncomeTax;
