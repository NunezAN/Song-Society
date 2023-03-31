import { useState } from "react";
import SearchBar from "./components/SearchBar";

function App() {
  const [playlist, setPlaylist] = useState([]);

  return (
    <div className="bg-black min-w-full min-h-screen">
      <h1 className="text-5xl text-white">Song Society</h1>
      <SearchBar />
    </div>
  );
}

export default App;
