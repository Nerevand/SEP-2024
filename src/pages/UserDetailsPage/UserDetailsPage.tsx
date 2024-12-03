import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@hooks/useAppStore";
import { fetchUserById } from "@features/user/userDetailsSlice";
import { selectUserDetailsState } from "@features/user/userDetailsSelectors";
import Loader from "@components/common/Loader";
import ErrorMessage from "@components/common/ErrorMessage";

import DetailsContent from "./DetailsContent/DetailsContent";

const UserDetailsPage: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();

  const dispatch = useAppDispatch();

  const { user, isLoading, isError } = useAppSelector(selectUserDetailsState);

  useEffect(() => {
    if (userId) {
      dispatch(fetchUserById(userId));
    }
  }, [dispatch, userId]);

  if (isLoading) return <Loader />;
  if (isError) return <ErrorMessage>Error loading user details.</ErrorMessage>;

  return <DetailsContent user={user} />;
};

export default UserDetailsPage;
