import { indianCurrency } from "../../config/helpers";

export const TaxBreakdownWithOldRule = ({
  slab1Tax,
  slab2Tax,
  slab3Tax,
  slab4Tax,
  income,
}) => (
  <div className="relative overflow-x-auto sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <caption class="caption-top font-extrabold underline underline-offset-2 mb-2">
        Tax Breakdown of {indianCurrency(income)}
      </caption>
      <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
            Income
          </th>
          <th scope="col" className="px-6 py-3">
            Tax Rate
          </th>
          <th scope="col" className="px-6 py-3">
            Tax Amount
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-gray-200 dark:border-gray-700">
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
          >
            Up to 2.5L
          </th>
          <td className="px-6 py-4">Nil</td>
          <td className="px-6 py-4">{indianCurrency(slab1Tax)}</td>
        </tr>
        <tr className="border-b border-gray-200 dark:border-gray-700">
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
          >
            2.5L-5L
          </th>
          <td className="px-6 py-4">5%</td>
          <td className="px-6 py-4">{indianCurrency(slab2Tax)}</td>
        </tr>
        <tr className="border-b border-gray-200 dark:border-gray-700">
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
          >
            5L-10L
          </th>
          <td className="px-6 py-4">20%</td>
          <td className="px-6 py-4">{indianCurrency(slab3Tax)}</td>
        </tr>
        <tr className="border-b border-gray-200 dark:border-gray-700">
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
          >
            Above 10L
          </th>
          <td className="px-6 py-4">30%</td>
          <td className="px-6 py-4">{indianCurrency(slab4Tax)}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr className="border-b border-gray-200 dark:border-gray-700">
          <th
            scope="row"
            className="px-6 py-4 font-bolder text-right text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
          >
            Total
          </th>
          <td className="px-6 py-4" colSpan={2}>
            {indianCurrency(slab1Tax + slab2Tax + slab3Tax + slab4Tax)}
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
);
