import { Column, Row, TableRowClick } from "@types";

interface ITableRowProps {
  rowItem: Row;
  columns: Column[];
  onRowClick?: TableRowClick;
}

const TBodyRow: React.FC<ITableRowProps> = ({
  rowItem,
  columns,
  onRowClick,
}: ITableRowProps) => {
  return (
    <tr
      onClick={() => onRowClick?.(rowItem?.id)}
      className="hover:bg-gray-50 hover:shadow-inner"
    >
      {/* sm screen */}
      <td className="table-cell truncate border-b px-2 py-2 text-sm font-medium md:hidden md:px-4 md:text-base">
        {columns.map((colItem) => (
          <div key={colItem.key} className="mb-2">
            {colItem.label}
          </div>
        ))}
      </td>

      <td className="table-cell truncate border-b px-2 py-2 text-sm md:hidden md:px-4 md:text-base">
        {columns.map((colItem) => (
          <div key={colItem.key} className="mb-2 text-gray-500">
            {rowItem[colItem.key]}
          </div>
        ))}
      </td>

      {/* md/up screen */}
      {columns.map((colItem) => (
        <td
          key={colItem.key}
          className={`hidden truncate border-b px-2 py-2 text-sm md:table-cell md:px-4 lg:text-base`}
        >
          {rowItem[colItem.key]}
        </td>
      ))}
    </tr>
  );
};

export default TBodyRow;
