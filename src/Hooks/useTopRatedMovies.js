import { Api_options } from "../Utils/constant";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../Utils/movieSlice";
import { useEffect } from "react";

export const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getTopRatedMovies();
  }, []);

  async function getTopRatedMovies() {
    const getapi = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      Api_options
    );
    const getapijson = await getapi.json();

    dispatch(addTopRatedMovies(getapijson));
  }
};
