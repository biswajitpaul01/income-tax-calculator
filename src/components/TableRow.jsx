import { indianCurrency } from '../config/helpers';
export const TableRow = ({ label, value }) => (
  <tr>
    <th className='border border-slate-300 p-2' align='left'>{label}</th>
    <td className='border border-slate-300 p-2' align='right'>
      {indianCurrency(value)}
    </td>
  </tr>
);
