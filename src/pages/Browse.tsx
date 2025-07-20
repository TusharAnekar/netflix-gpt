import { useAppSelector } from "../app/hooks";
import BrowseHeroSection from "../components/BrowseHeroSection";
import ErrorMessage from "../components/ErrorMessage";
import MovieCategories from "../components/MovieCategories";
import useFetchNowPlayingMovies from "../hooks/movies/useFetchNowPlayingMovies";
import useFetchPopularMovies from "../hooks/movies/useFetchPopularMovies";
import useFetchTopRatedMovies from "../hooks/movies/useFetchTopRatedMovies";
import useFetchUpcomingMovies from "../hooks/movies/useFetchUpcomingMovies";

const Browse = (): React.JSX.Element => {
  const { loading, error, nowPlayingMovies } = useAppSelector((state) => ({
    loading: state.movies.loading,
    error: state.movies.error,
    nowPlayingMovies: state.movies.nowPlayingMovies,
  }));
  useFetchNowPlayingMovies();
  useFetchPopularMovies();
  useFetchTopRatedMovies();
  useFetchUpcomingMovies();

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <ErrorMessage error={error} />;
  }
  if (!nowPlayingMovies || nowPlayingMovies.length === 0) {
    return <div>No movies currently playing.</div>;
  }
  return (
    <div>
      <BrowseHeroSection nowPlayingMovie={nowPlayingMovies[1]} />
      <MovieCategories />
    </div>
  );
};

export default Browse;
