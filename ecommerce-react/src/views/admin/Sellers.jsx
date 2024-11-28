import React, { useState } from "react";
import SearchWithDropdown from "../components/SearchWithDropdown";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import Pagination from "../components/Pagination";

const Sellers = () => {
  const [searchValue, setSearchValue] = useState("");
  const [perPage, setPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [showDetails, setShowDetails] = useState(false);

  const dummyOrdersData = [1, 2, 3, 4, 5];
  return (
    <div className="est-container">
      <h1 className="text-xl font-bold mb-3">Sellers</h1>
      <div className="est-container-violet">
        <SearchWithDropdown
          setPerPage={setPerPage}
          setSearchValue={setSearchValue}
          searchValue={searchValue}
        />
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
