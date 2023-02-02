export const TableRow = ({ label, value }) => (
  <tr>
    <th>{label}</th>
    <td align="right">
      {Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
      }).format(value)}
    </td>
  </tr>
);
