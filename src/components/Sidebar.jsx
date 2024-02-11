import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMoneyBill,
  faVideo,
  faClock,
  faUser,
  faClockRotateLeft,
  faCirclePlay,
  faFire,
  faBagShopping,
  faMusic,
  faGamepad,
  faNewspaper,
  faTrophy,
  faLightbulb,
  faPodcast,
  faShirt,
  faFilm,
  faSignal,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const selector = useSelector((store) => store.app.isMenuOpen);
  return (
    <div className="absolute top-0 left-0 bg-white opacity-90">
      {selector && (
        <div className="mt-4 px-4 shadow-2xl w-60">
          <div className="border-b-4 pb-3">
            <h1 className="font-bold my-2">
              <FontAwesomeIcon
                icon={faHouse}
                className="pr-2"
              />
              <Link to="/">Home</Link>
            </h1>
            <h1 className="font-bold pt-2 my-2">
              <FontAwesomeIcon
                icon={faVideo}
                className="pr-2"
              />
              Shorts
            </h1>
            <h1 className="font-bold pt-2 my-2">
              <FontAwesomeIcon
                icon={faMoneyBill}
                className="pr-2"
              />
              Subscription
            </h1>
          </div>
          <h1 className="font-bold pt-3 mb-2 my-2">You</h1>
          <ul className="">
            <li className="my-3">
              <FontAwesomeIcon
                icon={faUser}
                className="pr-2"
              />
              Your channel
            </li>
            <li className="my-3">
              <FontAwesomeIcon
                icon={faClockRotateLeft}
                className="pr-2"
              />
              History
            </li>
            <li className="my-3">
              <FontAwesomeIcon
                icon={faCirclePlay}
                className="pr-2"
              />
              Your videos
            </li>
            <li className="my-3">
              <FontAwesomeIcon
                icon={faClock}
                className="pr-2"
              />
              Watch Later
            </li>
          </ul>
          <h1 className="font-bold pt-5 mb-2">Explore</h1>
          <ul>
            <li className="my-3">
              <FontAwesomeIcon
                icon={faFire}
                className="pr-2"
              />
              Trending
            </li>
            <li className="my-3">
              <FontAwesomeIcon
                icon={faBagShopping}
                className="pr-2"
              />
              Shopping
            </li>
            <li className="my-3">
              <FontAwesomeIcon
                icon={faMusic}
                className="pr-2"
              />
              Music
            </li>
            <li className="my-3">
              <FontAwesomeIcon
                icon={faFilm}
                className="pr-2"
              />
              Movies
            </li>
            <li className="my-3">
              <FontAwesomeIcon
                icon={faSignal}
                className="pr-2"
              />
              Live
            </li>
            <li className="my-3">
              <FontAwesomeIcon
                icon={faGamepad}
                className="pr-2"
              />
              Gaming
            </li>
            <li className="my-3">
              <FontAwesomeIcon
                icon={faNewspaper}
                className="pr-2"
              />
              News
            </li>
            <li className="my-3">
              <FontAwesomeIcon
                icon={faTrophy}
                className="pr-2"
              />
              Sports
            </li>
            <li className="my-3">
              <FontAwesomeIcon
                icon={faLightbulb}
                className="pr-2"
              />
              Learning
            </li>
            <li className="my-3">
              <FontAwesomeIcon
                icon={faShirt}
                className="pr-2"
              />
              Fashion & Beauty
            </li>
            <li className="my-3">
              <FontAwesomeIcon
                icon={faPodcast}
                className="pr-2"
              />
              Podcasts
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
