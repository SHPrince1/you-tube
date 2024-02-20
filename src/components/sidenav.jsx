import React from 'react'
// css
import Style from '../CSS styles/sidenav.module.css'

// react icons
import { IoMdHome } from "react-icons/io";
import { SiShortcut } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { GoChevronRight } from "react-icons/go";


const Sidenav = () => {
  return (
    <>
      <div className={Style.navBox}>
        <div className={Style.firstBox}>

          <div className={Style.iconMenu}>
            <IoMdHome size={24} />
            <p>Home</p>
          </div>
          <div className={Style.iconMenu}>
            <SiShortcut />
            <p>Short</p>
          </div>
          <div className={Style.iconMenu}>
            <MdOutlineSubscriptions />
            <p>Subscription</p>
          </div>

        </div>
        <hr />
        {/* first */}
        <div className={Style.firstBox}>

          <div className={Style.iconMenu}>
            <p>You</p>
            < GoChevronRight ize={24} />
          </div>
          <div className={Style.iconMenu}>
            <SiShortcut />
            <p>Your Channel</p>
          </div>
          <div className={Style.iconMenu}>
            <SiShortcut />
            <p>History</p>
          </div>
          <div className={Style.iconMenu}>
            <SiShortcut />
            <p>Play List</p>
          </div>
          <div className={Style.iconMenu}>
            <MdOutlineSubscriptions />
            <p>Watched later</p>
          </div>
          <div className={Style.iconMenu}>
            <MdOutlineSubscriptions />
            <p>Liked videos</p>
          </div>

        </div>

        {/* subscriptions */}
        <hr />
        <div className={Style.firstBox}>

          <div className={Style.iconMenu}>
            <p>SUBCRIPTIONS</p>
            {/* < GoChevronRight ize={24} /> */}
          </div>
          <div className={Style.iconMenu}>
            <SiShortcut />
            <p>Your Channel</p>
          </div>
          <div className={Style.iconMenu}>
            <SiShortcut />
            <p>History</p>
          </div>
          <div className={Style.iconMenu}>
            <SiShortcut />
            <p>Play List</p>
          </div>
          <div className={Style.iconMenu}>
            <MdOutlineSubscriptions />
            <p>Watched later</p>
          </div>
          <div className={Style.iconMenu}>
            <MdOutlineSubscriptions />
            <p>Liked videos</p>
          </div>

        </div>

        {/* explore */}
        <hr />
   
        <div className={Style.firstBox}>

          <div className={Style.iconMenu}>
            <p>EXPLORE</p>
            {/* < GoChevronRight ize={24} /> */}
          </div>
          <div className={Style.iconMenu}>
            <SiShortcut />
            <p>Trending</p>
          </div>
          <div className={Style.iconMenu}>
            <SiShortcut />
            <p>Music</p>
          </div>
          <div className={Style.iconMenu}>
            <SiShortcut />
            <p>Gaming</p>
          </div>
          <div className={Style.iconMenu}>
            <MdOutlineSubscriptions />
            <p>News</p>
          </div>
          <div className={Style.iconMenu}>
            <MdOutlineSubscriptions />
            <p>Sports</p>
          </div>

        </div>

      </div>
    </>
  )
}

export default Sidenav
