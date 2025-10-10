import React from "react";

import { useSelector } from "react-redux";
import MovieCards from "../MovieCards";
const GPTMovieSuggestion = () => {
  const gptmovies = useSelector((store) => store?.gptSlice);

  return (
    <div className="bg-black ">
      {gptmovies?.showGptMoviesname?.map((showGptMoviesname, index) => (
        <MovieCards
          playMovie={gptmovies?.showGptMovies[index]}
          title={showGptMoviesname}
        />
      ))}
    </div>
  );
};

export default GPTMovieSuggestion;
