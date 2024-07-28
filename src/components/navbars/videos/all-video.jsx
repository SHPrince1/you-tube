import React, { useContext, useEffect, useState, useCallback} from "react";
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
  const [error, setError] = useState();
  const apiKey = "8a75e9def8895d8c1f9e824dc7033473";
  const baseUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`;

  const options = {
    keys: ['title'],
    includeScore: true,
    threshold: 0.5,
  };

  const fuse = new Fuse(movieData, options);
  const filteredMovieData = searchQuery
    ? fuse.search(searchQuery).map(result => result.item)
    : movieData;

  const fetchMovieData = useCallback(async (page) => {
    try {
      setLoading(true);
      const response = await axios.get(`${baseUrl}&page=${page}`);
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
  }, [baseUrl]);

  const fetchAllPages = useCallback(async () => {
    setMovieData([]);
    let currentPage = 1;
    let totalPages = 1;

    try {
      setLoading(true);
      while (currentPage <= totalPages) {
        const response = await axios.get(`${baseUrl}&page=${currentPage}`);
        const newMovies = response.data.results;
        totalPages = response.data.total_pages;

        setMovieData((prevData) => {
          const existingMovieIds = new Set(prevData.map(movie => movie.id));
          const filteredNewMovies = newMovies.filter(movie => !existingMovieIds.has(movie.id));
          return [...prevData, ...filteredNewMovies];
        });

        currentPage += 1;
        if (currentPage > 20) break; // Limit to 20 pages to avoid excessive API calls
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [baseUrl]);

  useEffect(() => {
    if (searchQuery) {
      fetchAllPages();
    } else {
      fetchMovieData(page);
    }
  }, [searchQuery, fetchAllPages, fetchMovieData, page]);

  useEffect(() => {
    if (!searchQuery && !loading) {
      fetchMovieData(page);
    }
  }, [page, fetchMovieData, searchQuery, loading]);

  useEffect(() => {
    const handleScroll = () => {
      const bottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight;

      if (bottom && !loading && !searchQuery) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loading, searchQuery]);

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
      
      </div>
    </div>
  );
};

export default AllVideos;