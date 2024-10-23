import React from "react";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Pagination = ({
  currentPageNumber,
  setPageNumber,
  totalItems,
  perPage,
  itemToShow,
}) => {
  const totalPages = Math.ceil(totalItems / perPage);
  let startPage = currentPageNumber;
  const dif = totalPages - currentPageNumber;

  if (dif <= itemToShow) {
    startPage = totalPages - itemToShow;
  }
  let endPage = startPage < 0 ? itemToShow : itemToShow + startPage;
  if (startPage <= 0) {
    startPage = 1;
  }

  const createButtons = () => {
    const btns = [];
    for (let i = startPage; i < endPage; i++) {
      btns.push(
        <li
          onClick={() => setPageNumber(i)}
          className={`${
            currentPageNumber === i
              ? "bg-indigo-300 shadow-lg shadow-indigo-300/50 text-white"
              : "bg-slate-600 text-est-light-grey hover:bg-indigo-400 shadow-lg hover:shadow-indigo-500/50 hover:text-white"
          } w-[33px] h-[33px] rounded-full flex justify-center items-center cursor-pointer transition-all`}
        >
          {i}
        </li>
      );
    }

    return btns;
  };

  return (
    <ul className="flex gap-3">
      {currentPageNumber > 1 && (
        <li
          className="w-[33px] h-[33px] rounded-full flex justify-center items-center bg-slate-300 text-indigo-950 cursor-pointer"
          onClick={() => setPageNumber(currentPageNumber - 1)}
        >
          <MdKeyboardDoubleArrowLeft />
        </li>
      )}
      {createButtons()}
      {currentPageNumber < totalPages - 1 && (
        <li
          className="w-[33px] h-[33px] rounded-full flex justify-center items-center bg-slate-300 text-indigo-950 cursor-pointer"
          onClick={() => setPageNumber(currentPageNumber + 1)}
        >
          <MdKeyboardDoubleArrowRight />
        </li>
      )}
    </ul>
  );
};

export default Pagination;
