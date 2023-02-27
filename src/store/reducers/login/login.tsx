import { createSlice } from "@reduxjs/toolkit";
import { IShowHandlerPayload, IAuthHandlerPayload } from "./loginTypes";

const initialState = {
  show: false,
  isAuthenticated: localStorage.getItem("authUser") ? true : false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    handleShow: (state, action: IShowHandlerPayload) => {
      state.show = action.payload;
    },
    authenticationHandler: (state, action: IAuthHandlerPayload) => {
      localStorage.setItem("authUser", "true");
      state.isAuthenticated = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { handleShow, authenticationHandler } = loginSlice.actions;

export default loginSlice.reducer;
