import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/redux/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/redux/searchSlice";
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
    <div className="grid grid-flow-col p-3 m-2 shadow-lg -mt-1">
      <div className="flex col-span-1 items-center">
        <FontAwesomeIcon
          icon={faBars}
          className="h-6 mr-5 cursor-pointer"
          onClick={showSidebar}
        />
        <Link to="/">
          <div className="flex">
            <FontAwesomeIcon
              icon={faYoutube}
              className="h-8 text-red-600"
            />
            <p className="text-2xl">YouTube</p>
          </div>
        </Link>
      </div>
      <div className="col-span-10 justify-center relative">
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Search..."
            className="w-1/2 border border-gray-400 rounded-l-full h-10 px-4 text-lg focus:outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <button className="border border-gray-400 px-2 rounded-r-full h-10 bg-gray-100 hover:bg-gray-200">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="w-10"
            />
          </button>
        </div>
        {showSuggestion && (
          <div className="absolute z-10 py-2 px-5 bg-white w-1/2 border border-gray-200 left-[13.8rem] rounded-lg shadow-lg">
            <ul>
              {suggestion.map((s) => (
                <li
                  key={s}
                  className="pb-1 pt-3 shadow-sm hover:bg-gray-100">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="w-10"
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
