import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryMainContainer from "./SecondaryMainContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSeacrh = useSelector((store) => store.gpt.showGptSeacrh);
  //custom hook
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();

  return (
    <div>
      <Header />
      {showGptSeacrh ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryMainContainer />
        </>
      )}

      {/* {
        // Main Container
        //  - VideoBackground
        //  - VideoTitle
        // Secondary Container
        //  - MovieList * n,
        //  - Cards * n 
      } */}
    </div>
  );
};

export default Browse;
