import React from "react";
import GPTSearch from "./GPTSearch";
import GPTMovieSuggestion from "./GPTMovieSuggestion";
import Footer from "../Footer";

const GptSearchWorks = () => {
  return (
    <div className="bg-black ">
      <GPTSearch />
      <GPTMovieSuggestion />
      <Footer />
    </div>
  );
};

export default GptSearchWorks;
