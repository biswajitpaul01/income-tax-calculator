import { useEffect, useState } from "react";
import { TableRow } from "./TableRow";

export const TaxReport = ({ income }) => {
  const [taxPayable, setTaxPayable] = useState(0);
  const [cessCharge, setCessCharge] = useState(0);
  const [totalTaxPayable, setTotalTaxPayable] = useState(0);

  useEffect(() => {
    calculateTax(income);
  }, [income]);

  const calculateTax = (income) => {
    let tax = 0;
    if (income <= 250000) {
      tax = 0;
    } else if (income > 250000 && income <= 500000) {
      tax = (income - 250000) * 0.05;
    } else if (income > 500000 && income <= 1000000) {
      tax = (income - 500000) * 0.2 + 12500;
    } else if (income > 1000000) {
      tax = (income - 1000000) * 0.3 + 112500;
    }
    setTaxPayable(tax);
    let cess = tax * 0.04;
    setCessCharge(cess);
    setTotalTaxPayable(tax + cess);
  };

  return (
    <table className="table table-bordered table-striped-columns">
      <tbody>
        <TableRow label="Income Chargeable To Tax" value={income} />
        <TableRow label="INCOME TAX PAYABLE" value={taxPayable} />
        <TableRow label="Health and Education Cess (Taxable Income x 4%)" value={cessCharge} />
        <TableRow label="TOTAL INCOME TAX & S/C & CESS PAYABLE" value={totalTaxPayable} />
      </tbody>
    </table>
  );
};
