import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nowPlayingMovies: [],
  loading: false,
  error: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies: (state, action) => ({
      ...state,
      nowPlayingMovies: action.payload,
    }),
    setMoviesLoading: (state, action) => ({
      ...state,
      loading: action.payload,
    }),
    setMoviesError: (state, action) => ({
      ...state,
      error: action.payload,
    }),
  },
});

export default moviesSlice.reducer;
export const { setMovies, setMoviesError, setMoviesLoading } =
  moviesSlice.actions;
