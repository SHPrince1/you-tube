import React, { useEffect, useState } from "react";
import axios from "axios";
import Style from "../../../CSS styles/allvideos.module.css";
// import testImg from "../../../images/testImg.mp4";
// import ReactPlayer from "react-player";
// import TestImage from "../../../images/test.jpg";
import VideoCard from "./video-card";
// import TestComp from "./testComp";

const AllVideos = () => {
  const [movieData, setMovieData] = useState([]);
  const [page, setPage] = useState(19);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiKey = '8a75e9def8895d8c1f9e824dc7033473';  // Replace with your TMDB API key
  const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`;

  // const fetch = require('node-fetch');
  const options = {
    method: "get",
    url: apiUrl,

    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YTc1ZTlkZWY4ODk1ZDhjMWY5ZTgyNGRjNzAzMzQ3MyIsInN1YiI6IjY2NDg3N2E0MGQ2Y2Q2ZjUwZjJmNmUyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QpdYYqmG9cbFoPEZrGPC01CcUWHhx7yqTk11INHHBlI",
    },
  };

  useEffect(() => {
    const fetchMovieData = async (page) => {
      try {
        setLoading(true);
        const response = await axios.get(apiUrl);
        setMovieData(prevMovies => [...prevMovies, ...response.data.results]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieData(options);
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
        setPage(prevPage => prevPage +1);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (error) return <p>Error loading movies: {error.message}</p>;



  let movieDataKeys = Object.values(movieData);

  // let newData = movieDataKeys;

  console.log(movieDataKeys);
  // console.log(`results ${JSON.stringify(movieData)}`)
  return (
    <div className={Style.movieDataBox}>
      {movieDataKeys.map((item) => {
        //  console.log(item?.poster_path.jpg);
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
  );
};

export default AllVideos;
