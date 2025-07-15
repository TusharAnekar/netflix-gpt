import { useAppSelector } from "../app/hooks";
import BrowseHeroSection from "../components/BrowseHeroSection";
import ErrorMessage from "../components/ErrorMessage";
import useFetchNowPlayingMovies from "../hooks/movies/useFetchNowPlayingMovies";

const Browse = (): React.JSX.Element => {
  const { loading, error, nowPlayingMovies } = useAppSelector((state) => ({
    loading: state.movies.loading,
    error: state.movies.error,
    nowPlayingMovies: state.movies.nowPlayingMovies,
  }));
  useFetchNowPlayingMovies();

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
    </div>
  );
};

export default Browse;
