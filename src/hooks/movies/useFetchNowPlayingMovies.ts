import { useEffect } from "react";

import { useAppDispatch } from "../../app/hooks";
import { fetchNowPlayingMovies } from "../../services/movies.service";
import {
  setMovies,
  setMoviesError,
  setMoviesLoading,
} from "../../store/slices/moviesSlice";

const useFetchNowPlayingMovies = (): void => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getNowPlayingMovies = async () => {
      try {
        dispatch(setMoviesLoading(true));
        const data = await fetchNowPlayingMovies();
        if (data.results.length) {
          dispatch(setMovies(data.results));
          dispatch(setMoviesLoading(false));
        }
      } catch (error) {
        if (error instanceof Error) {
          dispatch(setMoviesError(error.message));
        } else {
          dispatch(setMoviesError("An unknown error occurred"));
        }
        dispatch(setMoviesLoading(false));
      }
    };
    getNowPlayingMovies();
  }, [dispatch]);
};

export default useFetchNowPlayingMovies;
