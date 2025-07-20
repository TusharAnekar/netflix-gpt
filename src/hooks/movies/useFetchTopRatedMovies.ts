import { useEffect } from "react";

import { useAppDispatch } from "../../app/hooks";
import { fetchTopRatedMovies } from "../../services/movies.service";
import {
  setTopRatedMovies,
  setTopRatedMoviesError,
  setTopRatedMoviesLoading,
} from "../../store/slices/moviesSlice";

const useFetchTopRatedMovies = (): void => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getTopRatedMovies = async () => {
      try {
        dispatch(setTopRatedMoviesLoading(true));
        const data = await fetchTopRatedMovies();
        if (data.results.length) {
          dispatch(setTopRatedMovies(data.results));
          dispatch(setTopRatedMoviesLoading(false));
        }
      } catch (error) {
        if (error instanceof Error) {
          dispatch(setTopRatedMoviesError(error.message));
        } else {
          dispatch(setTopRatedMoviesError("An unexpected error occurred."));
        }
        dispatch(setTopRatedMoviesLoading(false));
      }
    };
    getTopRatedMovies();
  }, [dispatch]);
};

export default useFetchTopRatedMovies;
