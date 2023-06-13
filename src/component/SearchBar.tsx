import React from "react";

interface SearchBarProps {
  search: string;
  setSearch: (search: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search issues..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="border border-black w-full bg-white rounded-xl p-2 mb-4"
    />
  );
};

export default SearchBar;
