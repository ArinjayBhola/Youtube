import { faDownload, faShare, faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useYoutubeData from "../hooks/useYoutubeData";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addChannelId, removeChannelId } from "../redux/channelDataSlice";
import useChannelData from "../hooks/useChannelData";
import { useEffect, useState } from "react";
import { countSingleDigits } from "../utils/hepler";
import { GOOGLE_API_KEY } from "../utils/constants";
import PropTypes from "prop-types";

const MovieDetail = ({ info }) => {
  const [videos, setVideos] = useState([]);
  const [searchChannelDetail, setSearchChannelDetail] = useState([]);
  const selector = useSelector((store) => store.app.userQuery);
  const [searchParams] = useSearchParams();
  const videoData = useYoutubeData();
  const dispatch = useDispatch();
  const channelDetail = useChannelData();
  const { thumbnails } = info;

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

  useEffect(() => {
    const suggestVideo = videoData?.filter((video) => video.id === searchParams.get("v"));
    const searchVideo = videos?.filter((video) => video.id.videoId === searchParams.get("v"));
    const findVideo = suggestVideo.length > 0 ? suggestVideo : searchVideo;
    if (findVideo.length > 0) {
      const { snippet } = findVideo[0];
      const { channelId } = snippet;
      dispatch(addChannelId(channelId));
    }
    return () => {
      dispatch(removeChannelId());
    };
  }, [videoData, searchParams, videos, dispatch]);

  const suggestVideo = videoData?.filter((video) => video.id === searchParams.get("v"));
  const searchVideo = videos?.filter((video) => video.id.videoId === searchParams.get("v"));
  const searchVideoId = searchVideo.length > 0 ? searchVideo[0].id.videoId : "";
  const findVideo = suggestVideo.length > 0 ? suggestVideo : searchVideo;

  const fetchSearchVideoStats = async () => {
    const data = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${searchVideoId}&key=${GOOGLE_API_KEY}`,
    );
    const json = await data.json();
    setSearchChannelDetail(json.items[0].statistics);
  };

  useEffect(() => {
    searchVideoId && fetchSearchVideoStats();
  }, [searchVideoId]);

  if (findVideo.length === 0) {
    return null;
  }

  const { snippet } = findVideo[0];
  const { title, channelTitle } = snippet;

  return (
    <div className="p-5 md:-mt-11">
      <p className="font-bold text-xl">{title}</p>
      <div className="flex flex-col md:flex-row justify-between items-center mt-3">
        <div className="flex items-center mb-3 md:mb-0">
          {thumbnails && thumbnails.default && thumbnails.default.url && (
            <img
              src={thumbnails.default.url}
              alt="Thumbnail"
              className="h-10 w-10 rounded-full"
            />
          )}
          <div className="ml-3">
            <p className="font-semibold">{channelTitle}</p>
            <p className="text-sm">{countSingleDigits(channelDetail?.subscriberCount)} subscribers</p>
          </div>
          <button className="ml-5 bg-black text-white p-3 rounded-2xl hover:opacity-80">Subscribe</button>
        </div>
        <div className="flex items-center mt-3 md:mt-0">
          <div className="flex bg-gray-300 items-center rounded-xl">
            <FontAwesomeIcon
              icon={faThumbsUp}
              className="ml-3"
            />
            {suggestVideo.length > 0 ? (
              <p className="border-r-2 ml-3 pr-2">{countSingleDigits(findVideo[0].statistics.likeCount)}</p>
            ) : (
              <p className="border-r-2 ml-3 pr-2">{countSingleDigits(searchChannelDetail.likeCount)}</p>
            )}
            <FontAwesomeIcon
              icon={faThumbsDown}
              className="mx-3"
            />
          </div>
          <div className="ml-3 flex bg-gray-300 items-center rounded-xl p-2">
            <FontAwesomeIcon
              icon={faShare}
              className="mx-1"
            />
            <p className="hidden md:inline-block p-2 mx-1">Share</p>
          </div>
          <div className="ml-3 flex bg-gray-300 items-center rounded-xl p-2">
            <FontAwesomeIcon
              icon={faDownload}
              className="mx-1"
            />
            <p className="hidden md:inline-block p-2 mx-1">Download</p>
          </div>
        </div>
      </div>
    </div>
  );
};

MovieDetail.propTypes = {
  info: PropTypes.shape({
    thumbnails: PropTypes.shape({
      default: PropTypes.shape({
        url: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetail;
