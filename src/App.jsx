import { useRef, useState } from "react";
import SearchBar from "./components/SearchBar";
import ReactPlayer from "react-player";

function App() {
  const [playlist, setPlaylist] = useState([]);
  const playerRef = useRef(null);

  const handleVideoEnded = () => {
    const removed = [...playlist];
    setPlaylist(removed.slice(1));
  };
  return (
    <div className="bg-black min-w-full min-h-screen">
      <div className="flex flex-col w-[80%] mx-auto pb-12">
        <img src="src/assets/song-society_logo.png" alt="" />
        <h1 className="text-5xl text-[#FE1124] text-center uppercase font-orbitron">
          Song Society
        </h1>
      </div>
      <SearchBar setPlaylist={setPlaylist} />
      {playlist.length == 0 ? (
        <h1 className="text-white text-center text-3xl p-20">
          There are no songs in the playlist! 😞
        </h1>
      ) : (
        <div className="p-16 w-full h-[600px]">
          <ReactPlayer
            ref={playerRef}
            playing={true}
            controls={true}
            onEnded={handleVideoEnded}
            url={playlist[0]}
            width="100%"
            height="100%"
          />
        </div>
      )}
    </div>
  );
}

export default App;
