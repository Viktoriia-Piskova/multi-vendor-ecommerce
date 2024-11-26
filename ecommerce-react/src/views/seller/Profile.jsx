import React from "react";
import { IoMdImages } from "react-icons/io";
import { FadeLoader } from "react-spinners";
import { FaEdit } from "react-icons/fa";
import RedButton from "../components/ui/RedButton";

const Profile = () => {
  const image = true;
  const loader = false;
  const status = "active";
  const userInfo = true;

  return (
    <div className="px-2 lg:px-7 py-5">
      <div className="w-full flex flex-wrap gap-3">
        <div className="w-full md:w-6/12">
          <div className="w-full p-4 bg-est-violet-bright rounded-md text-est-light-grey">
            <div className="flex justify-center items-center py-3">
              {image ? (
                <label
                  htmlFor="profileImage"
                  className="h-[150px] w-[200px] relative p-3 cursor-pointer overflow-hidden"
                >
                  <img
                    src="http://localhost:3000/images/admin.jpg"
                    alt="Profile picture"
                  />

                  {loader && (
                    <div className="bg-slate-600 absolute left-0 top-0 w-full h-full opacity-70 flex justify-center items-center z-3">
                      <span>
                        <FadeLoader />
                      </span>
                    </div>
                  )}
                </label>
              ) : (
                <label
                  htmlFor="profileImage"
                  className="flex justify-center items-center flex-col h-[210px] w-[300px] 
                  cursor-pointer 
                  border border-dashed border-white hover:border-red-500
                   relative"
                >
                  <span>
                    <IoMdImages className="text-2xl" />
                  </span>
                  <span>Select Image</span>
                  {loader && (
                    <div className="bg-slate-600 absolute left-0 top-0 w-full h-full opacity-70 flex justify-center items-center z-3">
                      <span>
                        <FadeLoader />
                      </span>
                    </div>
                  )}
                </label>
              )}
              <input
                type="file"
                name="profileImage"
                id="profileImage"
                className="hidden"
              />
            </div>
            <div className="px-0 md:px-5 py-2">
              <div className="flex justify-between text-sm flex-col gap-2 p-4 bg-est-gray-meduim rounded-md relative">
                <span className="p-[6px] bg-yellow-500 rounded hover:shadow-lg hover:shadow-yellow-500/50 absolute right-2 cursor-pointer">
                  <FaEdit />
                </span>
                <div className="flex gap-2">
                  <span className="font-semibold">Name: </span>
                  <span>Seller Name</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-semibold">Email: </span>
                  <span>test@te.st</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-semibold">Role: </span>
                  <span>Seller</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-semibold">Status: </span>
                  <span>Active</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-semibold">Payment Account: </span>
                  <p>
                    {status === "active" ? (
                      <span className="bg-green-500 cursor-pointer ml-2 px-2 py-1 rounded text-white text-sm">
                        Active
                      </span>
                    ) : (
                      <span className="bg-red-500 cursor-pointer ml-2 px-2 py-1 rounded text-white text-sm">
                        Click to activate
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div className="px-0 md:px-5 py-2">
              {!userInfo ? (
                <form>
                  <label className="block w-full my-2" htmlFor="shop">
                    Shop name
                  </label>
                  <input
                    type="text"
                    name="shop"
                    id="shop"
                    placeholder="Shop name"
                    className="w-full px-4 py-2 focus:border-est-light-grey transition-all outline-none rounded-md border border-slate-700 text-est-light-grey bg-est-violet-bright"
                  />

                  <label className="block w-full my-2" htmlFor="division">
                    Division
                  </label>
                  <input
                    type="text"
                    name="division"
                    id="division"
                    placeholder="Division name"
                    className="w-full px-4 py-2 focus:border-est-light-grey transition-all outline-none rounded-md border border-slate-700 text-est-light-grey bg-est-violet-bright"
                  />
                  <label className="block w-full my-2" htmlFor="district">
                    District
                  </label>
                  <input
                    type="text"
                    name="district"
                    id="district"
                    placeholder="District name"
                    className="w-full px-4 py-2 focus:border-est-light-grey transition-all outline-none rounded-md border border-slate-700 text-est-light-grey bg-est-violet-bright"
                  />
                  <label className="block w-full my-2" htmlFor="district">
                    Subdistrict
                  </label>
                  <input
                    type="text"
                    name="subdistrict"
                    id="subdistrict"
                    placeholder="Subdistrict name"
                    className="w-full px-4 py-2 focus:border-est-light-grey transition-all outline-none rounded-md border border-slate-700 text-est-light-grey bg-est-violet-bright"
                  />
                  <RedButton>Save changes</RedButton>
                </form>
              ) : (
                <div className="flex justify-between text-sm flex-col gap-2 p-4 bg-est-gray-meduim rounded-md relative">
                  <span className="p-[6px] bg-yellow-500 rounded hover:shadow-lg hover:shadow-yellow-500/50 absolute right-2 cursor-pointer">
                    <FaEdit />
                  </span>
                  <div className="flex gap-2">
                    <span className="font-semibold">Shop name: </span>
                    <span>The best shop ever</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-semibold">Division: </span>
                    <span>Naddniprianschyna</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-semibold">District: </span>
                    <span>Cherkasy</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-semibold">Sub District: </span>
                    <span>Zolotonosha</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="w-full md:w-5/12">
          <div className="w-full pl-0 md:pl-7 mt-6 md:mt-0 bg-est-violet-bright rounded-md text-est-light-grey p-4">
            <h1 className="text-lg mb-3 font-semibold">Change password</h1>
            <form>
              <label className="block w-full my-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="w-full px-4 py-2 focus:border-est-light-grey transition-all outline-none rounded-md border border-slate-700 text-est-light-grey bg-est-violet-bright"
              />

              <label className="block w-full my-2" htmlFor="pass_old">
                Old passsword
              </label>
              <input
                type="password"
                name="pass_old"
                id="pass_old"
                placeholder="Old passsword"
                className="w-full px-4 py-2 focus:border-est-light-grey transition-all outline-none rounded-md border border-slate-700 text-est-light-grey bg-est-violet-bright"
              />
              <label className="block w-full my-2" htmlFor="pass_new">
                New password
              </label>
              <input
                type="password"
                name="pass_new"
                id="pass_new"
                placeholder="New password"
                className="w-full px-4 py-2 focus:border-est-light-grey transition-all outline-none rounded-md border border-slate-700 text-est-light-grey bg-est-violet-bright"
              />
              <RedButton>Save changes</RedButton>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
