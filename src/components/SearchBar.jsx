import React, { useRef } from "react";

const SearchBar = ({ setPlaylist }) => {
  const inputRef = useRef("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(inputRef.current.value);
    setPlaylist((cur) => [...cur, inputRef.current.value]);
    // e.target.reset();
  };
  return (
    <form className="inputbox" onSubmit={(e) => handleSubmit(e)}>
      <input ref={inputRef} required="required" type="text" />
      <span>Enter a Youtube Link</span>
      <i></i>
    </form>
  );
};

export default SearchBar;
