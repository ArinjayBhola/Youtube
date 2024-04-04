import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addVideo } from "../redux/appSlice";
import Shimmer from "./Shimmer";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [loadingMore, setLoadingMore] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => {
      window.removeEventListener("scroll", handleInfiniteScroll);
    };
  });

  const handleInfiniteScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
      if (!loadingMore) {
        fetchData();
      }
    }
  };

  const fetchData = async () => {
    setLoadingMore(true); // Set loading state
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideos((prevVideos) => [...prevVideos, ...json.items]); // Append new data to existing videos
    dispatch(addVideo(videos));
    setLoadingMore(false); // Reset loading state
  };

  return videos.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex flex-wrap justify-center">
      {videos.map((video) => (
        <Link
          to={"/watch?v=" + video.id}
          key={video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
