import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import gptSearchReducer from "./gptSlice";
import constantReducer from "./constantSlice";
export const appstore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    gptSlice: gptSearchReducer,
    constantSlice: constantReducer,
  },
});
