import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";

const Body = () => {
  const isSidebarVisible = useSelector((store) => store.app.isMenuOpen);

  return (
    <div className="flex h-screen">
      <div
        className={`hidden md:inline-block fixed left-0 top-15 h-full ${
          isSidebarVisible ? "w-52" : "w-0"
        } overflow-y-auto bg-white mt-16 z-10 transition-all duration-300 ease-in-out no-scrollbar`}>
        <Sidebar />
      </div>
      <div className="flex-grow overflow-y-auto mt-16">
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
