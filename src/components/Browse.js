import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hook/useNowPlayingMovies";
import MainContainer from "./MainContainer";

const Browse = () => {
  // Fetch data from TMDB API and update the redux store slice
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
    </div>
  );
};

export default Browse;
