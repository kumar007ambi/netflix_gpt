import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryMainContainer = () => {
  const movies = useSelector((store) => store.movies);
  //console.log(movies);
  return (
    <div>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Popular"} movies={movies.popularMovies} />
      <MovieList title={"Upcoming Movies"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
    </div>
  );
};

export default SecondaryMainContainer;
