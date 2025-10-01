import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",

  initialState: {
    getnowplayingMovie: null,

    getMovieTrailerKey: null,

    getPopularMovieApi: null,

    getTopRatedMovies: null,

    getUpComingMovies: null,
  },

  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.getnowplayingMovie = action.payload;
    },

    addMovieTrailerKey: (state, action) => {
      state.getMovieTrailerKey = action.payload;
    },

    addPopularMoviesApi: (state, action) => {
      state.getPopularMovieApi = action.payload;
    },

    addTopRatedMovies: (state, action) => {
      state.getTopRatedMovies = action.payload;
    },

    addUpComeingMovies: (state, action) => {
      state.getUpComingMovies = action.payload;
    },
  },
});

export default movieSlice.reducer;
export const {
  addNowPlayingMovies,
  addMovieTrailerKey,
  addPopularMoviesApi,
  addTopRatedMovies,
  addUpComeingMovies,
} = movieSlice.actions;
