import React from "react";
import GPTSearch from "./GPTSearch";
import GPTMovieSuggestion from "./GPTMovieSuggestion";
import Footer from "../Footer";
const gptSearchWorks = () => {
  return (
    <div>
      <GPTSearch />
      <GPTMovieSuggestion />
      <Footer />
    </div>
  );
};

export default gptSearchWorks;
