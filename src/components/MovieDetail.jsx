import {
  faDownload,
  faShare,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useYoutubeData from "../hooks/useYoutubeData";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addChannelId, removeChannelId } from "../redux/channelDataSlice";
import useChannelData from "../hooks/useChannelData";
import { useEffect } from "react";
import { countSingleDigits } from "../utils/hepler";

const MovieDetail = () => {
  const [searchParams] = useSearchParams();
  const videoData = useYoutubeData();
  const dispatch = useDispatch();
  const channelDetail = useChannelData();

  useEffect(() => {
    const findVideo = videoData.filter(
      (video) => video.id === searchParams.get("v"),
    );
    if (findVideo.length > 0) {
      const { snippet } = findVideo[0];
      const { channelId } = snippet;
      dispatch(addChannelId(channelId));
    }
    return () => {
      dispatch(removeChannelId());
    };
  }, [videoData, searchParams, dispatch]);

  const findVideo = videoData.filter(
    (video) => video.id === searchParams.get("v"),
  );

  if (findVideo.length === 0) {
    return null;
  }

  const { statistics, snippet } = findVideo[0];
  const { title, thumbnails, channelTitle } = snippet;

  return (
    <div>
      <p className="px-5 m-3 -mt-11 font-bold text-xl">{title}</p>
      <div className="mx-3 -my-5 flex justify-between">
        <div className="flex m-5 items-center">
          <img
            src={thumbnails.high.url}
            alt="Thumbnail"
            className="h-10 w-10 rounded-full"
          />
          <div className="ml-3">
            <p className="font-semibold">{channelTitle}</p>
            <p className="text-sm">
              {countSingleDigits(channelDetail?.subscriberCount)} subscribers
            </p>
          </div>
          <button className="ml-5 bg-black text-white p-3 rounded-2xl hover:opacity-80">
            Subscribe
          </button>
        </div>
        <div className="flex items-center">
          <div className="m-5 p-2 flex bg-gray-300 items-center rounded-xl">
            <FontAwesomeIcon
              icon={faThumbsUp}
              className="ml-3"
            />
            <p className="border-r-2 ml-3 pr-2">
              {countSingleDigits(statistics.likeCount)}
            </p>
            <FontAwesomeIcon
              icon={faThumbsDown}
              className="mx-3"
            />
          </div>
          <div className="m-5 p-2 flex bg-gray-300 items-center rounded-xl">
            <FontAwesomeIcon
              icon={faShare}
              className="mx-1"
            />
            <p className="mx-1">Share</p>
          </div>
          <div className="m-5 p-2 flex bg-gray-300 items-center rounded-xl">
            <FontAwesomeIcon
              icon={faDownload}
              className="mx-1"
            />
            <p className="mx-1">Download</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
