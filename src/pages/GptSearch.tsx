import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useAppDispatch } from "../app/hooks";
import SearchedMovies from "../components/SearchedMovies";
import { NETFLIX_BACKGROUND_IMAGE_URL } from "../constants/brand";
import { searchMovieByTitle } from "../services/movies.service";
import { fetchMoviesFromOpenAi } from "../services/openAi.service";
import {
  setErrorSearchedMovies,
  setLoadingSearchedMovies,
  setSearchedMovies,
} from "../store/slices/moviesSlice";

const GptSearch = (): React.JSX.Element => {
  const dispatch = useAppDispatch();

  const searchMoviesSchema = z.object({
    query: z.string().min(1, { message: "Query is required" }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof searchMoviesSchema>>({
    resolver: zodResolver(searchMoviesSchema),
  });

  const onSubmit = async (data: z.infer<typeof searchMoviesSchema>) => {
    const { query } = data;
    dispatch(setLoadingSearchedMovies(true));
    try {
      const response = await fetchMoviesFromOpenAi(query);
      const movies = response?.split(",");

      if (movies?.length) {
        const searchMoviePromises = movies.map(async (title) =>
          searchMovieByTitle(title),
        );
        const tmdbMoviesByTitle = await Promise.all(searchMoviePromises);
        dispatch(setSearchedMovies(tmdbMoviesByTitle));
      }
    } catch (error) {
      if (error instanceof Error) {
        dispatch(setErrorSearchedMovies(error.message));
      } else {
        dispatch(
          setErrorSearchedMovies(
            "Something went wrong while searching your movies.",
          ),
        );
      }
    } finally {
      dispatch(setLoadingSearchedMovies(false));
    }
  };

  return (
    <div
      className="bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url(${NETFLIX_BACKGROUND_IMAGE_URL})` }}
    >
      <form
        noValidate
        className="flex flex-col items-center justify-center pt-20 gap-1"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex gap-4">
          <input
            className="w-96 p-2 rounded-md bg-white"
            placeholder="Search for a movie or show"
            type="text"
            {...register("query")}
          />

          <button
            className="bg-red-600 text-white py-2 px-4 rounded-md cursor-pointer"
            type="submit"
          >
            Search
          </button>
        </div>
        {errors.query ? (
          <p className="text-red-600 text-sm w-96 -ml-24">
            {errors.query.message}
          </p>
        ) : null}
      </form>

      <SearchedMovies />
    </div>
  );
};

export default GptSearch;
