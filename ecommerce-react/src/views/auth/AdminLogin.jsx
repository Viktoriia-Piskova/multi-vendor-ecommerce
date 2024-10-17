import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { admin_login, clearMessage } from "../../store/Reducers/authReducer";
import { PropagateLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AdminLogin = () => {
  const dispatch = useDispatch();
  const { loader, errorMessage, successMessage } = useSelector(
    (state) => state.auth
  );
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(admin_login(formState));
  };

  const propagateLoaderStylesOverride = {
    display: "flex",
    margin: "0 auto",
    height: "24px",
    justifyContent: "center",
    alignItems: "center",
  };

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(clearMessage());
    }
    if (successMessage) {
      toast.success(successMessage);
      dispatch(clearMessage());
      navigate('/')
    }
  }, [errorMessage, successMessage]);

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
            <button
              disabled={loader}
              className="bg-slate-800 w-full hover:shadow-blue-300/50 hover:shadow-md text-white rounded-md px-7 py-2 mb-3 transition-all duration-300 ease-in-out disabled:opacity-70"
            >
              {loader ? (
                <PropagateLoader cssOverride={propagateLoaderStylesOverride} />
              ) : (
                "Log in"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
