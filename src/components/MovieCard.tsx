import { TMDB_IMAGE_BASE_URL } from "../constants/brand";

import type { Movie } from "../types/movie.types";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps): React.JSX.Element => (
  <img
    alt={movie.title}
    className="w-40 h-60 object-cover rounded-lg"
    src={`${TMDB_IMAGE_BASE_URL}/w500${movie.poster_path}`}
  />
);

export default MovieCard;
