import { useEffect, useState } from "react";
import { GOOGLE_API_KEY } from "../utils/constants";
import { useSelector } from "react-redux";

const useChannelData = () => {
  const [channelDetail, setChannelDetail] = useState([]);
  const selector = useSelector((store) => store.videoData.channelId);
  useEffect(() => {
    fetchData();
  }, [selector]);
  const fetchData = async () => {
    const data = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${selector}&key=${GOOGLE_API_KEY}`,
    );
    const json = await data.json();
    if (!json.items) {
      return null;
    }
    setChannelDetail(json.items[0].statistics);
  };
  return channelDetail;
};
export default useChannelData;
