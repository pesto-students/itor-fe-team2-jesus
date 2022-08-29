import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Search.css";

function Search() {
  return (
    <div className="icon">
      <SearchIcon className="search_icon" />
      <input type="text" placeholder="search by Name /Company/ Technology" />
    </div>
  );
}

export default Search;
