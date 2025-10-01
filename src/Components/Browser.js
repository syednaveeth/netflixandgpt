import Header from "./Header";

import { useNowplayingMovies } from "../Hooks/useNowPlayingmovies";
import MainContainer from "./MainContainer";
import SecoundaryContainer from "./SecoundaryContainer";
import { usePopulerMovie } from "../Hooks/usePopulerMovie";
import { useTopRatedMovies } from "../Hooks/useTopRatedMovies";
import { useUpComingMovies } from "../Hooks/useUpComingMovies";
import { useSelector } from "react-redux";
import GptSearchWorks from "../Components/netflixGpt/GptSearchWorks";
const Browser = () => {
  useNowplayingMovies();
  usePopulerMovie();
  useTopRatedMovies();
  useUpComingMovies();

  const gptSearch = useSelector((store) => store.gptSlice.showGptSearch);

  return (
    <div>
      <div className="w-screen bg-black  ">
        <Header />
      </div>
      {gptSearch ? (
        <GptSearchWorks />
      ) : (
        <>
          <MainContainer />
          <SecoundaryContainer />
        </>
      )}
    </div>
  );
};

export default Browser;
