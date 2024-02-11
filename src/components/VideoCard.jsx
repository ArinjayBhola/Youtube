import PropType from "prop-types";
import { countSingleDigits } from "../utils/hepler";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 w-[295px] h-72 rounded-lg shadow-lg overflow-x-hidden">
      <img
        src={thumbnails.medium.url}
        alt="Thumbnail"
        className="rounded-lg"
      />
      <ul>
        <li className="font-bold py-2 overflow-hidden whitespace-nowrap text-ellipsis">
          {title}
        </li>
        <li className="text-left font-semibold">{channelTitle}</li>
        <li className="text-left font-semibold">
          {countSingleDigits(statistics.viewCount)} Views
        </li>
      </ul>
    </div>
  );
};

VideoCard.propTypes = {
  info: PropType.object.isRequired,
};

export default VideoCard;
