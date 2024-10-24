import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import Pagination from "../Pagination";

const Sellers = () => {
  const [searchValue, setSearchValue] = useState("");
  const [perPage, setPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [showDetails, setShowDetails] = useState(false);

  const dummyOrdersData = [1, 2, 3, 4, 5];
  return (
    <div className="px-2 lg:px-7 pt-5">
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
                  Shop name
                </th>
                <th scope="col" className="py-3 pl-4">
                  Payment status
                </th>
                <th scope="col" className="py-3 pl-4">
                  email
                </th>
                <th scope="col" className="py-3 pl-4">
                  Division
                </th>
                <th scope="col" className="py-3 pl-4">
                  District
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
                    Great Product
                  </td>
                  <td className="py-3 px-4 font-medium whitespace-nowrap">
                    Super Shop
                  </td>
                  <td className="py-3 px-4 font-medium whitespace-nowrap">
                    Pending
                  </td>
                  <td className="py-3 px-4 font-medium whitespace-nowrap">
                    test@test.com
                  </td>
                  <td className="py-3 px-4 font-medium whitespace-nowrap">
                    Cherkasy
                  </td>
                  <td className="py-3 px-4 font-medium whitespace-nowrap">
                    Holosiivsky
                  </td>
                  <td className="py-3 px-4 font-medium whitespace-nowrap hover:">
                    <div className="flex justify-start items-center gap-4">
                      <Link className="transition-all p-[6px] bg-green-700 rounded hover:shadow-md hover:shadow-green-500/50">
                        <FaEye />
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
  );
};

export default Sellers;
