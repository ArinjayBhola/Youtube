import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="grid grid-cols-1 w-11/12 items-center mx-auto text-center">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
