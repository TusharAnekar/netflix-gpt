import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nowPlayingMovies: [],
  loading: false,
  error: null,
  movieVideoId: null,
  loadingMovieVideo: false,
  errorMovieVideo: null,
  popularMovies: [],
  loadingPopularMovies: false,
  errorPopularMovies: null,
  loadingTopRatedMovies: false,
  errorTopRatedMovies: null,
  topRatedMovies: [],
  loadingUpcomingMovies: false,
  errorUpcomingMovies: null,
  upcomingMovies: [],
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
    setPopularMovies: (state, action) => ({
      ...state,
      popularMovies: action.payload,
    }),
    setPopularMoviesLoading: (state, action) => ({
      ...state,
      loadingPopularMovies: action.payload,
    }),
    setPopularMoviesError: (state, action) => ({
      ...state,
      errorPopularMovies: action.payload,
    }),
    setTopRatedMovies: (state, action) => ({
      ...state,
      topRatedMovies: action.payload,
    }),
    setTopRatedMoviesLoading: (state, action) => ({
      ...state,
      loadingTopRatedMovies: action.payload,
    }),
    setTopRatedMoviesError: (state, action) => ({
      ...state,
      errorTopRatedMovies: action.payload,
    }),
    setUpcomingMovies: (state, action) => ({
      ...state,
      upcomingMovies: action.payload,
    }),
    setUpcomingMoviesLoading: (state, action) => ({
      ...state,
      loadingUpcomingMovies: action.payload,
    }),
    setUpcomingMoviesError: (state, action) => ({
      ...state,
      errorUpcomingMovies: action.payload,
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
  setPopularMovies,
  setPopularMoviesError,
  setPopularMoviesLoading,
  setTopRatedMovies,
  setTopRatedMoviesError,
  setTopRatedMoviesLoading,
  setUpcomingMovies,
  setUpcomingMoviesError,
  setUpcomingMoviesLoading,
} = moviesSlice.actions;
