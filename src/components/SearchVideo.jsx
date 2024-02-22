import PropTypes from "prop-types";
import { GOOGLE_API_KEY } from "../utils/constants";
import { useEffect } from "react";
const SearchVideo = ({ info }) => {
  const { snippet } = info;
  const { channelTitle, title, thumbnails, description } = snippet;
  const videoId = info.id.videoId;
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${GOOGLE_API_KEY}`,
    );
    const json = await data.json();
    if (!json.items) {
      return null;
    }
  };
  return (
    <div className="flex p-2 m-2 h-60 rounded-lg shadow-lg">
      <img
        src={thumbnails.medium.url}
        alt="Thumbnail"
        className="rounded-lg"
      />
      <ul className="ml-3">
        <li className="font-bold text-xl py-2">{title}</li>
        <li className="text-left text-lg font-semibold">{channelTitle}</li>
        <li className="text-left font-semibold mt-3">{description}</li>
      </ul>
    </div>
  );
};

SearchVideo.propTypes = {
  info: PropTypes.shape({
    snippet: PropTypes.shape({
      channelTitle: PropTypes.string.isRequired,
      channelId: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      thumbnails: PropTypes.shape({
        medium: PropTypes.shape({
          url: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default SearchVideo;
