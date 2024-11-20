import React from "react";

const SearchWithDropdown = ({ setPerPage, setSearchValue, searchValue }) => {
  return (
    <div className="flex justify-between items-center">
      <select
        onChange={(e) => setPerPage(parseInt(e.target.value))}
        name=""
        id=""
        className="px-4 py-2 hover:cursor-pointer focus:border-indigo-500 transition-all outline-none bg-est-violet-bright border border-slate-700 rounded-md text-est-light-grey"
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
      </select>
      <input
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
        type="text"
        placeholder="Search"
        className="px-4 py-2 focus:border-indigo-500 transition-all outline-none rounded-md border border-slate-700 text-est-light-grey bg-est-violet-bright"
      />
    </div>
  );
};

export default SearchWithDropdown;
