import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",

  initialState: {
    getnowplayingMovie: null,

    getMovieTrailerKey: null,
  },

  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.getnowplayingMovie = action.payload;
    },

    addMovieTrailerKey: (state, action) => {
      state.getMovieTrailerKey = action.payload;
    },
  },
});

export default movieSlice.reducer;
export const { addNowPlayingMovies, addMovieTrailerKey } = movieSlice.actions;
