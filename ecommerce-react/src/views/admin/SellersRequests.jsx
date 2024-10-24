import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import Pagination from "../Pagination";

const SellersRequests = () => {
  const [searchValue, setSearchValue] = useState("");
  const [perPage, setPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [showDetails, setShowDetails] = useState(false);

  const dummySellersData = [1, 2, 3, 4, 5];

  return (
    <div className="px-2 lg:px-7 pt-5">
        <h1 className="text-xl font-bold mb-3">Sellers requests</h1>
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
                  Name
                </th>
                <th scope="col" className="py-3 pl-4">
                  email
                </th>
                <th scope="col" className="py-3 pl-4">
                  Payment Status
                </th>
                <th scope="col" className="py-3 pl-4">
                  Status
                </th>
                <th scope="col" className="py-3 pl-4">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {dummySellersData.map((data, index) => (
                <tr key={index} className="text-est-light-grey border-b border-slate-700">
                  <td className="py-3 px-4 font-medium whitespace-nowrap">
                    {data}
                  </td>
                  <td className="py-3 px-4 font-medium whitespace-nowrap">
                    Great Seller
                  </td>
                  <td className="py-3 px-4 font-medium whitespace-nowrap">
                  test@test.com
                  </td>
                  <td className="py-3 px-4 font-medium whitespace-nowrap">
                    Active
                  </td>
                  <td className="py-3 px-4 font-medium whitespace-nowrap">
                    Pending
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

export default SellersRequests;
