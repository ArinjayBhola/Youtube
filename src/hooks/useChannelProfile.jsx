import { useEffect, useState } from "react";
import { GOOGLE_API_KEY } from "../utils/constants";

const useChannelProfile = (id) => {
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${id}&key=${GOOGLE_API_KEY}`,
    );
    const json = await data.json();
    setProfile(json.items[0].snippet);
  };
  return profile;
};

export default useChannelProfile;
