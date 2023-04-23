import { useEffect, useState } from "react";
import { calculateTaxAndCess } from "../../config/utils";
import { TableRow } from "../TableRow";

export const TaxReport = ({ income }) => {
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
