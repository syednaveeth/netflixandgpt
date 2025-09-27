import { useEffect } from "react";
import { Api_options } from "../Utils/constant";

import { useDispatch } from "react-redux";

import { addMovieTrailerKey } from "../Utils/movieSlice";

export const useTrailerVideo = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    getaVideoTrailer();
  }, []);

  async function getaVideoTrailer() {
    const trailer = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      Api_options
    );
    const trailerdata = await trailer.json();
    //console.log(trailerdata.results);

    const trailervideo = trailerdata?.results?.find(
      (video) => video.type === "Trailer"
    );

    //console.log(trailervideo);
    let key = null;
    if (trailervideo) {
      key = trailervideo?.key;

      dispatch(addMovieTrailerKey(key));
    } else if (trailerdata?.results?.length > 0) {
      key = trailerdata?.results[0]?.key;

      dispatch(addMovieTrailerKey(key));
    }
  }
};
