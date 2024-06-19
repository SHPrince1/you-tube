import React, { useEffect, useRef } from "react";
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

  return (
    <>
      <div className={Style2.AllVideosContainer}>
        <div className={Style.movieBoxDiv}>
          <div className={Style.displayImageBox}>
            <img src={props.video} alt="" width='350px'  height='250px'/>
           
            <ReactPlayer
              url={props.video}
              controls={true}
             
              height={250}
            />
          </div>
          <div className={Style.pageTitleAndImage}>
            <div className={Style.channelImage}>
              {/* <img src={props.testImage} /> */}
            </div>
            <div className={Style.Videotitle}>
              <p>{props.videoTitle}</p>
            </div>
          </div>

          <div className={Style.pageTitle}>
            <a href="#">{props.pageTitle}</a>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default VideoCard;
