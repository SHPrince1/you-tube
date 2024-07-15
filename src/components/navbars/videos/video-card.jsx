import React from "react";

import Style from "../../../CSS styles/allvideos.module.css";
import Style2 from "../../../CSS styles/video-card.module.css";
// import testImg from "../../../images/testImg.mp4";
// import ReactPlayer from "react-player";
// import TestImage from "../../../images/test.jpg";
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
            <img
              src={props.poster_path}
              alt=""
              
              height="auto"
              className={Style.movieImg}
            />

            <div className={Style.OverViewDiv}>
              <p className={Style.OverViewDivParag}>
                <h5>{props.title} Overview: </h5> {props.overview}{" "}
              </p>
            </div>

            {/* <ReactPlayer
              video={props.video}
              controls={true}
             
              height={250}
            /> */}
          </div>
          <div className={Style.pageTitleAndImage}>
            <div className={Style.channelImage}>
              <img src={props.backdrop_path} alt=""/>
              {/* <p>{props.rate}</p> */}
            </div>
            <div className={Style.Videotitle}>
              <p className={Style.title}>{props.title}</p>
              <p className={Style.releasedDate}>{props.release_date}</p>
            </div>
          </div>

          <div className={Style.pageTitle}>
            {/* <a href="#">{props.release_date}</a> */}
            {/* <a>PageTitle</a> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoCard;
