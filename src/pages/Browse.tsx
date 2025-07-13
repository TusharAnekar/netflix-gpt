import { useAppSelector } from "../app/hooks";
import ErrorMessage from "../components/ErrorMessage";
import useFetchNowPlayingMovies from "../hooks/movies/useFetchNowPlayingMovies";

const Browse = (): React.JSX.Element => {
  const { loading, error } = useAppSelector((state) => ({
    loading: state.movies.loading,
    error: state.movies.error,
  }));
  useFetchNowPlayingMovies();

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <ErrorMessage error={error} />;
  }
  return <div>Browse</div>;
};

export default Browse;
