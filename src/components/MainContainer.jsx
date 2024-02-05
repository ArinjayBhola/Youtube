import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="grid grid-cols-1">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
