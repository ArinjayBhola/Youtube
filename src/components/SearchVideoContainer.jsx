import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { GOOGLE_API_KEY } from "../utils/constants";
import { Link } from "react-router-dom";
import SearchVideo from "./SearchVideo";

const SearchVideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const selector = useSelector((store) => store.app.userQuery);

  const fetchData = async () => {
    const data = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${selector}&type=video&key=${GOOGLE_API_KEY}`,
    );
    const json = await data.json();
    setVideos(json.items);
  };
  useEffect(() => {
    fetchData();
  }, [selector]);

  return (
    <div>
      {videos?.map((video) => (
        <Link
          to={"/watch?v=" + video.id.videoId}
          key={video.id.videoId}>
          <SearchVideo info={video} />
        </Link>
      ))}
    </div>
  );
};

export default SearchVideoContainer;
