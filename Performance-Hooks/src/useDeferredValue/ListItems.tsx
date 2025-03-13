import { Item } from "./ItemModel";
import ListItem from "./ListItem";

interface ListItemsProps {
  items: Item[];
}
const ListItems: React.FC<ListItemsProps> = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ListItems;
