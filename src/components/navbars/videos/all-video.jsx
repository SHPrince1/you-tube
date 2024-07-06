import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Style from "../../../CSS styles/allvideos.module.css";
import testImg from "../../../images/testImg.mp4";
import ReactPlayer from "react-player";
import TestImage from "../../../images/test.jpg";
import VideoCard from "./video-card";
// import TestComp from "./testComp";

const AllVideos = () => {
  const [movieData, setMovieData] = useState([]);

  const options = {
    method: "get",
    url: "https://api.themoviedb.org/3/discover/movie?api_key=8a75e9def8895d8c1f9e824dc7033473",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YTc1ZTlkZWY4ODk1ZDhjMWY5ZTgyNGRjNzAzMzQ3MyIsInN1YiI6IjY2NDg3N2E0MGQ2Y2Q2ZjUwZjJmNmUyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QpdYYqmG9cbFoPEZrGPC01CcUWHhx7yqTk11INHHBlI",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        // console.log(`original reponse${JSON.stringify(response.data.results)}`)
        setMovieData(response.data.results);

      })
      .catch(function (error) {
        console.error(error);
      });
  });


  let movieDataKeys = Object.values(movieData);

  let newData = movieDataKeys;

  // console.log( movieDataKeys);
  // console.log(`results ${JSON.stringify(movieData)}`)
  return (
   
    <div className={Style.movieDataBox}>
      {movieData.map((item, index) => {
    //  console.log(item?.poster_path.jpg);
        return(
          <VideoCard
            key={index}
            poster_path={`https://image.tmdb.org/t/p/w500${item?.poster_path}`} 
            // poster_path={item?.poster_path.jpg}
            title={item.title}
            video={item.true}
            backdrop_path={`https://image.tmdb.org/t/p/w500${item?.backdrop_path}`}
            release_date={item.release_date}
            overview={item.overview}
            // pageTitle={item.original_title}
          />
        )
       
        // console.log(`item${item.title}`);
        
        

        
      })}
    </div>
  );
};


export default AllVideos;