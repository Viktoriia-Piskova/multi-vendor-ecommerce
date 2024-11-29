import React, { useState } from "react";
import SearchWithDropdown from "../components/SearchWithDropdown";
import { Link } from "react-router-dom";
import { FaEdit, FaImage, FaTrash } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import Pagination from "../components/Pagination";
import RedButton from "../components/ui/RedButton";
import InputWithLabel from "../components/ui/InputWithLabel";
import SingleImageUploader from "../components/ui/SingleImageUploader";

const Categories = () => {
  const [searchValue, setSearchValue] = useState("");
  const [perPage, setPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [showDetails, setShowDetails] = useState(false);

  const dummyOrdersData = [1, 2, 3, 4, 5];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit");
  };

  return (
    <div className="est-container">
      <div className="est-container-violet flex lg:hidden justify-between items-center mb-5">
        <h1 className="text-est-light-grey font-semibold text-lg">Category</h1>
        <RedButton handleClick={() => setShowDetails(true)}>Add</RedButton>
      </div>
      <div className="flex flex-wrap w-full">
        <div className="w-full lg:w-7/12">
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
                <InputWithLabel
                  label="Category name"
                  type="text"
                  id="name"
                  name="category_name"
                  placeholder="Category name"
                  additionalInputClass="bg-white"
                />
                <SingleImageUploader />
                <div>
                  <RedButton
                    handleClick={(e) => handleSubmit(e)}
                    additionalClass="w-full my-2"
                  >
                    Add category
                  </RedButton>
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
