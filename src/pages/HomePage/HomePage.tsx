import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@hooks/useAppStore";
import { formatTableData } from "@helpers/formatTableData";
import { fetchUsers } from "@features/user/userSlice";
import {
  selectCurrentPage,
  selectPaginatedUsers,
  selectTotalPages,
  selectUsersState,
} from "@features/user/userSelectors";
import Table from "@components/Table";
import Loader from "@components/common/Loader";
import ErrorMessage from "@components/common/ErrorMessage";
import Pagination from "@components/Pagination";

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { users, isError, isLoading } = useAppSelector(selectUsersState);
  const totalPages = useAppSelector(selectTotalPages);
  const currentPage = useAppSelector(selectCurrentPage);
  const paginatedUsers = useAppSelector(selectPaginatedUsers);

  const { headingData, tableData } = formatTableData(paginatedUsers);

  useEffect(() => {
    if (!isLoading && !users.length) {
      dispatch(fetchUsers());
    }
  }, [dispatch]);

  const handleClick = (id: string | number): void => {
    navigate(`/user/${id}`);
  };

  if (isLoading) return <Loader />;
  if (isError)
    return (
      <ErrorMessage className="text-center">
        Failed loading users.
        <span className="mt-2 block cursor-pointer text-gray-500">
          <span
            onClick={() => dispatch(fetchUsers())}
            className="inline-block border-b"
          >
            Try again
          </span>
        </span>
      </ErrorMessage>
    );

  return (
    <section className="flex flex-grow flex-col justify-between">
      <Table onRowClick={handleClick} columns={headingData} rows={tableData} />
      <Pagination totalPages={totalPages} currentPage={currentPage} />
    </section>
  );
};

export default HomePage;
