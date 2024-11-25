import { useAppDispatch, useAppSelector } from "@hooks/useAppStore";
import {
  selectCurrentPage,
  selectTotalPages,
  // selectFilteredUsers,
} from "@features/user/userSelectors";
import { setCurrentPage } from "@features/user/userSlice";
import Button from "@components/ui/Button";

//@comment: it is not common component. Because u connect it for users. Rewrite and make it more flexible

const Pagination: React.FC = () => {
  const dispatch = useAppDispatch();

  // const filteredUsers = useAppSelector(selectFilteredUsers);
  const totalPages = useAppSelector(selectTotalPages);
  const currentPage = useAppSelector(selectCurrentPage);

  const handlePageChange = (page: number): void => {
    if (page >= 1 && page <= totalPages) {
      dispatch(setCurrentPage(page));
    }
  };

  return (
    <div className="flex items-center justify-center gap-2 py-3">
      <Button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </Button>
      <span className="text-sm md:text-base">
        {/* Page {!filteredUsers.length ? 0 : currentPage} of {totalPages} */}
        Page {currentPage} of {totalPages}
      </span>
      <Button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages || totalPages === 0}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
