import { useEffect, useRef, useState } from "react";
import SearchBar from "./components/SearchBar";
import ReactPlayer from "react-player";
import logo from "./assets/song-society_logo.png";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "./firebase";
import Queue from "./components/Queue";

function App() {
  const [playlist, setPlaylist] = useState([]);
  const [playing, setPlaying] = useState("");
  const playerRef = useRef(null);

  useEffect(() => {
    if (playlist.length > 0) {
      setPlaying(playlist[0].id);
    }
  }, [playlist]);

  useEffect(() => {
    const q = query(collection(db, "links"), orderBy("timestamp", "asc"));
    onSnapshot(q, (snapshot) => {
      setPlaylist(
        snapshot.docs.map((elem) => ({ id: elem.id, link: elem.data().link }))
      );
    });
  }, []);

  const handleVideoEnded = async () => {
    await deleteDoc(doc(db, "links", playing));
  };

  return (
    <div className="bg-black w-full min-h-screen">
      <div className=" max-w-7xl mx-auto grid grid-cols-5 p-4">
        <div className="col-span-3 pr-4">
          <div className="flex flex-col w-[80%] mx-auto">
            <img
              src={logo}
              alt=""
              className="object-fill h-full w-full max-h-[320px]"
            />
          </div>
          <h1 className="text-5xl text-[#FE1124] text-center uppercase font-orbitron pb-16">
            Song Society
          </h1>
          {playlist.length == 0 ? (
            <h1 className="text-white text-center text-3xl p-20">
              There are no songs in the playlist! 😞
            </h1>
          ) : (
            <>
              <div className="w-[80%] mx-auto pt-12">
                <button className="skip__button" onClick={handleVideoEnded}>
                  SKIP
                </button>
              </div>
              <div className="w-full h-[400px]">
                <ReactPlayer
                  ref={playerRef}
                  playing={true}
                  controls={true}
                  onEnded={handleVideoEnded}
                  url={playlist[0].link}
                  width="100%"
                  height="100%"
                />
              </div>
            </>
          )}
        </div>
        <div className="col-span-2 border-2 border-slate-700 rounded-xl h-[97vh] overflow-scroll relative">
          <div className="sticky top-0 bg-black pt-12 px-2">
            <SearchBar setPlaylist={setPlaylist} />
          </div>
          <div className="p-2">
            <Queue playlist={playlist} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
