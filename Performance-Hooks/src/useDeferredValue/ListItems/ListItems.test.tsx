import { describe, expect, it } from "vitest";
import { Item } from "../ItemModel";
import { render, screen } from "@testing-library/react";
import ListItems from "./ListItems";

const mockData: Item[] = [{ id: 1, title: "Test title", body: "Test body" }];

describe("ItemList component", () => {
  it("It renders item list", () => {
    render(<ListItems items={mockData} />);

    expect(screen.getByText("Test title")).toBeInTheDocument();
    expect(screen.getByText("Test body")).toBeInTheDocument();
  });

  it("It renders empty div when there is no data", () => {
    render(<ListItems items={[]} />);

    expect(screen.queryByText("Test title")).not.toBeInTheDocument();
    expect(screen.queryByText("Test body")).not.toBeInTheDocument();
  });
});
