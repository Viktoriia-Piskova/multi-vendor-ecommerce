import React from "react";
import { IoMdImages } from "react-icons/io";
import { FadeLoader } from "react-spinners";
import { FaEdit } from "react-icons/fa";
import RedButton from "../components/ui/RedButton";
import InputWithLabel from "../components/ui/InputWithLabel";
import LabeledText from "../components/ui/LabeledText";

const Profile = () => {
  const image = true;
  const loader = false;
  const status = "active";
  const userInfo = true;

  return (
    <div className="px-2 lg:px-7 py-5">
      <div className="w-full flex flex-wrap gap-3">
        <div className="w-full md:w-6/12">
          <div className="est-container-violet text-est-light-grey">
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

                <LabeledText label={"Name"}>Seller Name</LabeledText>
                <LabeledText label={"Email"}>test@te.st</LabeledText>
                <LabeledText label={"Role"}>Seller</LabeledText>
                <LabeledText label={"Status"}>Active</LabeledText>
                <LabeledText label={"Payment Account"}>
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
                </LabeledText>
              </div>
            </div>
            <div className="px-0 md:px-5 py-2">
              {!userInfo ? (
                <form>
                  <InputWithLabel
                    label="Shop name"
                    type="text"
                    name="shop"
                    id="shop"
                    placeholder="Shop name"
                  />
                  <InputWithLabel
                    label="Division"
                    type="text"
                    name="division"
                    id="division"
                    placeholder="Division name"
                  />
                  <InputWithLabel
                    type="text"
                    name="district"
                    id="district"
                    placeholder="District"
                    label="Division"
                  />
                  <InputWithLabel
                    type="text"
                    name="subdistrict"
                    id="subdistrict"
                    placeholder="Subdistrict name"
                    label="Subdistrict"
                  />
                  <RedButton>Save changes</RedButton>
                </form>
              ) : (
                <div className="flex justify-between text-sm flex-col gap-2 p-4 bg-est-gray-meduim rounded-md relative">
                  <span className="p-[6px] bg-yellow-500 rounded hover:shadow-lg hover:shadow-yellow-500/50 absolute right-2 cursor-pointer">
                    <FaEdit />
                  </span>
                  <LabeledText label={"Shop name"}>The best shop ever</LabeledText>
                  <LabeledText label={"Division"}>Naddniprianschyna</LabeledText>
                  <LabeledText label={"District"}>Cherkasy</LabeledText>
                  <LabeledText label={"Sub District"}>Zolotonosha</LabeledText>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="w-full md:w-5/12">
          <div className="est-container-violet pl-0 md:pl-7 mt-6 md:mt-0 text-est-light-grey">
            <h1 className="text-lg mb-3 font-semibold">Change password</h1>
            <form>
              <InputWithLabel
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                label="Email"
              />

              <InputWithLabel
                type="password"
                name="pass_old"
                id="pass_old"
                placeholder="Old passsword"
                label="Old passsword"
              />
              <InputWithLabel
                type="password"
                name="pass_new"
                id="pass_new"
                placeholder="New password"
                label="New passsword"
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
