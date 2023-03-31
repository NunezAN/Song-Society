import { useState } from "react";
import SearchBar from "./components/SearchBar";

function App() {
  const [playlist, setPlaylist] = useState([]);

  return (
    <div className="bg-black min-w-full min-h-screen">
      <div className="flex flex-col w-[80%] mx-auto pb-12">
        <img src="src/assets/song-society_logo.png" alt="" />
        <h1 className="text-5xl text-[#FE1124] text-center uppercase font-orbitron">
          Song Society
        </h1>
      </div>
      <SearchBar />
    </div>
  );
}

export default App;
