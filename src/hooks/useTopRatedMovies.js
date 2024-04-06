import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useTopRatedMovies=()=>{
//fetch data from TMDB API and updating the store
  const dispatch = useDispatch();
  const getTopRatedgMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    //console.log(json.results);
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    getTopRatedgMovies();
  }, []);
}

export default useTopRatedMovies;