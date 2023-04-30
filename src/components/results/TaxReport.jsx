import { initFlowbite } from "flowbite";
import { useCallback, useEffect, useRef, useState } from "react";
import { scrollIntoView } from "../../config/helpers";
import { calculateTaxAndCess } from "../../config/utils";
import { TableRow } from "../TableRow";
import { PopOverContent } from "../slices/PopOverContent";
import { SalaryBreakdown } from "./SalaryBreakdown";
import { TaxBreakdownWithOldRule } from "./TaxBreakdownWithOldRule";

export const TaxReport = ({ income, totalSalary, pf, profTax }) => {
  const [taxPayable, setTaxPayable] = useState(0);
  const [cessCharge, setCessCharge] = useState(0);
  const [totalTaxPayable, setTotalTaxPayable] = useState(0);
  const reportBox = useRef(null);
  const [taxBreakdowns, setTaxBreakdowns] = useState({});

  const calculateTax = useCallback((income) => {
    const { tax, cess, slab1Tax, slab2Tax, slab3Tax, slab4Tax } = calculateTaxAndCess(income);
    setTaxPayable(tax);
    setCessCharge(cess);
    setTotalTaxPayable(tax + cess);
    setTaxBreakdowns({
      ...taxBreakdowns,
      slab1Tax,
      slab2Tax,
      slab3Tax,
      slab4Tax,
      income
    });
    if (reportBox.current) {
      scrollIntoView(reportBox.current);
      initFlowbite();
    }
  }, []);

  useEffect(() => {
    calculateTax(income);
  }, [calculateTax, income]);

  return (
    <div ref={reportBox} className="result-box">
      <p className="text-2xl font-extralight">Tax Report</p>
      <table className="border-collapse border border-slate-400 mt-3 w-full">
        <tbody>
          <TableRow label="Income Chargeable To Tax" value={income} />
          <TableRow label="Income Tax Payable" value={taxPayable} popoverId="tax_payable" />
          <TableRow
            label="Health and Education Cess (Tax Payable x 4%)"
            value={cessCharge}
          />
          <TableRow
            label="Total Income Tax & S/C & Cess Payable"
            value={totalTaxPayable}
          />
        </tbody>
      </table>
      <SalaryBreakdown annualSalary={totalSalary} annualTax={totalTaxPayable} annualPf={pf} annualProfTax={profTax} />
      <PopOverContent name="tax_payable">
        <TaxBreakdownWithOldRule {...taxBreakdowns} />
      </PopOverContent>
    </div>
  );
};
