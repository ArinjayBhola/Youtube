import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const selector = useSelector((store) => store.app.isMenuOpen);
  return (
    <>
      {selector && (
        <div className="p-5 shadow-2xl mt-0 w-48">
          <h1 className="font-bold pt-5">
            <Link to="/">Home</Link>
          </h1>
          <h1 className="font-bold pt-5">Subscription</h1>
          <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
          </ul>
          <h1 className="font-bold pt-5">Watch Later</h1>
          <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Sidebar;
