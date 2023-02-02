import { useState } from 'react';
import './App.css';
import { FormRow } from './components/FormRow';
import { TaxReport } from './components/TaxReport';

function App() {
  const [chargableIncome, setChargableIncome] = useState(0);
  const [totalSalary, setTotalSalary] = useState(0);
  const [standardDeduction, setStandardDeduction] = useState(50000);
  const [profTax, setProfTax] = useState(2400);
  const [eightyCCD1Deduction, setEightyCCD1Deduction] = useState(0);
  const [eightyCCD1BDeduction, setEightyCCD1BDeduction] = useState(0);
  const [mediclaim, setMediclaim] = useState(0);

  const calculateChargableIncome = e => {
    e.preventDefault();
    let totalDeduction = parseFloat(standardDeduction) + parseFloat(profTax) + parseFloat(eightyCCD1Deduction) + parseFloat(eightyCCD1BDeduction) + parseFloat(mediclaim);
    let income = Math.round(totalSalary - totalDeduction);
    setChargableIncome(income);
  };

  return (
    <div className="container py-3">
      <div className="row justify-content-md-center">
        <div className="col col-lg-6">
          <form>
            <h2 className="text-center">Old Income Tax Calculator</h2>
            <FormRow label="Total Income" name="total_salary" value={totalSalary} className="form-control" onChange={e => setTotalSalary(e.target.value)} />
            <p className="lead">Deductions</p>
            <FormRow label="Less: Standard Deduction" name="standard_deduction" value={standardDeduction} className="form-control" onChange={e => setStandardDeduction(e.target.value)} />
            <FormRow label="Less: Prof.Tax (Yearly)" name="prof_tax" value={profTax} className="form-control" onChange={e => setProfTax(e.target.value)} />
            <FormRow label="Less: 80CCD (1) Deduction" name="80ccd1_deduction" value={eightyCCD1Deduction} className="form-control" max="150000" onChange={e => setEightyCCD1Deduction(e.target.value)} />
            <FormRow label="Less: 80CCD (1B) Deduction" name="80ccd1b_deduction" value={eightyCCD1BDeduction} className="form-control" max="50000" onChange={e => setEightyCCD1BDeduction(e.target.value)} />
            <FormRow label="Less: Medical Insr Premium" name="mediclaim" value={mediclaim} className="form-control" onChange={e => setMediclaim(e.target.value)} />
            <button type="button" className="btn btn-primary" onClick={calculateChargableIncome}>Calculate</button>
          </form>
          <hr />
          <TaxReport income={chargableIncome} />
        </div>
      </div>
    </div>
  );
}

export default App;
