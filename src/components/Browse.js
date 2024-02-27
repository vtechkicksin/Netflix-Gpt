import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hook/useNowPlayingMovies";
import usePopularMovies from "../hook/usePopularMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useTopRatedMovies from "../hook/useTopRatedMovies";
import useUpcommingMovies from "../hook/useUpcommingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  // Fetch data from TMDB API and update the redux store slice
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcommingMovies();
  const gptToggle = useSelector((store) => store.gpt.showGptSearch);
  console.log("gptToggle");
  return (
    <div>
      <Header />
      {gptToggle === true ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
