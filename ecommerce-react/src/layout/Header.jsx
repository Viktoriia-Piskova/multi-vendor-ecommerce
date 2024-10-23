import React from "react";
import { FaList } from "react-icons/fa";

const Header = ({ showSidebar, setShowSidebar }) => {
  return (
    <div className="fixed top-0 left-0 w-full pb-5 px-2 lg:px-7 z-10">
      <div className="ml-0 lg:ml-[260px] rounded h-[65px] flex justify-between items-center bg-est-violet-medium px-5 transition-all">
        <div
          onClick={() => setShowSidebar(!showSidebar)}
          className="w-[35px] lg:hidden flex h-[35px] bg-indigo-500 shadow-lg hover:shadow-indigo-500/50 justify-center items-center cursor-pointer transition-all"
        >
          <span>
            <FaList />
          </span>
        </div>
        <div className="hidden md:block">
          <input
            className="px-3 py-2 outline-none border bg-transparent border-slate-500 rounded-md text-[#423d72] focus:border-indigo-800 overflow-hidden transition-all placeholder-current"
            type="text"
            name="search"
            placeholder="Search"
          />
        </div>
        <div className="flex justify-center items-center gap-8 relative ">
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center gap-3">
              <div className="flex items-center justify-center flex-col text-end">
                <h2 className="text-md font-bold">User Name</h2>
                <p className="text-[14px] w-full font-normal">User role</p>
              </div>
              <img src="http://localhost:3000/images/admin.jpg" className="w-[45px] h-[45px] rounded-full overflow-hidden" alt="User Name" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
