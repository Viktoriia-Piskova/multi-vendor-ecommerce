import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import InputWithLabel from "../components/ui/InputWithLabel";

const Login = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <div className="min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center">
      <div className="w-[350px] text-white- p-2">
        <div className="bg-[#6f68d1] p-4 rounded-md text-white">
          <h2 className="text-xl mb-3 font-bold">Welcome to Ecommerce</h2>
          <p className="text-sm mb-3 font-medium">Please log in</p>
          <form onSubmit={(e) => handleFormSubmit(e)}>
            <InputWithLabel
              onChange={(e) => handleInputChange(e)}
              type="email"
              name="email"
              placeholder="Email"
              label="Email"
              id="email"
              required={true}
              additionalInputClass={
                "bg-transparent border-slate-400 focus:border-slate-200"
              }
            />
            <InputWithLabel
              onChange={(e) => handleInputChange(e)}
              type="password"
              name="password"
              placeholder="Password"
              label="Password"
              id="password"
              required={true}
              additionalInputClass={
                "bg-transparent border-slate-400 focus:border-slate-200"
              }
            />
            <button className="bg-slate-800 w-full hover:shadow-blue-300/50 hover:shadow-md text-white rounded-md px-7 py-2 mb-3 transition-all duration-300 ease-in-out">
              Log in
            </button>
            <div className="flex items-center mb-3 gap-3 justify-center">
              <p>
                Don't have an account?
                <Link to="/register" className="font-bold ml-2 hover:underline">
                  Register
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

export default Login;
