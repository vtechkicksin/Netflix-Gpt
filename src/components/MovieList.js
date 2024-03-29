import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="p-6">
      <h1 className="text-3xl py-3 text-white">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-hidden">
        <div className="flex">
          {movies?.map((e) => (
            <MovieCard key={e.id} posterPath={e.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
