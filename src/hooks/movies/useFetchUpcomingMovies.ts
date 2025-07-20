import { useEffect } from "react";

import { useAppDispatch } from "../../app/hooks";
import { fetchUpcomingMovies } from "../../services/movies.service";
import {
  setUpcomingMovies,
  setUpcomingMoviesError,
  setUpcomingMoviesLoading,
} from "../../store/slices/moviesSlice";

const useFetchUpcomingMovies = (): void => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getUpcomingMovies = async () => {
      try {
        dispatch(setUpcomingMoviesLoading(true));
        const data = await fetchUpcomingMovies();
        if (data.results.length) {
          dispatch(setUpcomingMovies(data.results));
          dispatch(setUpcomingMoviesLoading(false));
        }
      } catch (error) {
        if (error instanceof Error) {
          dispatch(setUpcomingMoviesError(error.message));
        } else {
          dispatch(setUpcomingMoviesError("An unexpected error occurred."));
        }
        dispatch(setUpcomingMoviesLoading(false));
      }
    };
    getUpcomingMovies();
  }, [dispatch]);
};

export default useFetchUpcomingMovies;
