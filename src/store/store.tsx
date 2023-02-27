import { configureStore } from "@reduxjs/toolkit";
import login from "./reducers/login/login";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    login,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
