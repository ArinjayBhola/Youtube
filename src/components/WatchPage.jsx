import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../redux/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import MovieDetail from "./MovieDetail";
import LiveChat from "./LiveChat";
import VideoContainer from "./VideoContainer";
import { GOOGLE_API_KEY } from "../utils/constants";

const WatchPage = () => {
  const [channelData, setChannelData] = useState([]);
  const selector = useSelector((store) => store.videoData.channelId);
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();
  const fetchData = async () => {
    const data = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${selector}&key=${GOOGLE_API_KEY}`,
    );
    const json = await data.json();
    setChannelData(json.items[0].snippet);
  };
  useEffect(() => {
    selector && fetchData();
    dispatch(closeMenu());
  }, [selector]);

  return (
    <div className="flex flex-col w-full">
      <div className="px-5 flex flex-col md:flex-row w-full">
        <div className="md:w-8/12">
          <iframe
            width="100%"
            height="500"
            src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="rounded-xl"></iframe>
        </div>
        <div className="hidden md:inline-block md:w-4/12">
          <LiveChat />
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="md:w-9/12">
          <MovieDetail info={channelData} />
          <CommentsContainer />
        </div>
        <div className="md:w-3/12">
          <VideoContainer />
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
