import { indianCurrency } from '../config/helpers';
export const TableRow = ({ label, value }) => (
  <tr>
    <th>{label}</th>
    <td align="right">
      {indianCurrency(value)}
    </td>
  </tr>
);
