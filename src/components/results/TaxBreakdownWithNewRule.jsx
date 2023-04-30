import { indianCurrency } from "../../config/helpers";

export const TaxBreakdownWithNewRule = ({
  slab1Tax,
  slab2Tax,
  slab3Tax,
  slab4Tax,
  slab5Tax,
  slab6Tax,
  income,
}) => (
  <div className="relative overflow-x-auto sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <caption className="caption-top font-extrabold underline underline-offset-2 mb-2">
        Tax Breakdown of {indianCurrency(income)}
      </caption>
      <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-2 bg-gray-50 dark:bg-gray-800">
            Income
          </th>
          <th scope="col" className="px-6 py-2">
            Tax Rate
          </th>
          <th scope="col" className="px-6 py-2">
            Tax Amount
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-gray-200 dark:border-gray-700">
          <th
            scope="row"
            className="px-6 py-1.5 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
          >
            Up to 3L
          </th>
          <td className="px-6 py-1.5">Nil</td>
          <td className="px-6 py-1.5">{indianCurrency(slab1Tax)}</td>
        </tr>
        <tr className="border-b border-gray-200 dark:border-gray-700">
          <th
            scope="row"
            className="px-6 py-1.5 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
          >
            3L-6L
          </th>
          <td className="px-6 py-1.5">5%</td>
          <td className="px-6 py-1.5">{indianCurrency(slab2Tax)}</td>
        </tr>
        <tr className="border-b border-gray-200 dark:border-gray-700">
          <th
            scope="row"
            className="px-6 py-1.5 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
          >
            6L-9L
          </th>
          <td className="px-6 py-1.5">10%</td>
          <td className="px-6 py-1.5">{indianCurrency(slab3Tax)}</td>
        </tr>
        <tr className="border-b border-gray-200 dark:border-gray-700">
          <th
            scope="row"
            className="px-6 py-1.5 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
          >
            9L-12L
          </th>
          <td className="px-6 py-1.5">15%</td>
          <td className="px-6 py-1.5">{indianCurrency(slab4Tax)}</td>
        </tr>
        <tr className="border-b border-gray-200 dark:border-gray-700">
          <th
            scope="row"
            className="px-6 py-1.5 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
          >
            12L-15L
          </th>
          <td className="px-6 py-1.5">20%</td>
          <td className="px-6 py-1.5">{indianCurrency(slab5Tax)}</td>
        </tr>
        <tr className="border-b border-gray-200 dark:border-gray-700">
          <th
            scope="row"
            className="px-6 py-1.5 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
          >
            Above 15L
          </th>
          <td className="px-6 py-1.5">30%</td>
          <td className="px-6 py-1.5">{indianCurrency(slab6Tax)}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr className="border-b border-gray-200 dark:border-gray-700">
          <th
            scope="row"
            className="px-6 py-1.5 font-bolder text-right text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
          >
            Total Tax
          </th>
          <td className="px-6 py-1.5" colSpan={2}>
            {indianCurrency(
              slab1Tax + slab2Tax + slab3Tax + slab4Tax + slab5Tax + slab6Tax
            )}
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
);
