import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gptSlice",

  initialState: {
    showGptSearch: false,

    showGptMovies: null,
    showGptMoviesname: null,

    loadingimg: false,
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

    addloadingimg: (state, action) => {
      state.loadingimg = action.payload;
    },
  },
});

export const {
  toggleShowGptSearch,
  addGptSearchMovies,
  addloadingimg,
} = gptSlice.actions;

export default gptSlice.reducer;
