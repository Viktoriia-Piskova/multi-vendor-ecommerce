import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    discount: "",
    price: "",
    brand: "",
    stock: "",
    category: "",
  });

  const categories = [
    { id: 1, name: "Sport" },
    {
      id: 2,
      name: "Mobile",
    },
    {
      id: 3,
      name: "T-shirt",
    },
  ];

  const [сategory, setCategory] = useState("");
  const [showCategories, setShowCategories] = useState(false);
  const [allCategories, setAllCategories] = useState(categories);
  const [searchValue, setSearchValue] = useState("");

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
    <div className="px-2 lg:px-7 pt-5 ">
      <div className="w-full p-4 bg-est-violet-bright rounded-md">
        <div className="flex justify-between items-center pb-4">
          <h1 className="text-est-light-grey text-xl font-semibold">
            Add product
          </h1>
          <Link className="bg-blue-500 text-white rounded-sm px-7 py-2 my-2 hover:shadow-blue-500/50 hover:shadow-lg">
            All Products
          </Link>
        </div>
        <div>
          <form>
            <div className="flex flex-col mb-3 md:flex-row gap-4 w-full text-est-light-grey">
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="name">Product name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Product name"
                  onChange={(e) => handleInput(e)}
                  value={formData.name || ""}
                  className="px-4 py-2 focus:border-indigo-500 transition-all outline-none rounded-md border border-slate-700 text-est-light-grey bg-est-violet-bright"
                />
              </div>
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="brand">Product brand</label>
                <input
                  type="text"
                  name="brand"
                  id="brand"
                  placeholder="Brand name"
                  onChange={(e) => handleInput(e)}
                  value={formData.brand || ""}
                  className="px-4 py-2 focus:border-indigo-500 transition-all outline-none rounded-md border border-slate-700 text-est-light-grey bg-est-violet-bright"
                />
              </div>
            </div>
            <div className="flex flex-col mb-3 md:flex-row gap-4 w-full text-est-light-grey">
              <div className="flex flex-col w-full gap-1 relative">
                <label htmlFor="category">Category</label>
                <input
                  readOnly
                  type="text"
                  name="category"
                  id="category"
                  placeholder="-select category-"
                  onChange={(e) => handleInput(e)}
                  onClick={() => setShowCategories(true)}
                  value={сategory || ""}
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
                          сategory === cat.name && "bg-indigo-500"
                        }`}
                        key={index}
                        onClick={() => {
                          setShowCategories(false);
                          setCategory(cat.name);
                          setSearchValue("");
                        }}
                      >
                        {cat.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="stock">Product stock</label>
                <input
                  type="text"
                  name="stock"
                  id="stock"
                  placeholder="Stock name"
                  onChange={(e) => handleInput(e)}
                  value={formData.brand || ""}
                  className="px-4 py-2 focus:border-indigo-500 transition-all outline-none rounded-md border border-slate-700 text-est-light-grey bg-est-violet-bright"
                />
              </div>
            </div>
            <div className="flex flex-col mb-3 md:flex-row gap-4 w-full text-est-light-grey">
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="price">Price</label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  placeholder="$"
                  onChange={(e) => handleInput(e)}
                  value={formData.price || ""}
                  className="px-4 py-2 focus:border-indigo-500 transition-all outline-none rounded-md border border-slate-700 text-est-light-grey bg-est-violet-bright"
                />
              </div>
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="discount">Discount</label>
                <input
                  type="number"
                  name="discount"
                  id="discount"
                  placeholder="%"
                  onChange={(e) => handleInput(e)}
                  value={formData.discount || ""}
                  className="px-4 py-2 focus:border-indigo-500 transition-all outline-none rounded-md border border-slate-700 text-est-light-grey bg-est-violet-bright"
                />
              </div>
            </div>
            <div className="flex flex-col w-full gap-1 text-est-light-grey">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id="description"
                cols="10"
                rows="4"
                placeholder="Product description"
                onChange={(e) => handleInput(e)}
                value={formData.description || ""}
                className="px-4 py-2 focus:border-indigo-500 transition-all outline-none rounded-md border border-slate-700 text-est-light-grey bg-est-violet-bright"
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
