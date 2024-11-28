import React from "react";
import { useState } from "react";
import SearchWithDropdown from "../components/SearchWithDropdown";
import { Link } from "react-router-dom";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import Pagination from "../components/Pagination";

const DiscoundProducts = () => {
  const dummyOrdersData = [1, 2, 3, 4, 5];

  const [perPage, setPerPage] = useState(5);
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="est-container">
      <h1 className="text-slate-900 font-semibold text-lg mb-5">
        Discount products
      </h1>
      <div className="est-container-violet">
        <SearchWithDropdown
          setPerPage={setPerPage}
          setSearchValue={setSearchValue}
          searchValue={searchValue}
        />

        <div className="relative overflow-x-auto">
          <table className="w-full text-left pt-7">
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
                  Category
                </th>
                <th scope="col" className="py-3 pl-4">
                  Brand
                </th>
                <th scope="col" className="py-3 pl-4">
                  Price
                </th>
                <th scope="col" className="py-3 pl-4">
                  Discount
                </th>
                <th scope="col" className="py-3 pl-4">
                  Stock
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
                  <td className="py-3 px-4 font-medium whitespace-wrap">
                    The best Product Ever Name
                  </td>
                  <td className="py-3 px-4 font-medium whitespace-nowrap">
                    Sport
                  </td>
                  <td className="py-3 px-4 font-medium whitespace-nowrap">
                    Best Brand
                  </td>
                  <td className="py-3 px-4 font-medium whitespace-nowrap">
                    $123
                  </td>
                  <td className="py-3 px-4 font-medium whitespace-nowrap">
                    10%
                  </td>
                  <td className="py-3 px-4 font-medium whitespace-nowrap">
                    CA27
                  </td>
                  <td className="py-3 px-4 font-medium whitespace-nowrap hover:">
                    <div className="flex justify-start items-center gap-4">
                      <Link className="transition-all p-[6px] bg-yellow-500 rounded hover:shadow-md hover:shadow-yellow-500/50">
                        <FaEdit />
                      </Link>
                      <Link className="transition-all p-[6px] bg-green-500 rounded hover:shadow-md hover:shadow-green-500/50">
                        <FaEye />
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
  );
};

export default DiscoundProducts;
