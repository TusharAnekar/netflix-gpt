import ErrorMessage from "./ErrorMessage";
import MovieCard from "./MovieCard";

import type { Movie } from "../types/movie.types";

interface MovieListProps {
  title: string;
  movies: Movie[];
  loading: boolean;
  error: string | null;
}

const MovieList = ({
  title,
  movies,
  loading,
  error,
}: MovieListProps): React.JSX.Element => {
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <ErrorMessage error={error} />;
  }
  if (!movies || movies.length === 0) {
    return <div>No movies available.</div>;
  }
  return (
    <section className="space-y-2">
      <h2 className=" text-3xl font-semibold ">{title}</h2>
      <div className="flex gap-2 overflow-x-auto">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
