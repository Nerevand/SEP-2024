import { useNavigate } from "react-router-dom";

import { useAppSelector } from "@hooks/useAppStore";
import { selectPaginatedUsers } from "@features/user/userSelectors";

import TableRow from "./TableRow";
import NoUsersRow from "./NoUsersRow";

//@comment. It is not global component. That table works only with users data. Rewrite it and make more flexible

const UsersTable = () => {
  const navigate = useNavigate();

  const paginatedUsers = useAppSelector(selectPaginatedUsers);

  const handleClick = (id: number): void => {
    navigate(`/user/${id}`);
  };

  return (
    <div className="mb-8">
      <table className="min-w-full table-fixed border-collapse cursor-default text-left">
        <thead>
          <tr>
            <th className="bg-gainsboro border-b px-2 py-3 text-sm sm:text-base md:px-4 md:py-4">
              ID
            </th>
            <th className="bg-gainsboro border-b px-2 py-3 text-sm sm:text-base md:px-4 md:py-4">
              Name
            </th>
            <th className="bg-gainsboro hidden border-b px-2 py-3 text-sm sm:text-base md:px-4 md:py-4 lg:table-cell">
              Username
            </th>
            <th className="bg-gainsboro hidden border-b px-2 py-3 text-sm sm:text-base md:table-cell md:px-4 md:py-4">
              Email
            </th>
            <th className="bg-gainsboro border-b px-2 py-3 text-sm sm:text-base md:px-4 md:py-4">
              Company Name
            </th>
          </tr>
        </thead>
        <tbody>
          {paginatedUsers?.length > 0 ? (
            paginatedUsers.map((user) => (
              <TableRow key={user.id} user={user} onClick={handleClick} />
            ))
          ) : (
            <NoUsersRow />
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
