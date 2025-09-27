import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../Utils/movieSlice";
import { Api_options } from "../Utils/constant";

import { useEffect } from "react";
export const useNowplayingMovies = () => {
  const Dispatch = useDispatch();

  async function nowPlayingMovieApi() {
    const movieapi = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      Api_options
    );

    const jsonapi = await movieapi.json();

    //console.log(jsonapi.results);
    Dispatch(addNowPlayingMovies(jsonapi.results));
  }

  useEffect(() => {
    nowPlayingMovieApi();
  }, []);
};
