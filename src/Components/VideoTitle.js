import React from "react";

const VideoTitle = ({ movie }) => {
  //console.log(movie.original_title);
  return (
    <div className="pt-[20%]   px-20  w-screen aspect-video absolute bg-gradient-to-r from-black ">
      <h1 className="text-5xl mb-5 w-2/5  text-white  ">
        {movie.original_title}{" "}
      </h1>
      <p className=" w-2/5 m-2   text-white ">{movie.overview}</p>
      <button className="   text-white font-bold border rounded-lg  p-3  m-2  hover:bg-white hover:text-black">
        Play
      </button>
      <button className="  text-white  font-bold border rounded-lg  p-3  m-2 hover:bg-white hover:text-black">
        More Info
      </button>
    </div>
  );
};

export default VideoTitle;
