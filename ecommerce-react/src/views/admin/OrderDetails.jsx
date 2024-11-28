import React from "react";

const OrderDetails = () => {
  return (
    <div className="est-container">
      <div className="est-container-violet">
        <div className="flex justify-between items-center p-4">
          <h2 className="text-xl text-est-light-grey">Order Details</h2>
          <select
            name=""
            id=""
            className="px-4 py-2 border border-slate-700 rounded-md text-est-light-grey focus:border-indigo-500 outline-none bg-est-gray-meduim"
          >
            <option value="pending">Pending</option>
            <option value="processing">Processing</option>
            <option value="warehouse">Warehouse</option>
            <option value="placed">Placed</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
        <div className="p-4">
          <div className="flex gap-2 text-lg text-est-light-grey">
            <p>#3434</p>
            <span>03 Jan 2025</span>
          </div>
          <div className="flex flex-wrap">
            <div className="w-[30%]">
              <div className="pr-3 text-est-light-grey text-lg">
                <div className="flex flex-col gap-1">
                  <p className="pb-2 font-semibold">
                    Deliver to: <span>Name Client</span>
                  </p>
                  <p>
                    <span className="text-sm">
                      Rudolf-Mann-Platz 45a, Storlland, SH 52988
                    </span>
                  </p>
                </div>
                <div className="flex justify-start items-baseline gap-3">
                  <p>Payment status: </p>
                  <span className="text-base">Paid</span>
                </div>
                <div className="flex justify-start items-baseline gap-3">
                  <p>Price: </p>
                  <span className="text-base">$3434</span>
                </div>
                <div className="mt-4 flex flex-col gap-4 bg-est-blue-light rounded-md p-2">
                  <div className="text-est-light-grey">
                    <div className="flex gap-3 text-md">
                      <img
                        className="h-[45px] w-[45px]"
                        src={`http://localhost:3000/images/categories/1.jpg`}
                        alt=""
                      />
                      <div>
                        <h2 className="text-md font-semibold">Product name</h2>
                        <p>
                          <span>Brand: </span>
                          <span>BrandName</span>
                        </p>
                        <p>
                          <span>Quantity: </span>
                          <span>30</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[70%]">
              <div className="pl-3">
                <div className="my-4 flex flex-col bg-est-violet-additional rounded-md p-4">
                  <div className="text-est-light-grey my-4">
                    <div className="flex justify-start items-center text-lg gap-3 mb-2">
                      <h2>
                        Seller <span>1</span> order: <span>Pending</span>
                      </h2>
                    </div>
                    <div className="flex gap-3 text-md">
                      <img
                        className="h-[45px] w-[45px]"
                        src={`http://localhost:3000/images/categories/1.jpg`}
                        alt=""
                      />
                      <div>
                        <h2 className="text-md font-semibold">Product name</h2>
                        <p>
                          <span>Brand: </span>
                          <span>BrandName</span>
                        </p>
                        <p>
                          <span>Quantity: </span>
                          <span>30</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
