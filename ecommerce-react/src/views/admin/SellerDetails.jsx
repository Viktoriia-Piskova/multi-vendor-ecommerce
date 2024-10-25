import React from "react";

const SellerDetails = () => {
  return (
    <div className="px-2 lg:px-7 pt-5">
      <h1 className="text-xl font-bold mb-3">Sellers details</h1>
      <div className="w-full p-4 bg-est-violet-bright rounded-md">
        <div className="w-full flex flex-wrap text-est-light-grey justify-between items-center">
          <div className="w-3/12 flex justify-center items-center py-3">
            <div>
              <img
                className="w-full max-h-[230px]"
                src="http://localhost:3000/images/admin.jpg"
                alt="Seller Name"
              />
            </div>
          </div>
          <div className="w-4/12">
            <div className="px-0 md:px-5 py-2">
              <div className="py-2 text-lg">
                <h2>Basic info</h2>
              </div>
              <div className="flex justify-between text-sm flex-col gap-2 p-4 bg-est-blue-light rounded-md">
                <div className="flex gap-2 text-slate-950 font-bold">
                  <p>
                    Name: <span>Name</span>
                  </p>
                </div>
                <div className="flex gap-2 text-slate-950 font-bold">
                  <p>
                    Email: <span>seller@test.com</span>
                  </p>
                </div>
                <div className="flex gap-2 text-slate-950 font-bold">
                  <p>
                    Role: <span>Seller</span>
                  </p>
                </div>
                <div className="flex gap-2 text-slate-950 font-bold">
                  <p>
                    Status: <span>Active</span>
                  </p>
                </div>
                <div className="flex gap-2 text-slate-950 font-bold">
                  <p>
                    Payment Status: <span>Active</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-4/12">
            <div className="px-0 md:px-5 py-2">
              <div className="py-2 text-lg">
                <h2>Address</h2>
              </div>
              <div className="flex justify-between text-sm flex-col gap-2 p-4 bg-est-blue-light rounded-md">
                <div className="flex gap-2 text-slate-950 font-bold">
                  <p>
                    Shop Name: <span>Name of Shop</span>
                  </p>
                </div>
                <div className="flex gap-2 text-slate-950 font-bold">
                  <p>
                    Division: <span>Volyn</span>
                  </p>
                </div>
                <div className="flex gap-2 text-slate-950 font-bold">
                  <p>
                    District: <span>Obolon</span>
                  </p>
                </div>
                <div className="flex gap-2 text-slate-950 font-bold">
                  <p>
                    State: <span>Cherkaschyna</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <form action="">
            <div className="flex gap-4 py-3">
              <select
                className="px-4 py-2 hover:cursor-pointer focus:border-indigo-500 transition-all outline-none bg-est-violet-bright border border-slate-700 rounded-md text-est-light-grey"
                name=""
                id=""
              >
                <option value="">--Select Status--</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
              <button className="bg-red-500 w-[170px] shadow-lg hover:shadow-red-500/50 px-4 py-2 cursor-pointer text-white rounded-sm">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SellerDetails;
