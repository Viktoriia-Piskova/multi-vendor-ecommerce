import React, { useState } from "react";

const SelectWithSearch = ({
  handleInput,
  category,
  categories,
  allCategories,
  setCategory,
  setAllCategories,
}) => {
  const [showCategories, setShowCategories] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleCategorySearch = (e) => {
    const searchTerm = e.target.value;
    setSearchValue(searchTerm);
    if (searchTerm) {
      let searchResults = allCategories.filter(
        (c) => c.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
      );
      setAllCategories(searchResults);
    } else {
      setAllCategories(categories);
    }
  };

  return (
    <div className="flex flex-col w-full gap-1 relative mb-3">
      <label className="mb-2" htmlFor="category">
        Category
      </label>
      <input
        readOnly
        type="text"
        name="category"
        id="category"
        placeholder="-select category-"
        onChange={(e) => handleInput(e)}
        onClick={() => setShowCategories(true)}
        value={category.name || ""}
        className="px-4 py-2 focus:border-indigo-500 transition-all outline-none rounded-md border border-slate-700 text-est-light-grey bg-est-violet-bright"
      />
      <div
        className={`absolute top-[101%] bg-slate-800 w-full transition-all ${
          showCategories ? "scale-100" : "scale-0"
        }`}
      >
        <div className="w-full px-4 py-2 fixed">
          <input
            value={searchValue || ""}
            type="text"
            placeholder="Search"
            className="px-3 py-1  outline-none bg-transparent bg-slate-500 w-full rounded-md text-est-light-grey overflow-hidden focus:border-indigo-500"
            onChange={(e) => handleCategorySearch(e)}
          />
        </div>
        <div className="pt-14"></div>
        <div className="flex justify-start items-start flex-col h-[200px] overflow-scroll">
          {allCategories.map((cat, index) => (
            <span
              className={`px-4 py-2 hover:bg-indigo-500 w-full cursor-pointer ${
                category === cat.name && "bg-indigo-500"
              }`}
              key={index}
              onClick={() => {
                setShowCategories(false);
                setCategory(cat);
                setSearchValue("");
              }}
            >
              {cat.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectWithSearch;
