import { useState } from "react";
import { Api_options, language } from "../../Utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addLanguageinfo } from "../../Utils/constantSlice";
import { lang } from "../../Utils/languageConstant";
import { useRef } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { addGptSearchMovies } from "../../Utils/gptSlice";

//import { GptApiKey } from "../../Utils/constant";

export default function GPTSearch() {
  const dispatch = useDispatch();
  const [isTyping, setIsTyping] = useState("");

  const selectedlanguage = useSelector(
    (store) => store?.constantSlice?.languageinfo
  );

  const textdata = useRef(null);

  const handlerlanguage = (e) => {
    dispatch(addLanguageinfo(e.target.value));
  };

  const handlingType = (e) => {
    setIsTyping(e.target.value);
  };

  // console.log(textdata?.current?.value);
  const handlingsubmitbuttonclick = () => {
    const API_KEY = "AIzaSyATblc_6R1GQd7OD0-yxlVmld08g91E9T4";
    const MODEL_NAME = "gemini-2.5-flash";
    const PROMPT =
      "Act as a Movie Recommendation system and suggest some movies for the query" +
      textdata.current.value +
      "only give me name of 5 movies, comma seperated like the example result given ahead. Example Result: Gader,sholay,Don,Golmaal";

    async function runTest() {
      const genAI = new GoogleGenerativeAI(API_KEY);

      const model = genAI.getGenerativeModel({ model: MODEL_NAME });

      // Make the API call
      const response = await model.generateContent(PROMPT);

      // Log the full response for deep debugging

      const apiresult = response.response.candidates[0].content.parts[0].text.split(
        ","
      );
      //  console.log(apiresult);
      const moviesinfo = apiresult.map((movie) => searchApiCall(movie));

      const moviesdata = await Promise.all(moviesinfo);

      // console.log(moviesdata);

      dispatch(
        addGptSearchMovies({
          showGptMovies: moviesdata,
          showGptMoviesname: apiresult,
        })
      );
    }
    runTest();
  };

  async function searchApiCall(movie) {
    const moviesearch = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      Api_options
    );
    const jsonmoviesearch = await moviesearch.json();
    return jsonmoviesearch.results;
  }

  return (
    <div className=" sm:h-1/4 pb-20 lg:mb-32 bg-black relative px-4 sm:px-6   md:px-8">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-40 sm:w-60 md:w-96 h-40 sm:h-60 md:h-96 bg-red-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 sm:w-48 md:w-80 h-32 sm:h-48 md:h-80 bg-red-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Main content */}
      <div className="relative mx-auto pt-16 md:pt-20 z-10 w-full max-w-3xl">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg text-white text-xl sm:text-2xl">
              <i className="la la-star"></i>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-white via-red-100 to-red-200 bg-clip-text text-transparent">
              GPT Search
            </h1>
          </div>
        </div>

        {/* Language selector */}
        <div className="absolute top-4 left-4  pt-5 justify-start">
          <select
            onChange={handlerlanguage}
            value={language.itentifier}
            className="bg-black/60 text-white border border-white/20 rounded-lg px-2 py-1 sm:px-3 sm:py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-red-500  border-red-700"
          >
            {language.map((language) => (
              <option key={language.itentifier} value={language.itentifier}>
                {" "}
                {language.Language}{" "}
              </option>
            ))}
          </select>
        </div>

        {/* Search form */}
        <form className="relative mt-4" onSubmit={(e) => e.preventDefault()}>
          <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-1 shadow-2xl">
            {/* Search input container */}
            <div className="relative bg-black/30 rounded-xl overflow-hidden">
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 p-3 sm:p-4">
                <textarea
                  placeholder={lang[selectedlanguage]?.Placeholdertext}
                  className="flex-1 w-full bg-transparent text-white placeholder:text-white/40 resize-none outline-none text-base sm:text-lg leading-relaxed min-h-[60px] max-h-[200px]"
                  onChange={handlingType}
                  ref={textdata}
                />

                <button
                  type="submit"
                  onClick={handlingsubmitbuttonclick}
                  className="w-full sm:w-12 h-10 sm:h-12 mt-2 sm:mt-0 rounded-xl flex items-center justify-center transition-all duration-200 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 shadow-lg hover:shadow-red-500/25 transform hover:scale-105"
                >
                  <i className="la la-search text-2xl"></i>
                </button>
              </div>
            </div>

            {/* Animated border effect */}
            {isTyping && (
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500/20 via-white/10 to-red-500/20 animate-pulse pointer-events-none"></div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
