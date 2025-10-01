import React from "react";
import MovieCards from "./MovieCards";
import { useSelector } from "react-redux";

const MovieList = () => {
  const playMovie = useSelector((store) => store.movies.getnowplayingMovie);

  const popularMovie = useSelector((store) => store.movies.getPopularMovieApi);
  const topRatedMovies = useSelector((store) => store.movies.getTopRatedMovies);
  const upComingMovies = useSelector((store) => store.movies.getUpComingMovies);

  return (
    <div>
      <MovieCards playMovie={playMovie} title={"Now Playing Movie"} />
      <MovieCards playMovie={popularMovie?.results} title={"Popular Movies "} />
      <MovieCards
        playMovie={topRatedMovies?.results}
        title={" TopRatedMovies"}
      />
      <MovieCards
        playMovie={upComingMovies?.results}
        title={"UpComing Movies "}
      />
    </div>
  );
};

export default MovieList;
