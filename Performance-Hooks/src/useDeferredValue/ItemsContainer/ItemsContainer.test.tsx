import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

vi.mock("../createMockData", () => ({
  createMockData: vi.fn((count) =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      title: `Title ${i + 1}`,
      body: `Body ${i}`,
    }))
  ),
}));

import ItemsContainer from "./ItemsContainer";
import { createMockData } from "../createMockData";

describe("ItemsContainer component", () => {
  it("Renders count input, search bar, list items", () => {
    render(<ItemsContainer />);

    expect(screen.getByPlaceholderText("Record count to create")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Filter items by title...")).toBeInTheDocument();
    expect(screen.queryByText("Title 1")).not.toBeInTheDocument();
  });

  it("Updates item count and generates mock items", async () => {
    render(<ItemsContainer />);
    const inputElement_1 = screen.getByPlaceholderText<HTMLInputElement>("Record count to create");
    const inputElement_2 = screen.getByPlaceholderText<HTMLInputElement>("Filter items by title...");
    fireEvent.change(inputElement_1, { target: { value: "3" } });
    fireEvent.change(inputElement_2, { target: { value: "3" } });

    await waitFor(() => {
      expect(createMockData).toHaveBeenCalledWith(3);
    });

    expect(screen.queryByText("Title 1")).not.toBeInTheDocument();
    expect(screen.queryByText("Title 2")).not.toBeInTheDocument();
    expect(screen.getByText("Title 3")).toBeInTheDocument();
  });
});
