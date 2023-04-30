import { TableRow } from "../TableRow";

export const SalaryBreakdown = ({ annualSalary, annualTax, annualPf, annualProfTax }) => {
  const monthlySalary = annualSalary / 12;
  const monthlyTax = annualTax / 12;
  const monthlyPf = annualPf / 12;
  const monthlyProfTax = annualProfTax / 12;
  const monthlySalaryAfterTax =
    monthlySalary - monthlyTax - monthlyPf - monthlyProfTax;

  return (
    <>
      <p className="text-2xl font-extralight mt-2">Salary Breakdown</p>
      <table className="border-collapse border border-slate-400 mt-3 w-full">
        <caption className="caption-bottom italic text-sm text-slate-500 mt-2">
          Note: This is only an approximate calculation and may vary from the actual.
        </caption>
        <thead>
          <tr>
            <th className="border border-orange-300 p-2 bg-orange-200">
              Per Month
            </th>
            <th className="border border-orange-300 p-2 bg-orange-200">Amount</th>
          </tr>
        </thead>
        <tbody>
          <TableRow label="Salary" value={monthlySalary} />
          <TableRow label="Tax" value={-monthlyTax} />
          <TableRow label="Provident Fund" value={-monthlyPf} />
          <TableRow label="Professional Tax" value={-monthlyProfTax} />
          <TableRow label="Salary After Tax" value={monthlySalaryAfterTax} />
        </tbody>
      </table>
    </>
  );
};
