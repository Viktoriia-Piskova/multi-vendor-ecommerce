import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { admin_login } from "../../store/Reducers/authReducer";

const AdminLogin = () => {
  const dispatch = useDispatch();
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(admin_login(formState))
  };
  return (
    <div className="min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center">
      <div className="w-[350px] text-white- p-2">
        <div className="bg-[#6f68d1] p-4 rounded-md text-white">
          <div className="h-[120px] flex justify-center items-center">
            <div className="w-[80%] flex justify-center items-center">
              <img
                className="h-full w-full"
                src="http://localhost:3000/images/logo.png"
                alt="Logo"
              />
            </div>
          </div>
          <form onSubmit={(e) => handleFormSubmit(e)}>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="email">Email</label>
              <input
                onChange={(e) => handleInputChange(e)}
                className="px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md"
                type="email"
                name="email"
                placeholder="Email"
                id="email"
                required
              />
            </div>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="password">Password</label>
              <input
                onChange={(e) => handleInputChange(e)}
                className="px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md"
                type="password"
                name="password"
                placeholder="Password"
                id="password"
                required
              />
            </div>
            <button className="bg-slate-800 w-full hover:shadow-blue-300/50 hover:shadow-md text-white rounded-md px-7 py-2 mb-3 transition-all duration-300 ease-in-out">
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
