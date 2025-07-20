import { useEffect } from "react";

import { useAppDispatch } from "../../app/hooks";
import { fetchPopularMovies } from "../../services/movies.service";
import {
  setPopularMovies,
  setPopularMoviesError,
  setPopularMoviesLoading,
} from "../../store/slices/moviesSlice";

const useFetchPopularMovies = (): void => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const getPopularMovies = async () => {
      try {
        dispatch(setPopularMoviesLoading(true));
        const data = await fetchPopularMovies();
        if (data.results.length) {
          dispatch(setPopularMovies(data.results));
          dispatch(setPopularMoviesLoading(false));
        }
      } catch (error) {
        if (error instanceof Error) {
          dispatch(setPopularMoviesError(error.message));
        } else {
          dispatch(setPopularMoviesError("An unexpected error occurred."));
        }
        dispatch(setPopularMoviesLoading(false));
      }
    };
    getPopularMovies();
  }, [dispatch]);
};

export default useFetchPopularMovies;
