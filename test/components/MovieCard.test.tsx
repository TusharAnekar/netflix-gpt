import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import MovieCard from "../../src/components/MovieCard";

describe("movieCard", () => {
  const mockMovie = {
    id: 1,
    title: "Test Movie",
    poster_path: "/test-poster.jpg",
    overview: "Test overview",
    release_date: "2023-01-01",
    vote_average: 8.5,
    adult: false,
    backdrop_path: "/test-backdrop.jpg",
    genre_ids: [28, 12],
    original_language: "en",
    original_title: "Test Movie",
    popularity: 100,
    video: false,
    vote_count: 1000,
  };
  it("should render movie card when poster_path exists", () => {
    expect.assertions(1);
    render(<MovieCard movie={mockMovie} />);

    const image = screen.getByAltText("Test Movie");
    expect(image).toBeInTheDocument();
  });

  it("should not render anything when poster_path is null", () => {
    expect.assertions(1);
    const movieWithoutPoster = { ...mockMovie, poster_path: null };
    const { container } = render(<MovieCard movie={movieWithoutPoster} />);
    expect(container).toBeEmptyDOMElement();
  });
});
