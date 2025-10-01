import { createSlice } from "@reduxjs/toolkit";
import { language } from "./constant";

const constantSlice = createSlice({
  name: "constant",

  initialState: {
    languageinfo: "en",
  },

  reducers: {
    addLanguageinfo: (state, action) => {
      state.languageinfo = action.payload;
    },
  },
});

export const { addLanguageinfo } = constantSlice.actions;

export default constantSlice.reducer;
