import { IUser } from "@types";

interface ITableRowProps {
  user: IUser;
  onClick: (id: number) => void;
}

const TableRow: React.FC<ITableRowProps> = ({
  user,
  onClick,
}: ITableRowProps) => {
  const { id, name, username, email, company } = user;

  return (
    <tr
      onClick={() => onClick(id)}
      className="hover:bg-gray-50 hover:shadow-inner"
    >
      <td className="truncate border-b px-2 py-2 text-sm md:px-4 md:text-base">
        {id}
      </td>
      <td className="truncate border-b px-2 py-2 text-sm md:px-4 md:text-base">
        {name}
        <dl>
          <dt className="sr-only">Username</dt>
          <dd className="text-xs text-gray-500 lg:hidden">{username}</dd>
          <dt className="sr-only">Email</dt>
          <dd className="text-xs text-gray-500 md:hidden">{email}</dd>
        </dl>
      </td>
      <td className="hidden truncate border-b px-2 py-2 text-sm md:px-4 md:text-base lg:table-cell">
        {username}
      </td>
      <td className="hidden truncate border-b px-2 py-2 text-sm md:table-cell md:px-4 md:text-base">
        {email}
      </td>
      <td className="truncate border-b px-2 py-2 text-sm md:px-4 md:text-base">
        {company.name}
      </td>
    </tr>
  );
};

export default TableRow;
