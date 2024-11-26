import { createSelector } from "@reduxjs/toolkit";

import { IUser } from "@types";
import { RootState } from "@store";

export const selectUserDetailsState = createSelector(
  [
    (state: RootState) => state.userDetails.user,
    (state: RootState) => state.userDetails.isLoading,
    (state: RootState) => state.userDetails.isError,
  ],
  (user: IUser, isLoading: boolean, isError: boolean) => ({
    user,
    isLoading,
    isError,
  }),
);
