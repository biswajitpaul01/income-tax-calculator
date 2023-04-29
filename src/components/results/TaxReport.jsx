import { useEffect, useState } from "react";
import { calculateTaxAndCess } from "../../config/utils";
import { TableRow } from "../TableRow";
import { SalaryBreakdown } from "./SalaryBreakdown";

export const TaxReport = ({ income, totalSalary, pf }) => {
  const [taxPayable, setTaxPayable] = useState(0);
  const [cessCharge, setCessCharge] = useState(0);
  const [totalTaxPayable, setTotalTaxPayable] = useState(0);

  useEffect(() => {
    calculateTax(income);
  }, [income]);

  const calculateTax = (income) => {
    const { tax, cess } = calculateTaxAndCess(income);
    setTaxPayable(tax);
    setCessCharge(cess);
    setTotalTaxPayable(tax + cess);
  };

  return (
    <div className="result-box">
      <p className="text-2xl font-extralight">Tax Report</p>
      <table className="border-collapse border border-slate-400 mt-3 w-full">
        <tbody>
          <TableRow label="Income Chargeable To Tax" value={income} />
          <TableRow label="INCOME TAX PAYABLE" value={taxPayable} />
          <TableRow
            label="Health and Education Cess (Tax Payable x 4%)"
            value={cessCharge}
          />
          <TableRow
            label="TOTAL INCOME TAX & S/C & CESS PAYABLE"
            value={totalTaxPayable}
          />
        </tbody>
      </table>
      <SalaryBreakdown annualSalary={totalSalary} annualTax={totalTaxPayable} annualPf={pf} />
    </div>
  );
};
