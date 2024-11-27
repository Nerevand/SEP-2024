import { IUser } from "@types";

export const formatTableData = (paginatedUsers: IUser[]) => {
  const tableData = paginatedUsers.map((user) => ({
    id: user.id,
    name: user.name,
    username: user.username,
    email: user.email,
    companyName: user.company.name,
  }));

  const headingData = [
    { label: "ID", key: "id" },
    { label: "Name", key: "name" },
    {
      label: "Username",
      key: "username",
    },
    { label: "Email", key: "email" },
    { label: "Company Name", key: "companyName" },
  ];

  return { tableData, headingData };
};
