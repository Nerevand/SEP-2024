import { Column } from "@types";

interface ITHeadRowProps {
  columns: Column[];
}

const THeadRow: React.FC<ITHeadRowProps> = ({ columns }) => {
  return (
    <tr className="hidden md:table-row">
      {columns.map((headItem) => (
        <th
          key={headItem.key}
          className="border-b bg-gainsboro px-2 py-3 text-sm md:px-4 md:py-4 lg:text-base"
        >
          {headItem.label}
        </th>
      ))}
    </tr>
  );
};

export default THeadRow;
