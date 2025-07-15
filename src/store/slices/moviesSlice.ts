import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nowPlayingMovies: [],
  loading: false,
  error: null,
  movieVideoId: null,
  loadingMovieVideo: false,
  errorMovieVideo: null,
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
    setMovieVideoId: (state, action) => ({
      ...state,
      movieVideoId: action.payload,
    }),
    setMovieVideoLoading: (state, action) => ({
      ...state,
      loadingMovieVideo: action.payload,
    }),
    setMovieVideoError: (state, action) => ({
      ...state,
      errorMovieVideo: action.payload,
    }),
  },
});

export default moviesSlice.reducer;
export const {
  setMovies,
  setMoviesError,
  setMoviesLoading,
  setMovieVideoId,
  setMovieVideoError,
  setMovieVideoLoading,
} = moviesSlice.actions;
