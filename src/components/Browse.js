import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryMainContainer from "./SecondaryMainContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import GptSearch from "./GptSearch";

const Browse = () => {
  //custom hook
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();
  

  return (
    <div>
      <Header />
      <GptSearch/>
      <MainContainer />
      <SecondaryMainContainer />
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
