import React,{useState } from "react";

import Style from "../../CSS styles/navbar.module.css";

// react icons
import { IoMicCircleOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoNotificationsCircleSharp } from "react-icons/io5";
import { FaVideo } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaChromecast } from "react-icons/fa";
import ExpandableSearchBar from "../expandable-searchbar";
const Navbar = () => {

 

  return (
    <>
      <div className={Style.navBox}>
        <div className={Style.leftBox}>
          <div className={Style.menuBox}>
            <GiHamburgerMenu size={20} />
          </div>
          <div>
            <a href="www.shprince.netlify.app">
              <img
                src="https://static.india.com/wp-content/uploads/2022/12/youtube-5.jpg"
                alt=""
              />
            </a>
          </div>
        </div>

        <div className={Style.midBox}>
        <div>
  <input />
</div>
          <div className={Style.circleNotification}>
            <IoMicCircleOutline size={38} />
          </div>
        </div>

        <div className={Style.rightBox}>
          <div className={Style.castIcon}>
            <FaChromecast size={26} />
          </div>
          <div className={Style.vid}> 
            <FaVideo size={26} />
          </div>
          <div>
            <IoNotificationsCircleSharp size={26} />
          </div>
          <div className={Style.userIcon}>
            <FaRegCircleUser size={26} />
          </div>

          {/* <div className={Style.mobileSearchBar}>
            <input />
          </div> */}



          
        </div>
      </div>
    </>
  );
};

export default Navbar;
