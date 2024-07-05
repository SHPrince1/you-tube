import React, { useEffect, useRef, useState } from "react";

import Style from "../../../CSS styles/allvideos.module.css";
import Style2 from "../../../CSS styles/video-card.module.css";
import testImg from "../../../images/testImg.mp4";
import ReactPlayer from "react-player";
import TestImage from "../../../images/test.jpg";
// import { useEffect, useRef } from "react";




const VideoCard = (props) => {
 
  // const cloudinaryRef = useRef();
  // const videoRef = useRef();

  // useEffect(() => {
  //   if ( cloudinaryRef.current ) return;

  //   cloudinaryRef.current = window.cloudinary;
  //   cloudinaryRef.current.videoPlayer(videoRef.current, {
  //     cloud_name: 'colbycloud-examples'
  //   })
  // }, []);

  // console.log(`pageTitle${props.pageTitle}`)
  

  return (
    <>
      <div className={Style2.AllVideosContainer}>
        <div className={Style.movieBoxDiv}>
          <div className={Style.displayImageBox}>
            <img src={props.poster_path} alt='...' width='100%'  height='250px'/>
            {/* <img src={`'test'${props.poster_path}`} alt={props.name} /> */}
            {/* <ReactPlayer
              url={props.video}
              controls={true}
             
              height={250}
            /> */}
          </div>
          <div className={Style.pageTitleAndImage}>
            {/* <div className={Style.channelImage}>
              <img src={props.testImage} />
            </div> */}
            <div className={Style.Videotitle}>
              <p>{props.title}</p>
              {/* <p>Test</p> */}
            </div>
          </div>

          <div className={Style.pageTitle}>
            <a href="#">{props.release_date}</a>
            {/* <a>PageTitle</a> */}
          </div>

          {/* <p>{props.overview}</p> */}
          
        </div>

        
        
      </div>
      
    </>
  );


//   return (
//     <div>
//     <h1>React Function Component</h1>
//     </div>
//   )
};

export default VideoCard;
