import { Search } from "lucide-react";
import React from "react";

function SearchBar() {
  return (
    <div className="items-center gap-2 ring ring-gray-200 rounded-md px-2 py-1 shadow-md hidden sm:flex">
      <Search className="w-4 h-4 text-gray-500" />
      <input
        id="search"
        placeholder="Search..."
        className="text-sm outline-0"
      ></input>
    </div>
  );
}

export default SearchBar;
