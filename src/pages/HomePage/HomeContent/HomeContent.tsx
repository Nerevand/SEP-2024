import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { useAppSelector } from "@hooks/useAppStore";
import { formatTableData } from "@helpers/formatTableData";
import {
  selectCurrentPage,
  selectPaginatedUsers,
  selectTotalPages,
  selectUsersState,
} from "@features/user/userSelectors";
import Table from "@components/Table";
import Pagination from "@components/Pagination";

const HomeContent: React.FC = () => {
  const navigate = useNavigate();

  const { users } = useAppSelector(selectUsersState);
  const totalPages = useAppSelector(selectTotalPages);
  const currentPage = useAppSelector(selectCurrentPage);
  const paginatedUsers = useAppSelector(selectPaginatedUsers);

  const { headingData, tableData } = useMemo(
    () => formatTableData(paginatedUsers),
    [paginatedUsers],
  );

  const handleClick = (id: string | number): void => {
    navigate(`/user/${id}`);
  };

  return (
    <section className="flex flex-grow flex-col justify-between">
      {users.length > 0 && (
        <>
          <Table
            onRowClick={handleClick}
            columns={headingData}
            rows={tableData}
          />
          <Pagination totalPages={totalPages} currentPage={currentPage} />
        </>
      )}
    </section>
  );
};

export default HomeContent;
