import { useRef } from "react";
import lang from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import { GoogleGenAI } from "@google/genai";
import { API_OPTIONS, GEMINIAI_KEY } from "../utils/constant";
import { addGptSuggestMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  // search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    if (!GEMINIAI_KEY) {
       // Handle missing API key gracefully
       console.error("Gemini API Key is missing");
       alert("Gemini API Key is missing. Please check your Vercel environment variables.");
       return;
    }

    const ai = new GoogleGenAI({ apiKey: GEMINIAI_KEY });

    console.log(searchText.current.value);
    // Make an API call to GPT API and get Movie Results
    const questionQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: questionQuery,
    });

    // if (!response.choices) {
    //  to do error jandling
    // }

    //console.log(response.candidates?.[0]?.content?.parts?.[0]?.text);
    const moviesList = response.text.split(",");
    //console.log(moviesList)

    // ["Andaz Apna Apna", "Hera Pheri", "Chupke Chupke", "Jaane Bhi Do Yaaro", "Padosan"]

    // For each movie I will search TMDB API

    const promiseArray = moviesList.map((movie) => searchMovieTMDB(movie));
    // [Promise, Promise, Promise, Promise, Promise]

    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);
    dispatch(addGptSuggestMovieResult({ movieNames: moviesList, movieResults: tmdbResults }));
  };

  return (
    <div className="pt-[40%] md:pt-[10%] flex justify-center">
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
