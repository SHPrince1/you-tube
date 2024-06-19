import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Style from "../../../CSS styles/allvideos.module.css";
import testImg from "../../../images/testImg.mp4";
import ReactPlayer from "react-player";
import TestImage from "../../../images/test.jpg";
import VideoCard from "./video-card";

const AllVideos = () => {
  const [movieData, setMovieData] = useState([]);

  const options = {
    method: "GET",
    url:'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YTc1ZTlkZWY4ODk1ZDhjMWY5ZTgyNGRjNzAzMzQ3MyIsInN1YiI6IjY2NDg3N2E0MGQ2Y2Q2ZjUwZjJmNmUyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QpdYYqmG9cbFoPEZrGPC01CcUWHhx7yqTk11INHHBlI'
  }
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setMovieData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  });


  let movieDataKeys=Object.values(movieData)

  let newData = movieDataKeys
   


  console.log('ok', movieDataKeys)
  return(
    <div className={Style.movieDataBox}>
     

       {movieDataKeys.map((item, index) => (
                <VideoCard
                  key={index}
                  img={item?.flags?.png}
                  // title={item?.name?.common}
                  video={item.backdrop_path?.jpg}
                  // testImage={"https://fakeimg.pl/500x500/ff6600"}
                  videoTitle={item.original_title}
                  pageTitle={'Object.overview'}
                  
                  
                />
              ))}
    </div>
  )
};

export default AllVideos;



// genre:    array
// rating:    number
// director:    string
// actors:    array
// plot:    string
// poster:    string
// trailer:    string
// runtime:    number
// awards:    string
// country:    string
// language:    string
// boxOffice:    string
// production:    string
// website:    string