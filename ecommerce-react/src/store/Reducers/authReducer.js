import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export const admin_login = createAsyncThunk(
  "auth/admin_login",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post("/admin/login", info, {
        withCredentials: true,
      });
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data.error);
      // console.log(error.response.data.error);
    }
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
    clearMessage: (state, payload) => {
      state.errorMessage = "";
      state.successMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(admin_login.pending, (state, { payload }) => {
      state.loader = true;
    });
    builder.addCase(admin_login.rejected, (state, { payload }) => {
      state.loader = false;
      state.errorMessage = payload;
    });
    builder.addCase(admin_login.fulfilled, (state, { payload }) => {
      state.loader = false;
      state.successMessage = payload.message;
      state.userInfo = payload;
    });
  },
});
export const { clearMessage } = authReducer.actions;
export default authReducer.reducer;
