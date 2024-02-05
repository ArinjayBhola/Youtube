import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/redux/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const showSidebar = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-3 m-2 shadow-lg -mt-1">
      <div className="flex col-span-1 items-center">
        <FontAwesomeIcon
          icon={faBars}
          className="h-6 mr-5 cursor-pointer"
          onClick={showSidebar}
        />
        <a href="/">
          <div className="flex">
            <FontAwesomeIcon
              icon={faYoutube}
              className="h-8 text-red-600"
            />
            <p className="text-2xl">YouTube</p>
          </div>
        </a>
      </div>
      <div className="flex col-span-10 justify-center items-center ">
        <input
          type="text"
          placeholder="Search..."
          className="w-1/2 border border-gray-400 rounded-l-full h-10 px-4 text-lg focus:outline-none"
        />
        <button className="border border-gray-400 px-2 rounded-r-full h-10 bg-gray-100 hover:bg-gray-200">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="w-10"
          />
        </button>
      </div>
      <div className="flex col-span-1 items-center">
        <FontAwesomeIcon
          icon={faUser}
          className="h-6"
        />
      </div>
    </div>
  );
};

export default Header;
