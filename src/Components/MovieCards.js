import React from "react";
import { IMG_CDN } from "../Utils/constant";
const MovieCards = ({ playMovie, title }) => {
  // console.log(playMovie);

  return (
    <div className="-mt-52 relative   mb-56">
      <div>
        <div className="text-3xl pl-20 text-white pb-10">{title}</div>

        <div className="flex  overflow-x-scroll ">
          {playMovie &&
            playMovie.map((playMovie) => (
              <img
                className="h-80 m-2"
                src={IMG_CDN + playMovie?.poster_path}
                alt="playing Movies images"
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieCards;
