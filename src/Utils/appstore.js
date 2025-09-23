import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./userSlice";
export const appstore = configureStore({
  reducer: {
    user: useReducer,
  },
});
