import ErrorMessage from "./ErrorMessage";
import MovieList from "./MovieList";
import { useAppSelector } from "../app/hooks";

import type { SearchMovieByTitleResponse } from "../types/movie.types";

const SearchedMovies = (): React.JSX.Element => {
  const { loadingSearchedMovies, errorSearchedMovies, searchedMovies } =
    useAppSelector((state) => ({
      loadingSearchedMovies: state.movies.loadingSearchedMovies,
      errorSearchedMovies: state.movies.errorSearchedMovies,
      searchedMovies: state.movies.searchedMovies,
    }));

  if (loadingSearchedMovies) return <div>Loading</div>;

  if (errorSearchedMovies) return <ErrorMessage error={errorSearchedMovies} />;

  return (
    <div>
      {searchedMovies.map((movies: SearchMovieByTitleResponse) => (
        <MovieList
          key={"hi"}
          error={""}
          loading={false}
          movies={movies.results}
          title={movies.results[0].title}
        />
      ))}
    </div>
  );
};

export default SearchedMovies;
