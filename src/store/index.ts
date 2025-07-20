import { configureStore } from "@reduxjs/toolkit";

import moviesReducer from "./slices/moviesSlice";
import userReducer from "./slices/userSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
  },
});

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;

export default appStore;
