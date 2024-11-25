import { createSelector } from "@reduxjs/toolkit";

import { IUser } from "@types";
import { RootState } from "@store";

export const selectUsers = (state: RootState): IUser[] => state.users.users;

export const selectCurrentPage = (state: RootState): number =>
  state.users.currentPage;

export const selectSearchUser = (state: RootState): string =>
  state.users.searchUser;

export const selectFilteredUsers = createSelector(
  [
    (state: RootState) => state.users.users,
    (state: RootState) => state.users.searchUser,
  ],
  (users, searchUser): IUser[] =>
    users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchUser.toLowerCase()) ||
        user.username.toLowerCase().includes(searchUser.toLowerCase()),
    ),
);

export const selectPaginatedUsers = createSelector(
  [
    selectFilteredUsers,
    (state: RootState) => state.users.currentPage,
    (state: RootState) => state.users.itemsPerPage,
  ],
  (filteredUsers, currentPage, itemsPerPage): IUser[] => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return filteredUsers.slice(startIndex, endIndex);
  },
);

export const selectTotalPages = createSelector(
  [selectFilteredUsers, (state: RootState) => state.users.itemsPerPage],
  (filteredUsers, itemsPerPage): number =>
    Math.ceil(filteredUsers.length / itemsPerPage),
);

export const selectUsersLoading = (state: RootState): boolean =>
  state.users.isLoading;

export const selectUsersIsError = (state: RootState): boolean =>
  state.users.isError;
