import PropType from "prop-types";
import { countSingleDigits } from "../utils/hepler";
import useChannelProfile from "../hooks/useChannelProfile";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, channelId } = snippet;
  const channelProfile = useChannelProfile(channelId);
  return (
    <div className="p-2 m-2 w-[310px] h-72 rounded-lg shadow-lg overflow-x-hidden">
      <img
        src={thumbnails.medium.url}
        alt="Thumbnail"
        className="rounded-lg"
      />
      <div className="flex">
        {channelProfile && channelProfile.thumbnails && channelProfile.thumbnails.default ? (
          <img
            src={channelProfile.thumbnails.default.url}
            className="mt-2 mr-1 rounded-full w-9 h-9"
          />
        ) : null}
        <ul>
          <li className="font-bold py-2 overflow-hidden whitespace-nowrap text-ellipsis">{title}</li>
          <li className="text-left font-semibold">{channelTitle}</li>
          <li className="text-left font-semibold">{countSingleDigits(statistics.viewCount)} Views</li>
        </ul>
      </div>
    </div>
  );
};

VideoCard.propTypes = {
  info: PropType.object.isRequired,
};

export default VideoCard;
