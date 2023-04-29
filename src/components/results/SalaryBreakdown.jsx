import { TableRow } from "../TableRow";

export const SalaryBreakdown = ({ annualSalary, annualTax, annualPf }) => {
  const monthlySalary = annualSalary / 12;
  const monthlyTax = annualTax / 12;
  const monthlyPf = annualPf / 12;
  const monthlyProfTax = 200;
  const monthlySalaryAfterTax = monthlySalary - monthlyTax - monthlyPf - monthlyProfTax - 3742;

  return (
    <>
      <p className="text-2xl font-extralight mt-2">Salary Breakdown</p>
      <table className="border-collapse border border-slate-400 mt-3 w-full">
        <tbody>
          <TableRow label="Salary/Month" value={monthlySalary} />
          <TableRow label="Tax/Month" value={-monthlyTax} />
          <TableRow label="Provident Fund/Month" value={-monthlyPf} />
          <TableRow label="Prof.Tax/Month" value="-200" />
          <TableRow
            label="Monthly Salary After Tax"
            value={monthlySalaryAfterTax}
          />
        </tbody>
      </table>
    </>
  );
};
