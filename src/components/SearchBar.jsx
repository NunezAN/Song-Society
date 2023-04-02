import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

const SearchBar = ({ setPlaylist }) => {
  const [input, setInput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (ReactPlayer.canPlay(input)) {
      const timestamp = new Date();
      const post = {
        link: input,
        timestamp: timestamp,
      };
      await addDoc(collection(db, "links"), post);
      //   setPlaylist((cur) => [...cur, input]);
      //   console.log();
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
