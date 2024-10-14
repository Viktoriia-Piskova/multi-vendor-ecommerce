import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export const admin_login = createAsyncThunk(
  "auth/admin_login",
  async (info) => {
    console.log(info);

    try {
      const { data } = await api.post("/admin/login", info, {
        withCredentials: true,
      });
      console.log(data);
    } catch (error) {}
  }
);

export const authReducer = createSlice({
  name: "auth",
  initialState: {
    successMessage: "",
    errorMessage: "",
    loader: false,
    userInfo: "",
  },
  reducers: {
    // setSuccessMessage: (state, action) => {
    //   state.successMessage = action.payload;
    // },
  },
  extraReducers: () => {},
});

console.log(authReducer);

export default authReducer.reducer;
