import PropType from "prop-types";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 w-60 h-96 rounded-lg shadow-lg overflow-x-hidden">
      <img
        src={thumbnails.medium.url}
        alt="Thumbnail"
        className="rounded-lg"
      />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} Views</li>
      </ul>
    </div>
  );
};

VideoCard.propTypes = {
  info: PropType.string.isRequired,
};

export default VideoCard;
