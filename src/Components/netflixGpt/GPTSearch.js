import { useState } from "react";
import { language } from "../../Utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addLanguageinfo } from "../../Utils/constantSlice";
import { lang } from "../../Utils/languageConstant";
export default function GPTSearch() {
  const dispatch = useDispatch();
  const [isTyping, setIsTyping] = useState("");

  const selectedlanguage = useSelector(
    (store) => store?.constantSlice?.languageinfo
  );

  const handlingType = (e) => {
    setIsTyping(e.target.value);
  };
  const handlerlanguage = (e) => {
    dispatch(addLanguageinfo(e.target.value));
  };
  return (
    <div className="min-h-screen bg-black relative px-4 sm:px-6 md:px-8">
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
        <form className="relative mt-4">
          <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-1 shadow-2xl">
            {/* Search input container */}
            <div className="relative bg-black/30 rounded-xl overflow-hidden">
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 p-3 sm:p-4">
                <textarea
                  placeholder={lang[selectedlanguage]?.Placeholdertext}
                  className="flex-1 w-full bg-transparent text-white placeholder:text-white/40 resize-none outline-none text-base sm:text-lg leading-relaxed min-h-[60px] max-h-[200px]"
                  onChange={handlingType}
                />
                <button
                  type="submit"
                  className="w-full sm:w-12 h-10 sm:h-12 mt-2 sm:mt-0 rounded-xl flex items-center justify-center transition-all duration-200 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 shadow-lg hover:shadow-red-500/25 transform hover:scale-105"
                >
                  <i className="la la-search text-xl sm:text-2xl text-black"></i>
                </button>
              </div>
            </div>

            {/* Animated border effect */}
            {isTyping && (
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500/20 via-white/10 to-red-500/20 animate-pulse"></div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
