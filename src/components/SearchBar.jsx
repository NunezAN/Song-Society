import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";

const SearchBar = ({ setPlaylist }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ReactPlayer.canPlay(input)) {
      setPlaylist((cur) => [...cur, input]);
      console.log();
      setInput("");
    } else {
      alert("Not a valid link");
    }
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
