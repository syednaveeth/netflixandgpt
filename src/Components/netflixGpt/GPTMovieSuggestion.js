import React from "react";

import { useSelector } from "react-redux";
import MovieCards from "../MovieCards";
const GPTMovieSuggestion = () => {
  const gptmovies = useSelector((store) => store?.gptSlice);

  return (
    <div className="bg-black ">
      {gptmovies.loadingimg ? (
        <div className="flex flex-col items-center justify-center py-20">
          {/* 🌌 Red glowing rotating ring */}
          <div className="relative w-24 h-24">
            <div className="absolute inset-0 rounded-full border-[3px] border-red-700/30 animate-spin-slow"></div>
            <div className="absolute inset-1 rounded-full border-t-[4px] border-red-600 border-opacity-90 animate-spin"></div>
            <div className="absolute inset-2 bg-gradient-to-r from-red-700/20 via-black/70 to-red-900/30 blur-md rounded-full animate-pulse"></div>
            <div className="absolute inset-0 shadow-[0_0_30px_4px_rgba(255,0,0,0.25)] rounded-full"></div>
          </div>

          {/* 🎬 Glowing neon text */}
          <h1 className="mt-8 text-3xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-white animate-pulse drop-shadow-[0_0_10px_rgba(255,0,0,0.5)]">
            Loading Movies...
          </h1>

          {/* 🔴 Stylish bouncing orbs */}
          <div className="flex gap-2 mt-4">
            <span className="w-3.5 h-3.5 bg-gradient-to-br from-red-500 to-red-800 rounded-full animate-bounce [animation-delay:-0.3s] shadow-[0_0_10px_rgba(255,0,0,0.6)]"></span>
            <span className="w-3.5 h-3.5 bg-gradient-to-br from-red-500 to-red-800 rounded-full animate-bounce [animation-delay:-0.15s] shadow-[0_0_10px_rgba(255,0,0,0.6)]"></span>
            <span className="w-3.5 h-3.5 bg-gradient-to-br from-red-500 to-red-800 rounded-full animate-bounce shadow-[0_0_10px_rgba(255,0,0,0.6)]"></span>
          </div>
        </div>
      ) : (
        gptmovies?.showGptMoviesname?.map((showGptMoviesname, index) => (
          <MovieCards
            playMovie={gptmovies?.showGptMovies[index]}
            title={showGptMoviesname}
          />
        ))
      )}
    </div>
  );
};

export default GPTMovieSuggestion;
