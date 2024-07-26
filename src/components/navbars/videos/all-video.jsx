import React, { useEffect, useState } from "react";
import axios from "axios";
import Style from "../../../CSS styles/allvideos.module.css";
import VideoCard from "./video-card";
const AllVideos = () => {
  const [movieData, setMovieData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiKey = "8a75e9def8895d8c1f9e824dc7033473"; 
  const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`;
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
          <div className={Style.movieDataBox}>
            {movieData.map((item) => {
              return (
                <VideoCard
                  // key={index}
                  poster_path={`https://image.tmdb.org/t/p/w500${item?.poster_path}`}
                  // poster_path={item?.poster_path.jpg}
                  title={item.title}
                  video={item.video}
                  backdrop_path={`https://image.tmdb.org/t/p/w500${item?.backdrop_path}`}
                  release_date={item.release_date}
                  overview={item.overview}
                  // pageTitle={item.original_title}
                />
              );
            })}
            <div className={Style.btnBox}>
              {loading && <p className="loading">Loading...</p>}
            </div>
          </div>
    </div>
  );
};
export default AllVideos;
