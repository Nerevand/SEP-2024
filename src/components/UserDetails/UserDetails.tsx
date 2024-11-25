import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@hooks/useAppStore";
import { formatUserDetails } from "@helpers/formatUserDetails";
import { fetchUserById } from "@features/user/userDetailsSlice";
import Loader from "@components/common/Loader";
import ErrorMessage from "@components/common/ErrorMessage";

import UserDetailsItem from "./UserDetailsItem";

const UserDetails: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();

  const dispatch = useAppDispatch();

  const { user, isLoading, isError } = useAppSelector(
    (state) => state.userDetails,
  );

  //+@comment: u don't need to search this user. U have userId. Create a request this this id to /users/id

  useEffect(() => {
    if (userId) {
      dispatch(fetchUserById(Number(userId)));
    }
  }, [dispatch, fetchUserById, userId]);

  //+@comment: same as for HomePage
  //+ const { isLoading, isError } = useAppSelector(selectUsersState);

  if (isLoading) return <Loader />;
  if (isError) return <ErrorMessage>Error loading user details.</ErrorMessage>;

  const userDetails = formatUserDetails(user);

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
