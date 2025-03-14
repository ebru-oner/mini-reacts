interface SearchBarProps {
  searchText: string;
  setSearchText: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const SearchBar: React.FC<SearchBarProps> = ({ searchText, setSearchText }) => {
  return (
    <div>
      <input value={searchText} placeholder="Filter items by title..." onChange={setSearchText}></input>
    </div>
  );
};

export default SearchBar;
