import { useParams } from "react-router-dom";

import { IUser } from "@types";
import { useAppSelector } from "@hooks/useAppStore";
import { selectUsers, selectUsersState } from "@features/user/userSelectors";
import Loader from "@components/common/Loader";
import ErrorMessage from "@components/common/ErrorMessage";

import UserDetailsItem from "./UserDetailsItem";

export interface IUserDetails {
  title: string;
  details: IDetails[];
}
export interface IDetails {
  label: string;
  value: string;
}

const INITIAL_USER = {
  id: "",
  name: "",
  username: "",
  email: "",
  phone: "",
  website: "",
  company: { name: "", companyName: "" },
  address: { street: "", suite: "", city: "", zipcode: "" },
};

const UserDetails: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();

  const users = useAppSelector(selectUsers);

  //@comment: u don't need to search this user. U have userId. Create a request this this id to /users/id
  const user =
    users?.find((user: IUser) => user.id === Number(userId)) || INITIAL_USER;

  //+@comment: same as for HomePage
  const { isLoading, isError } = useAppSelector(selectUsersState);

  const {
    name,
    username,
    email,
    phone,
    website,
    company: { name: companyName },
    address: { street, suite, city, zipcode },
  } = user as IUser;

  //@comment: for cases like that, where u create some blocks u can use some helper and put all logic in that helper.
  // also do it after all IF's and add memoization
  const userDetails: IUserDetails[] = [
    {
      title: "Personal Info",
      details: [
        { label: "Name:", value: name },
        { label: "Username:", value: username },
      ],
    },
    {
      title: "Contact Info",
      details: [
        { label: "Email:", value: email },
        { label: "Phone:", value: phone },
      ],
    },
    {
      title: "Work place",
      details: [
        { label: "Company:", value: companyName },
        { label: "Website:", value: website },
      ],
    },
    {
      title: "Address",
      details: [
        {
          label: "Address:",
          value: `${street}, ${suite}, ${city}, ${zipcode}`,
        },
      ],
    },
  ];

  if (isLoading) return <Loader />;
  if (isError) return <ErrorMessage>Error loading user details.</ErrorMessage>;
  if (!user.id) return <ErrorMessage>User doesn't exist</ErrorMessage>;

  return (
    <div className="mx-auto max-w-4xl rounded-lg pb-5">
      <h2 className="mb-5 text-center text-2xl font-bold md:mb-8 md:text-3xl lg:text-4xl">
        User Details
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 xl:gap-8">
        {userDetails.map(({ title, details }) => (
          <UserDetailsItem key={title} title={title} details={details} />
        ))}
      </div>
    </div>
  );
};

export default UserDetails;
