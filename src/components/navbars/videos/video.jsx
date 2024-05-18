import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Style from "../../../CSS styles/allvideos.module.css";
import testImg from "../../../images/testImg.mp4";
import ReactPlayer from "react-player";
import TestImage from "../../../images/test.jpg";
import VideoCard from "./video-card";

const Video = () => {
  const [movieData, setMovieData] = useState([]);

  // useEffect(() => {
  //   getTrendingMovieData("movie");
  // }, []);

  useEffect(() => {
    const getTrendingMovieData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/11?api_key=8a75e9def8895d8c1f9e824dc7033473`
        );
        setMovieData(response.data.items);
      } catch (error) {
        console.error("Error fetching video data", error);
      }
    };

    getTrendingMovieData();
  }, []);

  return (
    <div className={Style.AllVideosContainer}>
      {movieData.map((VideoCard, index) => {
        return (
          <VideoCard
            key={index}
            //  title={data.title}
            // video={data.video}
            videoTitle={movieData.videoTitle}
            pageTitle={movieData.pageTitle}
            url={movieData.video}
          />
        );
      })}
    </div>
  );
};

export default Video;
