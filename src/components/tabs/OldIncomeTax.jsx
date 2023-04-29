import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Alert } from "../Alert";
import { FormRow } from "../FormRow";
import { TaxReport } from "../results/TaxReport";

library.add(faArrowRight);

const OldIncomeTax = () => {
  const [ctc, setCTC] = useState(0);
  const [basicSalary, setBasicSalary] = useState(0);
  const [gratuity, setGratuity] = useState(0);
  const [pf, setPF] = useState(0);
  const [mediInsPremium, setMediInsPremium] = useState(0);
  const [chargableIncome, setChargableIncome] = useState(0);
  const [totalSalary, setTotalSalary] = useState(0);
  const [hraExemption, setHRAExemption] = useState(0);
  const [standardDeduction, setStandardDeduction] = useState(50000);
  const [profTax, setProfTax] = useState(2400);
  const [eightyCCD1Deduction, setEightyCCD1Deduction] = useState(0);
  const [eightyCCD1BDeduction, setEightyCCD1BDeduction] = useState(0);
  const [mediclaim, setMediclaim] = useState(0);

  useEffect(() => {
    let gratuity = Math.round((basicSalary * 4.8) / 100);
    setGratuity(gratuity);

    let pf = Math.round((basicSalary * 12) / 100);
    setPF(pf);

    let totalSalary = Math.round(ctc - gratuity - pf - mediInsPremium);
    setTotalSalary(totalSalary);
  }, [basicSalary, ctc, mediInsPremium]);

  const calculateChargableIncome = (e) => {
    e.preventDefault();
    let totalDeduction =
      parseFloat(hraExemption) +
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
      <Alert type="info">All figures should be in yearly format</Alert>
      <form>
        <div className="grid grid-cols-3 gap-3">
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
          <FormRow
            label="Gratuity (4.8% of Basic)"
            name="gratuity"
            value={gratuity}
            className="text-input"
            readOnly="true"
          />
          <FormRow
            label="Provident Fund (12% of Basic)"
            name="pf"
            value={pf}
            className="text-input"
            readOnly="true"
          />
          <FormRow
            label="Total Income"
            name="total_salary"
            value={totalSalary}
            className="text-input"
            onChange={(e) => setTotalSalary(e.target.value)}
          />
          <p className="col-span-3">Deductions</p>
          <FormRow
            label="Less: HRA Exemption"
            name="hra_exemption"
            value={hraExemption}
            className="text-input"
            helpText="Calculate on next tab"
            onChange={(e) => setHRAExemption(e.target.value)}
          />          
          <FormRow
            label="Less: Standard Deduction"
            name="standard_deduction"
            value={standardDeduction}
            className="text-input"
            onChange={(e) => setStandardDeduction(e.target.value)}
          />
          <FormRow
            label="Less: Prof.Tax (Yearly)"
            name="prof_tax"
            value={profTax}
            className="text-input"
            onChange={(e) => setProfTax(e.target.value)}
          />
          <FormRow
            label="Less: 80CCD (1) Deduction"
            name="80ccd1_deduction"
            value={eightyCCD1Deduction}
            className="text-input"
            max="150000"
            onChange={(e) => setEightyCCD1Deduction(e.target.value)}
          />
          <FormRow
            label="Less: 80CCD (1B) Deduction"
            name="80ccd1b_deduction"
            value={eightyCCD1BDeduction}
            className="text-input"
            max="50000"
            onChange={(e) => setEightyCCD1BDeduction(e.target.value)}
          />
          <FormRow
            label="Less: Medical Insr Premium"
            name="mediclaim"
            value={mediclaim}
            className="text-input"
            onChange={(e) => setMediclaim(e.target.value)}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary my-3"
          onClick={calculateChargableIncome}
        >
          Calculate
          <FontAwesomeIcon icon="arrow-right" className="ml-2" />
        </button>
      </form>
      <hr />
      {chargableIncome > 0 && <TaxReport income={chargableIncome} totalSalary={totalSalary} pf={pf} />}
    </>
  );
};

export default OldIncomeTax;
