import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { THEME_BACKGROUND } from "../utils/constant";

const GptSearch = () => {
  return (
    <>
      <div  className="fixed -z-10">
       <img  src={THEME_BACKGROUND} alt="background" />
      </div>
      <div>
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </>
  );
};

export default GptSearch;
