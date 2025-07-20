import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";

import type { UserState } from "../../types/user.types";

const initialState: UserState = {
  uid: null,
  email: "",
  displayName: "",
  isAuthenticated: false,
  isLoading: true,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{
        uid: string;
        email: string;
        displayName: string;
      }>,
    ) => ({
      ...state,
      uid: action.payload.uid,
      email: action.payload.email,
      displayName: action.payload.displayName,
      isAuthenticated: true,
      isLoading: false,
    }),
    clearUser: () => initialState,
    setLoading: (state, action: PayloadAction<boolean>) => ({
      ...state,
      isLoading: action.payload,
    }),
  },
});

export default userSlice.reducer;
export const { setUser, clearUser, setLoading } = userSlice.actions;
