import React from "react";

const SearchBar = () => {
  return (
    <div className="inputbox">
      <input required="required" type="text" />
      <span>Enter a Youtube Link</span>
      <i></i>
    </div>
  );
};

export default SearchBar;
