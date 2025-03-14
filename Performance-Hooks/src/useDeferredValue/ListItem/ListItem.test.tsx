import { describe, expect, it } from "vitest";
import { Item } from "../ItemModel";
import ListItem from "./ListItem";
import { render, screen } from "@testing-library/react";

const mockData: Item = {
  id: 1,
  title: "This is a test title",
  body: "This is a test body",
};

describe("ListItem component", () => {
  it("it renders the items title and body correctly", () => {
    render(<ListItem item={mockData} />);

    expect(screen.getByText("This is a test title")).toBeInTheDocument();
    expect(screen.getByText("This is a test body")).toBeInTheDocument();
  });
});
