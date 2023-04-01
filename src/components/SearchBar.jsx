import React, { useRef, useState } from "react";

const SearchBar = ({ setPlaylist }) => {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setPlaylist((cur) => [...cur, input]);
    setInput("");
  };
  return (
    <form className="inputbox" onSubmit={(e) => handleSubmit(e)}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        required="required"
        type="text"
      />
      <span>Enter a Youtube Link</span>
      <i></i>
    </form>
  );
};

export default SearchBar;
