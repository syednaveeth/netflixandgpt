import React from "react";

const VideoTitle = ({ movie }) => {
  if (!movie) return null;

  return (
    <div className="pt-[15%] px-4 sm:px-8 md:px-12 lg:px-20  lg:py-80 w-full aspect-video absolute bg-gradient-to-r from-black via-black/70 to-transparent">
      {/* Title - Reduced but clear */}
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 text-white leading-snug">
        {movie.original_title || movie.title || movie.name}
      </h1>

      {/* Overview - Compact but readable */}
      <p className="text-xs sm:text-sm md:text-base text-gray-200 mb-3 sm:mb-4 md:mb-5 leading-relaxed line-clamp-2 sm:line-clamp-3 max-w-lg">
        {movie.overview}
      </p>

      {/* Buttons Container - Smaller but functional */}
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
        {/* Play Button */}
        <button className="bg-white text-black font-medium text-sm sm:text-base px-4 sm:px-5 py-1.5 sm:py-2 rounded-md hover:bg-opacity-80 transition-all duration-200 flex items-center justify-center gap-2 w-full sm:w-auto">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
          Play
        </button>

        {/* More Info Button */}
        <button className="bg-gray-600/70 text-white font-medium text-sm sm:text-base px-4 sm:px-5 py-1.5 sm:py-2 rounded-md hover:bg-gray-500/70 transition-all duration-200 flex items-center justify-center gap-2 w-full sm:w-auto">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          More Info
        </button>
      </div>

      {/* Additional Movie Info - Only on larger screens */}
      <div className="hidden lg:flex items-center gap-3 mt-4 text-gray-300 text-sm">
        {movie.release_date && (
          <span>{new Date(movie.release_date).getFullYear()}</span>
        )}
        {movie.vote_average && (
          <span className="flex items-center gap-1">
            <span className="text-yellow-400">⭐</span>
            {movie.vote_average.toFixed(1)}
          </span>
        )}
      </div>
    </div>
  );
};

export default VideoTitle;
