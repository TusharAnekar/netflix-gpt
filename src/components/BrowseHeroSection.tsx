import ErrorMessage from "./ErrorMessage";
import { useAppSelector } from "../app/hooks";
import useFetchMovieVideoById from "../hooks/movies/useFetchMovieVideoById";

import type { Movie } from "../types/movie.types";

interface BrowseHeroSectionProps {
  nowPlayingMovie: Movie;
}
const BrowseHeroSection = ({
  nowPlayingMovie,
}: BrowseHeroSectionProps): React.JSX.Element => {
  useFetchMovieVideoById(nowPlayingMovie.id);

  const { movieVideoId, loadingMovieVideo, errorMovieVideo } = useAppSelector(
    (state) => ({
      movieVideoId: state.movies.movieVideoId,
      loadingMovieVideo: state.movies.loadingMovieVideo,
      errorMovieVideo: state.movies.errorMovieVideo,
    }),
  );

  if (loadingMovieVideo) {
    return <div>Loading video...</div>;
  }
  if (errorMovieVideo) {
    return <ErrorMessage error={errorMovieVideo} />;
  }
  if (!movieVideoId) {
    return <div>No video available for this movie.</div>;
  }
  return (
    <section className="relative">
      <div className="absolute text-white bg-gradient-to-r from-black p-4 w-full aspect-video">
        <div className="max-w-2xl flex flex-col justify-center h-full space-y-4">
          <h1 className="text-5xl font-bold">{nowPlayingMovie.title}</h1>
          <p>{nowPlayingMovie.overview}</p>
          <div className="flex items-center space-x-4">
            <button
              className="bg-white text-black px-4 py-2 rounded"
              type="button"
            >
              Play
            </button>
            <button
              className="bg-gray-700 text-white px-4 py-2 rounded"
              type="button"
            >
              More Info
            </button>
          </div>
        </div>
      </div>
      <iframe
        className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${movieVideoId}?autoplay=1&mute=1&controls=0`}
        title="YouTube video player"
      />
    </section>
  );
};

export default BrowseHeroSection;
