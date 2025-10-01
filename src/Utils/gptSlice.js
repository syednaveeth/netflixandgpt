import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gptSlice",

  initialState: { showGptSearch: false },

  reducers: {
    toggleShowGptSearch: (state) => {
      ///
      state.showGptSearch = !state.showGptSearch;
    },
  },
});

export const { toggleShowGptSearch } = gptSlice.actions;

export default gptSlice.reducer;
