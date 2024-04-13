import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { THEME_BACKGROUND } from "../utils/constant";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10 ">
        <img
          className="min-h-screen object-cover"
          src={THEME_BACKGROUND}
          alt="background"
        />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </>
  );
};

export default GptSearch;
