import { startTransition, useEffect, useState } from "react";
import { Item } from "../ItemModel";
import ListItems from "../ListItems/ListItems";
import SearchBar from "../SearchBar/SearchBar";
import { createMockData } from "../createMockData";

const ItemsContainerPerformant = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [itemCount, setItemCount] = useState<number>(0);

  useEffect(() => {
    const data = createMockData(itemCount);
    setItems(data);
  }, [itemCount]);

  const filteredItems = items.filter((item) => item.title.toLowerCase().includes(searchText.toLowerCase()));

  const onItemCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.target.value;
    if (value) {
      if (Number.isNaN(Number(value))) {
        startTransition(() => {
          setItemCount(0);
        });
      } else {
        startTransition(() => {
          setItemCount(Number(value));
        });
      }
    }
  };

  const onSearchTextChange = (text: string) => {
    startTransition(() => {
      setSearchText(text);
    });
  };

  return (
    <>
      <input value={itemCount} onChange={(e) => onItemCountChange(e)} placeholder="Record count to create" />
      <SearchBar searchText={searchText} setSearchText={(e: React.ChangeEvent<HTMLInputElement>) => onSearchTextChange(e.target.value)} />
      <ListItems items={filteredItems} />
    </>
  );
};

export default ItemsContainerPerformant;
