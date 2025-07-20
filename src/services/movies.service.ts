import type {
  FetchMovieVideoByIdResponse,
  NowPlayingMoviesResponse,
} from "../types/movie.types";

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_READ_ACCESS_TOKEN}`,
  },
};

export const fetchNowPlayingMovies =
  async (): Promise<NowPlayingMoviesResponse> => {
    const response = await fetch(
      `${import.meta.env.VITE_TMDB_BASE_URL}/movie/now_playing?language=en-US&page=1`,
      options,
    );
    const data: NowPlayingMoviesResponse = await response.json();
    return data;
  };

export const fetchMovieVideoById = async (
  movieId: number,
): Promise<FetchMovieVideoByIdResponse> => {
  const response = await fetch(
    `${import.meta.env.VITE_TMDB_BASE_URL}/movie/${movieId}/videos?language=en-US`,
    options,
  );
  const data: FetchMovieVideoByIdResponse = await response.json();
  return data;
};

export const fetchPopularMovies =
  async (): Promise<NowPlayingMoviesResponse> => {
    const response = await fetch(
      `${import.meta.env.VITE_TMDB_BASE_URL}/movie/popular?language=en-US&page=1`,
      options,
    );
    const data: NowPlayingMoviesResponse = await response.json();
    return data;
  };

export const fetchTopRatedMovies =
  async (): Promise<NowPlayingMoviesResponse> => {
    const response = await fetch(
      `${import.meta.env.VITE_TMDB_BASE_URL}/movie/top_rated?language=en-US&page=1`,
      options,
    );
    const data: NowPlayingMoviesResponse = await response.json();
    return data;
  };

export const fetchUpcomingMovies =
  async (): Promise<NowPlayingMoviesResponse> => {
    const response = await fetch(
      `${import.meta.env.VITE_TMDB_BASE_URL}/movie/upcoming?language=en-US&page=1`,
      options,
    );
    const data: NowPlayingMoviesResponse = await response.json();
    return data;
  };
