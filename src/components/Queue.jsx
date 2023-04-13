import React from "react";
import SongCard from "./Song_Card";

const Queue = ({ playlist }) => {
  return (
    <div className="text-white">
      {playlist.map((song, idx) => (
        <SongCard key={idx} url={song.link} />
      ))}
    </div>
  );
};

export default Queue;
