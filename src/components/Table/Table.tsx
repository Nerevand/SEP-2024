import { Column, Row, TableRowClick } from "@types";

import THeadRow from "./THeadRow";
import TBodyRow from "./TBodyRow";
import EmptyState from "./EmptyState";

interface ITableProps {
  columns: Column[];
  rows: Row[];
  onRowClick?: TableRowClick;
}

const Table: React.FC<ITableProps> = ({ columns, rows, onRowClick }) => {
  return (
    <div className="mb-8 overflow-x-auto">
      <table className="min-w-full table-fixed border-collapse cursor-default text-left">
        <thead>
          <THeadRow columns={columns} />
        </thead>
        <tbody>
          {rows?.length > 0 ? (
            rows.map((rowItem) => (
              <TBodyRow
                key={rowItem.id}
                rowItem={rowItem}
                onRowClick={onRowClick}
                columns={columns}
              />
            ))
          ) : (
            <EmptyState />
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
