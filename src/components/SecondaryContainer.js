import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  console.log("All slice ", movies);
  return (
    <div className="bg-black ">
      <div className="-mt-[320px] pl-12 relative z-20 ml-4">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies.upcommingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
