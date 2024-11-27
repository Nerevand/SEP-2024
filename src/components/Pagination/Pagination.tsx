import { useAppDispatch } from "@hooks/useAppStore";
import { setCurrentPage } from "@features/user/userSlice";
import Button from "@components/ui/Button";

interface IPaginationProps {
  totalPages: number;
  currentPage: number;
}

const Pagination: React.FC<IPaginationProps> = ({
  totalPages,
  currentPage,
}) => {
  const dispatch = useAppDispatch();

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
        Page {totalPages === 0 ? 0 : currentPage} of {totalPages}
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
