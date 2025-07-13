import type { NowPlayingMoviesResponse } from "../types/movie.types";

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
      options
    );
    const data: NowPlayingMoviesResponse = await response.json();
    return data;
  };
