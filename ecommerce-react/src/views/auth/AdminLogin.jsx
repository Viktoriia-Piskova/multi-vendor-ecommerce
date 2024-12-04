import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { admin_login, clearMessage } from "../../store/Reducers/authReducer";
import { PropagateLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import InputWithLabel from "../components/ui/InputWithLabel";
import {propagateLoaderStylesOverride} from '../../utils/utils'

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

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(clearMessage());
    }
    if (successMessage) {
      toast.success(successMessage);
      dispatch(clearMessage());
      navigate("/");
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
            <InputWithLabel
              label="Email"
              type="email"
              name="email"
              placeholder="Email"
              id="email"
              onChange={(e) => handleInputChange(e)}
              required={true}
              additionalInputClass="bg-transparent"
            />
            <InputWithLabel
              type="password"
              label="Password"
              name="password"
              placeholder="Password"
              id="password"
              additionalInputClass="bg-transparent"
              required={true}
              onChange={(e) => handleInputChange(e)}
            />
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
