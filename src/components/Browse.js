import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryMainContainer from "./SecondaryMainContainer";

const Browse = () => {
  //custom hook
  useNowPlayingMovies();

  return (
    <div>
      <Header />
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
