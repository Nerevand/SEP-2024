import { useAppDispatch, useAppSelector } from "@hooks/useAppStore";
import {
  selectUsersIsError,
  selectUsersLoading,
} from "@features/user/userSelectors";
import UsersTable from "@components/UsersTable";
import Loader from "@components/common/Loader";
import ErrorMessage from "@components/common/ErrorMessage";
import Pagination from "@components/common/Pagination";
import { fetchUsers } from "@features/user/userSlice";

const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();

  //@comment: both of this value u get from state.users. U can do it in one line
  // const { isLoading, isError } = useAppSelector(selectUsersState)
  const isLoading = useAppSelector(selectUsersLoading);
  const isError = useAppSelector(selectUsersIsError);

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
      <UsersTable />
      <Pagination />
    </section>
  );
};

export default HomePage;
