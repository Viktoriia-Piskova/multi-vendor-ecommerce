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
  });

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
                  onChange={(e)=> handleInput(e)}
                  value={formData.name || ''}
                  className="px-4 py-2 focus:border-indigo-500 transition-all outline-none rounded-md border border-slate-700 text-est-light-grey bg-est-violet-bright"
                  />
              </div>
              <div className="flex flex-col w-full gap-1"></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
