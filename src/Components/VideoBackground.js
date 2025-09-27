import { useSelector } from "react-redux";
import { useTrailerVideo } from "../Hooks/useTrailerVideo";
const VideoBackground = ({ id }) => {
  useTrailerVideo(id);
  const keydata = useSelector((store) => store.movies.getMovieTrailerKey);

  return (
    <div>
      <iframe
        className="w-screen aspect-video   "
        src={`https://www.youtube.com/embed/${keydata}?autoplay=1&mute=1`}
      ></iframe>
    </div>
  );
};

export default VideoBackground;
