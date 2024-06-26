import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { addUserQuery, toggleMenu } from "../redux/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../redux/searchSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [showSuggestion, setShowSuggestion] = useState(false);
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Check if query is present in cache
      if (searchCache[searchQuery]) {
        setShowSuggestion(searchCache[searchQuery]);
      } else {
        getSeatchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSeatchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestion(json[1]);

    // Update cache
    dispatch(cacheResults({ [searchQuery]: json[1] }));
  };

  const showSidebar = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-3 m-2 shadow-lg -mt-1 fixed top-0 left-0 w-full bg-white z-50">
      <div className="flex col-span-1 items-center">
        <FontAwesomeIcon
          icon={faBars}
          className="hidden md:inline-block md:h-6 md:mr-5 cursor-pointer"
          onClick={showSidebar}
        />
        <Link to="/">
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faYoutube}
              className="md:h-8 h-6 mr-2 md:0 text-red-600"
            />
            <p className="md:text-2xl text-lg">YouTube</p>
          </div>
        </Link>
      </div>
      <div className="md:col-span-10 justify-center relative">
        <div className="flex justify-center items-center -ml-10">
          <input
            type="text"
            placeholder="Search..."
            className="w-1/2 border border-gray-400 rounded-l-full md:h-10 h-8 px-4 text-lg focus:outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <Link to={"result"}>
            <button
              className="border border-gray-400 px-2 rounded-r-full md:h-10 h-8 bg-gray-100 hover:bg-gray-200"
              disabled={!searchQuery}
              onClick={() => {
                if (searchQuery) {
                  dispatch(addUserQuery(searchQuery));
                }
              }}>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="md:w-10"
              />
            </button>
          </Link>
        </div>
        {showSuggestion && (
          <div className="absolute z-10 py-2 px-5 bg-white w-2/3 md:w-1/2 border border-gray-200 left-3 md:left-[13.8rem] rounded-lg shadow-lg">
            <ul>
              {suggestion.map((s) => (
                <li
                  key={s}
                  className="pb-1 pt-3 shadow-sm hover:bg-gray-100">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="hidden md:w-10"
                  />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
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
