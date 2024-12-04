import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import InputWithLabel from "../components/ui/InputWithLabel";
import { PropagateLoader } from "react-spinners";
import { propagateLoaderStylesOverride } from "../../utils/utils";
import { seller_register } from "../../store/Reducers/authReducer";

const Register = () => {
  const dispatch = useDispatch();
  const { loader } = useSelector((state) => state.auth);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(seller_register(formState));
  };

  return (
    <div className="min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center">
      <div className="w-[350px] text-white- p-2">
        <div className="bg-[#6f68d1] p-4 rounded-md text-white">
          <h2 className="text-xl mb-3 font-bold">Welcome to Ecommerce</h2>
          <p className="text-sm mb-3 font-medium">
            Please register your account
          </p>
          <form
            onSubmit={(e) => {
              handleFormSubmit(e);
            }}
          >
            <InputWithLabel
              onChange={(e) => handleInputChange(e)}
              type="text"
              name="name"
              placeholder="Name"
              id="name"
              label="Name"
              required={true}
              additionalInputClass={
                "bg-transparent border-slate-300 focus:border-slate-100"
              }
            />
            <InputWithLabel
              onChange={(e) => handleInputChange(e)}
              type="email"
              name="email"
              placeholder="Email"
              id="email"
              required={true}
              label="Email"
              additionalInputClass={
                "bg-transparent border-slate-300 focus:border-slate-100"
              }
            />
            <InputWithLabel
              onChange={(e) => handleInputChange(e)}
              type="password"
              name="password"
              placeholder="Password"
              id="password"
              required={true}
              label="Password"
              additionalInputClass={
                "bg-transparent border-slate-300 focus:border-slate-100"
              }
            />
            <div className="flex items-center w-full gap-3 mb-3">
              <input
                className="w-4 h-4 text-blue-600 overflow-hidden bg-gray-200 rounded border-gray-300 focus:ring-blue-500"
                type="checkbox"
                name="checkbox"
                id="checkbox"
              />
              <label htmlFor="checkbox">
                I agree to privacy policy and terms
              </label>
            </div>
            <button
              disabled={loader}
              className="bg-slate-800 w-full hover:shadow-blue-300/50 hover:shadow-md text-white rounded-md px-7 py-2 mb-3 transition-all duration-300 ease-in-out disabled:opacity-70"
            >
              {loader ? (
                <PropagateLoader cssOverride={propagateLoaderStylesOverride} />
              ) : (
                "Sign up"
              )}
            </button>

            <div className="flex items-center mb-3 gap-3 justify-center">
              <p>
                Already have an account?
                <Link to="/login" className="font-bold ml-2 hover:underline">
                  Sign in
                </Link>
              </p>
            </div>
            <div className="w-full flex justify-center items-center mb-3">
              <hr className="w-[45%] bg-slate-700 h-[1px] border-none"></hr>
              <div className="w-[10%] flex justify-center items-center">
                <span className="pb-1">Or</span>
              </div>
              <hr className="w-[45%] bg-slate-700 h-[1px] border-none"></hr>
            </div>
            <div className="flex justify-center items-center gap-3">
              <div className="w-[135px] h-[35px] flex justify-center items-center rounded-md bg-orange-700 shadow-lg hover:bg-orange-600 cursor-pointer overflow-hidden transition-all duration-300 ease-in-outs">
                <span>
                  <FaGoogle />
                </span>
              </div>
              <div className="w-[135px] h-[35px] flex justify-center items-center rounded-md bg-blue-700 shadow-lg hover:bg-blue-600 cursor-pointer overflow-hidden transition-all duration-300 ease-in-outs">
                <span>
                  <FaFacebook />
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
