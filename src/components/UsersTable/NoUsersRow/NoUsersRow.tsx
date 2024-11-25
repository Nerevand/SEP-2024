import ErrorMessage from "@components/common/ErrorMessage";

//@comment: NoUsersRow - bad naming. It is EmptyState 
const NoUsersRow = (): JSX.Element => {
  return (
    <tr>
      <td colSpan={5} className="px-2 py-2 text-sm md:px-4 md:text-base">
        <ErrorMessage className="my-20 text-center">
          No users found.
        </ErrorMessage>
      </td>
    </tr>
  );
};

export default NoUsersRow;
