import { configureStore } from "@reduxjs/toolkit";

import userReducer from "@features/user/userSlice";
import userDetailsReducer from "@features/user/userDetailsSlice";

export const store = configureStore({
  reducer: { users: userReducer, userDetails: userDetailsReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
