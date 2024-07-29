import React, {  useEffect, useContext, useState,} from "react";
import axios from "axios";
import Fuse from 'fuse.js';
// import LoadingSpin from "react-loading-spin";
import Style from "../../../CSS styles/allvideos.module.css";
import VideoCard from "./video-card";
import { SearchContext } from '../../../search-context';

const AllVideos = () => {
  const { searchQuery } = useContext(SearchContext);
  const [movieData, setMovieData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = "8a75e9def8895d8c1f9e824dc7033473"; 
  const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`;
// const increment = () => {
//     setPage((prevCount) => (prevCount >= 500 ? 1 : prevCount + 1));
//   };

//   const decrement = () => {
//     setPage((prevCount) => (prevCount <= 1 ? 500 : prevCount - 1));
//   };


// Configure Fuse.js
const options = {
  keys: ['title'],
  includeScore: true,
  threshold: 0.3, // threshold for more or less fuzzy matching
};

const fuse = new Fuse(movieData, options);

const filteredMovieData = searchQuery
  ? fuse.search(searchQuery).map(result => result.item)
  : movieData;

  useEffect(() => {
    const fetchMovieData = async (page) => {
      try {
        setLoading(false);
        const response = await axios.get(apiUrl);
        const newMovies = response.data.results;

        
        setMovieData((prevData) => {
          const existingMovieIds = new Set(prevData.map(movie => movie.id));
          const filteredNewMovies = newMovies.filter(movie => !existingMovieIds.has(movie.id));
          return [...prevData, ...filteredNewMovies];
        });
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieData(error);
  }, );


  useEffect(() => {
    const handleScroll = () => {
      const bottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight;

      if (bottom && !loading) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loading]);
  return (
    <div className={Style.Container}>
      
      {error && <div className={Style.error}>Error: {error.message}</div>}
      <div className={Style.movieDataBox}>
        {filteredMovieData.map((item) => (
          <VideoCard
            key={item.id}
            poster_path={`https://image.tmdb.org/t/p/w500${item?.poster_path}`}
            title={item.title}
            video={item.video}
            backdrop_path={`https://image.tmdb.org/t/p/w500${item?.backdrop_path}`}
            release_date={item.release_date}
          />
        ))}

        <div></div>
      
      </div>
    </div>
  );
};

export default AllVideos;