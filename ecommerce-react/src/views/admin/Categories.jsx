import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaImage, FaTrash } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";

import Pagination from "../Pagination";

const Categories = () => {
  const [searchValue, setSearchValue] = useState("");
  const [perPage, setPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [showDetails, setShowDetails] = useState(false);

  const dummyOrdersData = [1, 2, 3, 4, 5];

  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="flex lg:hidden justify-between items-center mb-5 p-4 bg-est-violet-bright rounded-md">
        <h1 className="text-est-light-grey font-semibold text-lg">Category</h1>
        <button
          onClick={() => setShowDetails(true)}
          className="bg-red-500 shadow-lg hover:shadow-red-500/50 px-4 py-2 cursor-pointer text-white rounded-sm"
        >
          Add
        </button>
      </div>
      <div className="flex flex-wrap w-full">
        <div className="w-full lg:w-7/12">
          <div className="w-full p-4 bg-est-violet-bright rounded-md">
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
                type="text"
                placeholder="Search"
                className="px-4 py-2 focus:border-indigo-500 transition-all outline-none rounded-md border border-slate-700 text-est-light-grey bg-est-violet-bright"
              />
            </div>
            <div className="relative overflow-x-auto">
              <table className="w-full text-left">
                <thead className="text-sm text-est-light-grey uppercase border-b border-slate-700">
                  <tr>
                    <th scope="col" className="py-3 pl-4">
                      No
                    </th>
                    <th scope="col" className="py-3 pl-4">
                      Image
                    </th>
                    <th scope="col" className="py-3 pl-4">
                      Name
                    </th>
                    <th scope="col" className="py-3 pl-4">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {dummyOrdersData.map((data, index) => (
                    <tr key={index} className="text-est-light-grey">
                      <td className="py-3 px-4 font-medium whitespace-nowrap">
                        {data}
                      </td>
                      <td className="py-3 px-4 font-medium whitespace-nowrap">
                        <img
                          className="h-[45px] w-[45px]"
                          src={`http://localhost:3000/images/categories/${data}.jpg`}
                          alt=""
                        />
                      </td>
                      <td className="py-3 px-4 font-medium whitespace-nowrap">
                        T-shirts
                      </td>
                      <td className="py-3 px-4 font-medium whitespace-nowrap hover:">
                        <div className="flex justify-start items-center gap-4">
                          <Link className="transition-all p-[6px] bg-yellow-500 rounded hover:shadow-md hover:shadow-yellow-500/50">
                            <FaEdit />
                          </Link>
                          <Link className="transition-all p-[6px] bg-red-500 rounded hover:shadow-md hover:shadow-red-500/50">
                            <FaTrash />
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="w-full flex justify-end mt-4">
              <Pagination
                currentPageNumber={currentPage}
                setPageNumber={setCurrentPage}
                totalItems={50}
                perPage={perPage}
                itemToShow={3}
              />
            </div>
          </div>
        </div>
        <div
          className={`w-[320px] lg:w-5/12  lg:relative lg:right-0 fixed z-20 top-0 transition-all duration-500 ${
            showDetails ? "right-0" : "-right-[340px]"
          }`}
        >
          <div className="w-full pl-5">
            <div className="bg-est-violet-bright h-screen lg:h-auto px-3 py-2 lg:rounded-md text-est-light-grey">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-est-light-grey font-semibold text-xl w-full text-center">
                  Add category
                </h2>
                <div
                  className="block lg:hidden text-3xl"
                  onClick={() => setShowDetails(false)}
                >
                  <IoMdCloseCircle />
                </div>
              </div>
              <form>
                <div className="flex flex-col w-full gap-1 mb-3">
                  <label htmlFor="name" className="mb-2 text-est-light-grey">
                    Category name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="category_name"
                    placeholder="Category name"
                    className="px-4 py-2 focus:border-indigo-500 transition-all outline-none rounded-md border border-slate-700 text-slate-950 bg-white"
                  />
                </div>
                <div>
                  <label
                    htmlFor="image"
                    className="flex flex-col justify-center items-center h-[238px] cursor-pointer border border-dashed hover:border-red-500 w-full border-est-light-grey transition-all"
                  >
                    <span>
                      <FaImage />
                    </span>
                    <span>Select image</span>
                  </label>
                  <input
                    className="hidden"
                    type="file"
                    name="image"
                    id="image"
                  />
                </div>
                <div>
                  <button className="bg-red-500 w-full hover:shadow-red-500/40 hover:shadow-lg rounded-md px-7 py-2 my-2">
                    Add category
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
