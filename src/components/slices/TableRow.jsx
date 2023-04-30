import { indianCurrency } from '../../config/helpers';
export const TableRow = ({ label, value, popoverId }) => (
  <tr>
    <th className='border border-slate-300 p-2' align='left'>{label}</th>
    <td className='border border-slate-300 p-2' align='right' {...(popoverId && { "data-popover-placement": "top", "data-popover-target": `popover-${popoverId}` }) }>
      <span className={`${ popoverId ? 'underline underline-offset-4 decoration-dotted decoration-teal-500 cursor-pointer' : '' }`}>{indianCurrency(value)}</span>      
    </td>
  </tr>
);
