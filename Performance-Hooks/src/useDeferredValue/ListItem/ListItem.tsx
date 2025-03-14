import { Item } from "../ItemModel";

interface ListItemProps {
  item: Item;
}

const ListItem: React.FC<ListItemProps> = ({ item }) => {
  return (
    <div>
      <h2>{item.title}</h2>
      <p>{item.body}</p>
    </div>
  );
};

export default ListItem;
