import { useEffect, useState } from "react";
import { Item } from "./ItemModel";
import ListItems from "./ListItems";
import SearchBar from "./SearchBar";
import { createMockData } from "./createMockData";

const ItemsContainer = () => {
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
        setItemCount(0);
      } else {
        setItemCount(Number(value));
      }
    }
  };

  return (
    <>
      <input value={itemCount} onChange={(e) => onItemCountChange(e)} placeholder="Record count to create" />
      <SearchBar searchText={searchText} setSearchText={(e: React.ChangeEvent<HTMLInputElement>) => setSearchText(e.target.value)} />
      <ListItems items={filteredItems} />
    </>
  );
};

export default ItemsContainer;
