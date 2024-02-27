import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpcommingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useUpcommingMovies = () => {
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpcommingMovies(json.results));
    console.log("store updated");
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useUpcommingMovies;
