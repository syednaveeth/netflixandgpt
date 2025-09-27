import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { Api_options } from "../Utils/constant";

const MainContainer = () => {
  const movie = useSelector((store) => store?.movies?.getnowplayingMovie);

  if (movie === null) return;

  const firstmoviedata = movie[0];

  const { id } = firstmoviedata;

  //console.log(firstmoviedata);

  return (
    <div>
      <VideoTitle movie={firstmoviedata} />

      <VideoBackground id={id} />
    </div>
  );
};

export default MainContainer;
