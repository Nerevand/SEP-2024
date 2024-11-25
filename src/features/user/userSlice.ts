import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { IUser } from "@types";

// import { mockUsersData } from "./mockUsersData";
import { fetchUsersAPI } from "./userAPI";

interface IUserState {
  users: IUser[];
  currentPage: number;
  itemsPerPage: number;
  totalPages: number;
  searchUser: string;
  isLoading: boolean;
  isError: boolean;
}

const initialState: IUserState = {
  users: [],
  currentPage: 1,
  itemsPerPage: 10,
  totalPages: 0,
  searchUser: "",
  isLoading: false,
  isError: false,
};

export const fetchUsers = createAsyncThunk<IUser[]>(
  "users/fetchUsers",
  async () => {
    return await fetchUsersAPI();
  },
);

// export const fetchUsers = createAsyncThunk<IUser[]>("users/fetchUsers", () => {
//   return mockUsersData;
// });

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setSearchUser: (state, action: PayloadAction<string>) => {
      state.searchUser = action.payload;
      state.currentPage = 1;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(
        fetchUsers.fulfilled,
        (state, action: PayloadAction<IUser[]>) => {
          state.users = action.payload;
          state.isLoading = false;
        },
      )
      .addCase(fetchUsers.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { setSearchUser, setCurrentPage } = userSlice.actions;

export default userSlice.reducer;
