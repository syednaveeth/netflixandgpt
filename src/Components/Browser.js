import Header from "./Header";

//import { useSelector } from "react-redux";
import { useNowplayingMovies } from "../Hooks/useNowPlayingmovies";
import MainContainer from "./MainContainer";
const Browser = () => {
  useNowplayingMovies();
  //const movietitle = useSelector((store) => store?.movies?.getnowplayingMovie);
  return (
    <div>
      <div className="w-screen bg-black  ">
        <Header />
      </div>

      <MainContainer />
      {/* <h1> {movietitle}</h1> */}

      {/* {movietitle &&
        movietitle.map((movie) => (
          <ul>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            />
          </ul>
        ))} */}
    </div>
  );
};

export default Browser;
