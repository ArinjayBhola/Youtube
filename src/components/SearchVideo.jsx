import PropTypes from "prop-types";
import { GOOGLE_API_KEY } from "../utils/constants";
import { useEffect } from "react";

const SearchVideo = ({ info }) => {
  const { snippet } = info;
  const { channelTitle, title, thumbnails, description } = snippet;
  const videoId = info.id.videoId;

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${GOOGLE_API_KEY}`,
      );
      const json = await data.json();
      if (!json.items) {
        return null;
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col md:flex-row p-2 m-2 h-auto md:h-60 rounded-lg shadow-lg">
      <img
        src={thumbnails.medium.url}
        alt="Thumbnail"
        className="md:w-1/3 w-full object-cover md:rounded-none rounded-t-lg md:rounded-l-lg"
      />
      <ul className="ml-3 flex-grow">
        <li className="font-bold text-xl md:text-2xl py-2">{title}</li>
        <li className="text-lg md:text-xl font-semibold">{channelTitle}</li>
        <li className="text-sm md:text-base font-medium mt-3 overflow-hidden text-ellipsis">{description}</li>
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
    id: PropTypes.shape({
      videoId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default SearchVideo;
