import { useEffect } from "react";

import { useAppDispatch } from "../../app/hooks";
import { fetchMovieVideoById } from "../../services/movies.service";
import {
  setMovieVideoError,
  setMovieVideoId,
} from "../../store/slices/moviesSlice";

const useFetchMovieVideoById = (id: number): void => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const getMovieVideoById = async () => {
      try {
        const data = await fetchMovieVideoById(id);
        const movieVideo = data.results.find(
          (videoItem) =>
            videoItem.type === "Trailer" && videoItem.site === "YouTube",
        );
        if (movieVideo) {
          dispatch(setMovieVideoId(movieVideo.key));
        }
      } catch (error) {
        if (error instanceof Error) {
          dispatch(setMovieVideoError(error.message));
        } else {
          dispatch(setMovieVideoError("An unknown error occurred"));
        }
      }
    };
    getMovieVideoById();
  }, [id, dispatch]);
};

export default useFetchMovieVideoById;
