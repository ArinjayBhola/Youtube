import { useState, useEffect } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";

const useYoutubeData = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideos(json.items);
  };
  return videos;
};

export default useYoutubeData;
