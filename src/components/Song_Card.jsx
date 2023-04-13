import React, { useEffect, useState } from "react";

const SongCard = ({ url }) => {
  const API_KEY = "AIzaSyCFuxGalzrO8qVtlpoISKlcE6rzNK0ya8s";
  const [thumbnail, setThumbnail] = useState("");
  const [title, setTitle] = useState("");
  useEffect(() => {
    const id = url.split("v=")[1];
    fetch(
      `https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${API_KEY}&part=snippet`
    )
      .then((response) => response.json())
      .then((data) => {
        const thumbnailUrl = data.items[0].snippet.thumbnails.high.url;
        const name = data.items[0].snippet.title;
        setThumbnail(thumbnailUrl);
        setTitle(name);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);
  return (
    <div className="p-4 border-b-2">
      <span className="text-white">{title}</span>
      <img src={thumbnail} alt="" />
    </div>
  );
};

export default SongCard;
