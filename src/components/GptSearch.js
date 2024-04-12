import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { THEME_BACKGROUND } from "../utils/constant";

const GptSearch = () => {
  return (
    <>
      <div className="absolute -z-10">
        <img
          className="h-screen object-cover"
          src={THEME_BACKGROUND}
          alt="background"
        />
      </div>
      <div className="pt-[30%] md:p-0">
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </>
  );
};

export default GptSearch;
