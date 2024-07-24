import React, { useEffect, useState } from "react";
import axios from "axios";
// import InfiniteScroll from "react-infinite-scroll-component";
// import ReactPaginate from "react-paginate";
import Style from "../../../CSS styles/allvideos.module.css";
import styled from "../../../CSS styles/paginate.module.css";
// import testImg from "../../../images/testImg.mp4";
// import ReactPlayer from "react-player";
// import TestImage from "../../../images/test.jpg";
import VideoCard from "./video-card";
// import TestComp from "./testComp";

const AllVideos = () => {
  const [movieData, setMovieData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const apiKey = "8a75e9def8895d8c1f9e824dc7033473"; 
  const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`;
const increment = () => {
    setPage((prevCount) => (prevCount >= 500 ? 1 : prevCount + 1));
  };

  const decrement = () => {
    setPage((prevCount) => (prevCount <= 1 ? 500 : prevCount - 1));
  };

  useEffect(() => {
    const fetchMovieData = async (page) => {
      try {
        setLoading(true);
        const response = await axios.get(apiUrl);
        setMovieData(response.data.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieData();
  }, [page, apiUrl]);


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
        
      

      

      <div className={styled.paginated}>
        <button onClick={decrement} className={styled.nextBtn}>
          Prev
        </button>

        <button onClick={increment} className={styled.prevBtn}>
          Next
        </button>
      </div>
    </div>
  );
};

export default AllVideos;
