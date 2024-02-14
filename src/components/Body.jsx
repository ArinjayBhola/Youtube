import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";

const Body = () => {
  const isSidebarVisible = useSelector((store) => store.app.isMenuOpen);

  return (
    <div className="flex h-screen">
      <div
        className={`fixed left-0 top-15 h-full ${
          isSidebarVisible ? "w-60" : "w-0"
        } overflow-y-auto bg-gray-200 z-10 transition-all duration-300 ease-in-out`}>
        <Sidebar />
      </div>
      <div className="flex-grow overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
