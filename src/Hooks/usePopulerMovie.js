import { useEffect } from "react";
import { Api_options } from "../Utils/constant";
import { useDispatch } from "react-redux";
import { addPopularMoviesApi } from "../Utils/movieSlice";
export const usePopulerMovie = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getPopulerMovieApi();
  }, []);

  async function getPopulerMovieApi() {
    const getapi = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      Api_options
    );

    const getapijson = await getapi.json();

    dispatch(addPopularMoviesApi(getapijson));
  }
};
