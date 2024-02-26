import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addVideo } from "../redux/appSlice";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, [dispatch, videos]);

  const fetchData = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideos(json.items);
    dispatch(addVideo(videos));
  };

  return (
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
