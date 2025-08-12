import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";

import ErrorMessage from "../../src/components/ErrorMessage";

const mockNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe("error Message", () => {
  const error = "Test error message";
  it("should render error texts", () => {
    expect.assertions(3);
    render(
      <MemoryRouter>
        <ErrorMessage error={error} />
      </MemoryRouter>,
    );
    expect(screen.getByText("Something went wrong.")).toBeInTheDocument();
    expect(screen.getByText(`Error: ${error}`)).toBeInTheDocument();
    expect(screen.getByText("Try again after some time")).toBeInTheDocument();
  });

  it("navigate on retry", async () => {
    expect.assertions(1);

    render(
      <MemoryRouter>
        <ErrorMessage error={error} />
      </MemoryRouter>,
    );

    await userEvent.click(screen.getByRole("button", { name: /retry/i }));
    expect(mockNavigate).toHaveBeenCalledWith(0);
  });

  it("has link to go home", async () => {
    expect.assertions(2);
    render(
      <MemoryRouter>
        <ErrorMessage error={error} />
      </MemoryRouter>,
    );
    const link = screen.getByRole("link", { name: /go to home/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/");
  });
});
