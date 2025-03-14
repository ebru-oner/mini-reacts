import { fireEvent, render, screen } from "@testing-library/react";
import { it, describe, vi, expect } from "vitest";
import SearchBar from "./SearchBar";

describe("SearchBar component", () => {
  it("It renders the input fieldwith the correct placeholder", () => {
    render(<SearchBar searchText="" setSearchText={vi.fn()} />);

    const inputElement = screen.getByPlaceholderText<HTMLInputElement>("Filter items by title...");
    expect(inputElement).toBeInTheDocument();
  });

  it("It calls setSearchText when user enter in the search input field", () => {
    const mockSearchText = vi.fn();
    render(<SearchBar searchText="" setSearchText={mockSearchText} />);

    const inputElement = screen.getByPlaceholderText<HTMLInputElement>("Filter items by title...");
    fireEvent.change(inputElement, { target: { value: "test" } });

    expect(mockSearchText).toHaveBeenCalledTimes(1);
  });
});
