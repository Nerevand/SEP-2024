import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUser } from "@types";
import { INITIAL_USER } from "@constants";

import { fetchUserByIdAPI } from "./userAPI";

interface IUserDetailsState {
  user: IUser;
  isLoading: boolean;
  isError: boolean;
}

const initialState: IUserDetailsState = {
  user: INITIAL_USER,
  isLoading: true,
  isError: false,
};

export const fetchUserById = createAsyncThunk<IUser, number>(
  "userDetails/fetchUserById",
  async (userId: number) => {
    return await fetchUserByIdAPI(Number(userId));
  },
);

const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserById.pending, (state) => {
        state.isError = false;
      })
      .addCase(
        fetchUserById.fulfilled,
        (state, action: PayloadAction<IUser>) => {
          state.user = action.payload;
          state.isLoading = false;
        },
      )
      .addCase(fetchUserById.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default userDetailsSlice.reducer;
