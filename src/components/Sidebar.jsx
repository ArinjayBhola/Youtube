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
    <>
      {selector && (
        <div className="mt-4 px-4 shadow-2xl w-52">
          <div className="border-b-4 pb-3">
            <h1 className="font-bold">
              <FontAwesomeIcon
                icon={faHouse}
                className="pr-2"
              />
              <Link to="/">Home</Link>
            </h1>
            <h1 className="font-bold pt-2">
              <FontAwesomeIcon
                icon={faVideo}
                className="pr-2"
              />
              Shorts
            </h1>
            <h1 className="font-bold pt-2">
              <FontAwesomeIcon
                icon={faMoneyBill}
                className="pr-2"
              />
              Subscription
            </h1>
          </div>
          <h1 className="font-bold pt-3 mb-2">You</h1>
          <ul className="space-y-2">
            <li>
              <FontAwesomeIcon
                icon={faUser}
                className="pr-2"
              />
              Your channel
            </li>
            <li>
              <FontAwesomeIcon
                icon={faClockRotateLeft}
                className="pr-2"
              />
              History
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCirclePlay}
                className="pr-2"
              />
              Your videos
            </li>
            <li>
              <FontAwesomeIcon
                icon={faClock}
                className="pr-2"
              />
              Watch Later
            </li>
          </ul>
          <h1 className="font-bold pt-5 mb-2">Explore</h1>
          <ul className="space-y-2">
            <li>
              <FontAwesomeIcon
                icon={faFire}
                className="pr-2"
              />
              Trending
            </li>
            <li>
              <FontAwesomeIcon
                icon={faBagShopping}
                className="pr-2"
              />
              Shopping
            </li>
            <li>
              <FontAwesomeIcon
                icon={faMusic}
                className="pr-2"
              />
              Music
            </li>
            <li>
              <FontAwesomeIcon
                icon={faFilm}
                className="pr-2"
              />
              Movies
            </li>
            <li>
              <FontAwesomeIcon
                icon={faSignal}
                className="pr-2"
              />
              Live
            </li>
            <li>
              <FontAwesomeIcon
                icon={faGamepad}
                className="pr-2"
              />
              Gaming
            </li>
            <li>
              <FontAwesomeIcon
                icon={faNewspaper}
                className="pr-2"
              />
              News
            </li>
            <li>
              <FontAwesomeIcon
                icon={faTrophy}
                className="pr-2"
              />
              Sports
            </li>
            <li>
              <FontAwesomeIcon
                icon={faLightbulb}
                className="pr-2"
              />
              Learning
            </li>
            <li>
              <FontAwesomeIcon
                icon={faShirt}
                className="pr-2"
              />
              Fashion & Beauty
            </li>
            <li>
              <FontAwesomeIcon
                icon={faPodcast}
                className="pr-2"
              />
              Podcasts
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Sidebar;
