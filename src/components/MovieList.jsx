import React from "react";
import MovieCard from "./MovieCard";
import { useState,useRef } from "react";

const MovieList = ({ title, movies }) => {
  //console.log(movies);
  const [scrollPos, setScrollPos] = useState(0);
    const scrollContainerRef = useRef(null);

    const scrollLeft = () => {
      console.log("scrollLeft");
        const newPos = Math.max(scrollPos - 100, 0); // Decrease scroll position by 100 pixels or to the start
        setScrollPos(newPos);
        scrollContainerRef.current.scrollTo({ left: newPos, behavior: "smooth" });
    };

    const scrollRight = () => {
      console.log("scrollRight");
        const containerWidth = scrollContainerRef.current.scrollWidth;
        const newPos = Math.min(scrollPos + 100, containerWidth); // Increase scroll position by 100 pixels or to the end
        setScrollPos(newPos);
        scrollContainerRef.current.scrollTo({ left: newPos, behavior: "smooth" });
    };
  return (
    <div className="px-6 bg-black ">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex items-center justify-between">
      <button onClick={scrollLeft}>◀</button>
      <div className="flex overflow-scroll scrollbar-hide max-w-[1200px]"  ref={scrollContainerRef}>
        <div className="flex"  >
          {movies?.map((movie) => (
            <MovieCard key={movie?.id} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
      <button onClick={scrollRight}>▶</button>
      </div>
    </div>
  );
};

export default MovieList;
