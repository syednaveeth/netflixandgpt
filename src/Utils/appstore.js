import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
export const appstore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
  },
});
