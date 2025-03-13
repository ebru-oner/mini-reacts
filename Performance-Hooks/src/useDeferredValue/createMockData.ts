import { Item } from "./ItemModel";

export function createMockData(amount: number): Item[] {
  return Array.from({ length: amount }, (_, i) => ({
    id: i,
    title: `Title of item ${i + 1}`,
    body: `Body of item ${i + 1}`,
  }));
}
