import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addTrailer } from '../utils/movieSlice';

const useMoviesTrailer = (movieId) => {
    const dispatch = useDispatch();
    const getVideoTrailer = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
        API_OPTIONS
      );
      const json = await data.json();
      const filterData = json.results.filter((e) => e.type === "Trailer");
      const trailer = filterData.length ? filterData[0] : json.results[0];
      console.log(">>>>>>>>>>>>>>>>>>>", trailer);
      dispatch(addTrailer(trailer));
    };
    useEffect(() => {
      getVideoTrailer();
    }, []);
  return (
    <div>useMoviesTrailer</div>
  )
}

export default useMoviesTrailer