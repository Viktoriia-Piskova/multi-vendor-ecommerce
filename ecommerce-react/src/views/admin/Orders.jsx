import React, { useState } from "react";
import SearchWithDropdown from "../components/SearchWithDropdown";
import { Link } from "react-router-dom";
import { LuArrowDownFromLine } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import Pagination from "../components/Pagination";

const Orders = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [perPage, setPerPage] = useState(5);
  const [showDetails, setShowDetails] = useState(true);

  return (
    <div className="est-container">
      <div className="est-container-violet">
        <SearchWithDropdown
          setPerPage={setPerPage}
          setSearchValue={setSearchValue}
          searchValue={searchValue}
        />

        <div className="relative mt-5 overflow-x-auto">
          <div className="w-full text-sm text-left bg-est-violet-bright">
            <div className="text-sm text-est-light-grey uppercase border-b border-slate-700">
              <div className="flex justify-between items-center">
                <div className="py-3 w-[25%] font-bold">Order ID</div>
                <div className="py-3 w-[13%] font-bold">Price</div>
                <div className="py-3 w-[18%] font-bold">Payment Status</div>
                <div className="py-3 w-[18%] font-bold">Order Status</div>
                <div className="py-3 w-[18%] font-bold">Action</div>
                <div className="py-3 w-[8%] font-bold">
                  <LuArrowDownFromLine className="hover:cursor-pointer font-bold" />
                </div>
              </div>
            </div>
            <div className="text-sm text-est-light-grey ">
              <div className="flex justify-between items-start border-b border-slate-600">
                <div className="py-3 w-[25%] font-medium whitespace-nowrap">
                  12312
                </div>
                <div className="py-3 w-[13%] font-medium">$565</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
                <div className="py-3 w-[18%] font-medium">
                  <Link to="/admin/dashboard/order/details/3">View</Link>
                </div>
                <div className="py-3 w-[8%] font-medium">
                  <IoIosArrowDown
                    className={
                      showDetails
                        ? "hover:cursor-pointer"
                        : "hover:cursor-pointer rotate-90"
                    }
                    onClick={() => setShowDetails(!showDetails)}
                  />
                </div>
              </div>
            </div>
            <div
              className={
                showDetails
                  ? "block border-b border-slate-700 bg-est-violet-additional pl-3"
                  : "hidden"
              }
            >
              <div className="flex justify-start items-start border-b border-slate-600 text-est-light-grey">
                <div className="py-3 w-[25%] font-medium whitespace-nowrap">
                  #312
                </div>
                <div className="py-3 w-[13%] font-medium">$55</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
              </div>
            </div>
          </div>
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

export default Orders;
