import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gptSlice",

  initialState: {
    showGptSearch: false,

    showGptMovies: null,
    showGptMoviesname: null,
  },

  reducers: {
    toggleShowGptSearch: (state) => {
      ///
      state.showGptSearch = !state.showGptSearch;
    },

    addGptSearchMovies: (state, action) => {
      const { showGptMovies, showGptMoviesname } = action.payload;
      state.showGptMovies = showGptMovies;
      state.showGptMoviesname = showGptMoviesname;
    },
  },
});

export const { toggleShowGptSearch, addGptSearchMovies } = gptSlice.actions;

export default gptSlice.reducer;
