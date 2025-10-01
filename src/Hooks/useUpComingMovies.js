import { useEffect } from "react";
import { Api_options } from "../Utils/constant";
import { useDispatch } from "react-redux";
import { addUpComeingMovies } from "../Utils/movieSlice";

export const useUpComingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getUpComing();
  }, []);

  async function getUpComing() {
    const getapi = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      Api_options
    );

    const getapijson = await getapi.json();

    dispatch(addUpComeingMovies(getapijson));
  }
};
