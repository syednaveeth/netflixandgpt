import React from "react";
import { IMG_CDN } from "../Utils/constant";

const MovieCards = ({ playMovie, title }) => {
  return (
    <div className="relative mb-12 lg:mb-40 mt-0 lg:-mt-40">
      <div>
        {/* Responsive Title */}
        <div className="text-lg sm:text-xl lg:text-2xl px-4 sm:px-6 lg:pl-16 text-white pb-4 sm:pb-6 lg:pb-12 font-bold">
          {title}
        </div>

        {/* Scroll Container */}
        <div className="flex w-full overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-16">
          <div className="flex space-x-2 sm:space-x-3 lg:space-x-4 flex-nowrap">
            {playMovie &&
              playMovie
                ?.filter((movies) => movies.poster_path)
                ?.map((playMovie) => (
                  <div
                    key={playMovie.id}
                    className="relative group transition-all duration-200 ease-in-out hover:scale-105 hover:z-10 flex-shrink-0"
                  >
                    {/* Glow Effect */}
                    <div className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gradient-to-r from-red-500 to-red-800 blur-md -z-10 scale-105"></div>

                    {/* Movie Poster - Smaller Responsive Sizing */}
                    <div className="w-32 h-48 sm:w-36 sm:h-54 md:w-40 md:h-60 lg:w-48 lg:h-72">
                      <img
                        className="w-full h-full object-cover rounded-md shadow-md transition-all duration-200 group-hover:shadow-lg group-hover:shadow-purple-500/40"
                        src={IMG_CDN + playMovie?.poster_path}
                        alt={playMovie.title || playMovie.name}
                        loading="lazy"
                      />
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 transition-all duration-200 rounded-md flex items-end justify-center z-10">
                      <div className="transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-200 p-1.5 sm:p-2 lg:p-3 text-center w-full">
                        <h3 className="text-white font-semibold text-xs sm:text-sm lg:text-base mb-1 truncate">
                          {playMovie.title || playMovie.name}
                        </h3>
                        <p className="text-gray-300 text-xs mb-1">
                          ⭐ {playMovie.vote_average?.toFixed(1)}
                        </p>
                        <p className="text-gray-400 text-xs line-clamp-2 hidden sm:block leading-tight">
                          {playMovie.overview}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCards;
