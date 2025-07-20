import MovieList from "./MovieList";
import { useAppSelector } from "../app/hooks";

const MovieCategories = (): React.JSX.Element => {
  const {
    nowPlayingMovies,
    popularMovies,
    loadingNowPlayingMovies,
    errorNowPlayingMovies,
    loadingPopularMovies,
    errorPopularMovies,
    topRatedMovies,
    loadingTopRatedMovies,
    errorTopRatedMovies,
    upcomingMovies,
    loadingUpcomingMovies,
    errorUpcomingMovies,
  } = useAppSelector((state) => ({
    loadingNowPlayingMovies: state.movies.loading,
    errorNowPlayingMovies: state.movies.error,
    nowPlayingMovies: state.movies.nowPlayingMovies,
    loadingPopularMovies: state.movies.loadingPopularMovies,
    errorPopularMovies: state.movies.errorPopularMovies,
    popularMovies: state.movies.popularMovies,
    topRatedMovies: state.movies.topRatedMovies,
    loadingTopRatedMovies: state.movies.loadingTopRatedMovies,
    errorTopRatedMovies: state.movies.errorTopRatedMovies,
    upcomingMovies: state.movies.upcomingMovies,
    loadingUpcomingMovies: state.movies.loadingUpcomingMovies,
    errorUpcomingMovies: state.movies.errorUpcomingMovies,
  }));
  return (
    <div className="space-y-4 mt-4">
      <MovieList
        error={errorNowPlayingMovies}
        loading={loadingNowPlayingMovies}
        movies={nowPlayingMovies}
        title={"Now Playing"}
      />
      <MovieList
        error={errorPopularMovies}
        loading={loadingPopularMovies}
        movies={popularMovies}
        title={"Popular Movies"}
      />
      <MovieList
        error={errorTopRatedMovies}
        loading={loadingTopRatedMovies}
        movies={topRatedMovies}
        title={"Top Rated Movies"}
      />
      <MovieList
        error={errorUpcomingMovies}
        loading={loadingUpcomingMovies}
        movies={upcomingMovies}
        title={"Upcoming Movies"}
      />
    </div>
  );
};

export default MovieCategories;
