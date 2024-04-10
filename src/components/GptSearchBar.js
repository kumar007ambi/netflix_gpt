import { useRef } from "react";
import lang from "../utils/languageConstant";
import { useSelector } from "react-redux";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINIAI_KEY } from "../utils/constant";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const genAI = new GoogleGenerativeAI(GEMINIAI_KEY);

  const handleGptSearchClick = async () => {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    console.log(searchText.current.value);
    // Make an API call to GPT API and get Movie Results
    const questionQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const result = await model.generateContent(questionQuery);
    const response = await result.response;

    //console.log(response.candidates?.[0]?.content?.parts?.[0]?.text);
    const moviesList=response.candidates?.[0]?.content?.parts?.[0]?.text.split(",");
    console.log(moviesList)
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className=" p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
