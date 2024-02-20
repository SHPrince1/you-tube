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

            <div className={Style.iconMenuContent}>

              <IoMdHome size={24} />
              <p>Home</p>
            </div>
          </div>
          <div className={Style.iconMenu}>

            <div className={Style.iconMenuContent}>

              <SiShortcut />
              <p>Short</p>
            </div>
          </div>
          <div className={Style.iconMenu}>
            <div className={Style.iconMenuContent}>
              <MdOutlineSubscriptions />
              <p>Subscription</p>
            </div>
          </div>

        </div>
        <hr />
        {/* first */}
        <div className={Style.firstBox}>

          <div className={Style.iconMenu}>

            <div className={Style.iconMenuContent}>

              <div className={Style.iconMenuContent}>
                <p>You</p>
                < GoChevronRight ize={24} />
              </div>
            </div>
          </div>
          <div className={Style.iconMenu}>
            <div className={Style.iconMenuContent}>
              <SiShortcut />
              <p>Your Channel</p>
            </div>
          </div>
          <div className={Style.iconMenu}>
            <div className={Style.iconMenuContent}>
              <SiShortcut />
              <p>History</p>
            </div>
          </div>
          <div className={Style.iconMenu}>
            <div className={Style.iconMenuContent}>
              <SiShortcut />
              <p>Play List</p>
            </div>
          </div>
          <div className={Style.iconMenu}>
            <div className={Style.iconMenuContent}>
              <MdOutlineSubscriptions />
              <p>Watched later</p>
            </div>
          </div>
          <div className={Style.iconMenu}>
            <div className={Style.iconMenuContent}>
              <MdOutlineSubscriptions />
              <p>Liked videos</p>
            </div>
          </div>

        </div>

        {/* subscriptions */}
        <hr />
        <div className={Style.firstBox}>

          <div className={Style.iconMenu}>
            <div className={Style.iconMenuContent}>
              <p>SUBCRIPTIONS</p>
              {/* < GoChevronRight ize={24} /> */}
            </div>
          </div>
          <div className={Style.iconMenu}>
            <div className={Style.iconMenuContent}>
              <SiShortcut />
              <p>Your Channel</p>
            </div>
          </div>
          <div className={Style.iconMenu}>
            <div className={Style.iconMenuContent}>
              <SiShortcut />
              <p>History</p>
            </div>
          </div>
          <div className={Style.iconMenu}>
            <div className={Style.iconMenuContent}>
              <SiShortcut />
              <p>Play List</p>
            </div>
          </div>
          <div className={Style.iconMenu}>
            <div className={Style.iconMenuContent}>
              <MdOutlineSubscriptions />
              <p>Watched later</p>
            </div>
          </div>
          <div className={Style.iconMenu}>
            <div className={Style.iconMenuContent}>
              <MdOutlineSubscriptions />
              <p>Liked videos</p>
            </div>
          </div>

        </div>

        {/* explore */}
        <hr />

        <div className={Style.firstBox}>

          <div className={Style.iconMenu}>
            <div className={Style.iconMenuContent}>
              <p>EXPLORE</p>
              {/* < GoChevronRight ize={24} /> */}
            </div>
          </div>
          <div className={Style.iconMenu}>
            <div className={Style.iconMenuContent}>
              <SiShortcut />
              <p>Trending</p>
            </div>
          </div>
          <div className={Style.iconMenu}>
            <div className={Style.iconMenuContent}>
              <SiShortcut />
              <p>Music</p>
            </div>
          </div>
          <div className={Style.iconMenu}>
            <div className={Style.iconMenuContent}>
              <SiShortcut />
              <p>Gaming</p>
            </div>
          </div>
          <div className={Style.iconMenu}>
            <div className={Style.iconMenuContent}>
              <MdOutlineSubscriptions />
              <p>News</p>
            </div>
          </div>
          <div className={Style.iconMenu}>
            <div className={Style.iconMenuContent}>
              <MdOutlineSubscriptions />
              <p>Sports</p>
            </div>
          </div>

        </div>

        {/* MORE FROM YOUTUBE */}
        <hr />

        <div className={Style.firstBox}>

          <div className={Style.iconMenu}>
            <div className={Style.iconMenuContent}>
              <p>MORE FROM YOUTUBE</p>
              {/* < GoChevronRight ize={24} /> */}
            </div>
          </div>
          <div className={Style.iconMenu}>
            <div className={Style.iconMenuContent}>
              <SiShortcut />
              <p>Trending</p>
            </div>

          </div>
          <div className={Style.iconMenu}>
            <div className={Style.iconMenuContent}>
              <SiShortcut />
              <p>Music</p>
            </div>
          </div>
          <div className={Style.iconMenu}>
            <div className={Style.iconMenuContent}>
              <SiShortcut />
              <p>Gaming</p>
            </div>
          </div>
          <div className={Style.iconMenu}>
            <div className={Style.iconMenuContent}>
              <MdOutlineSubscriptions />
              <p>News</p>
            </div>
          </div>
          <div className={Style.iconMenu}>
            <div className={Style.iconMenuContent}>
              <MdOutlineSubscriptions />
              <p>Sports</p>
            </div>
          </div>

        </div>

        {/* SETTINGS */}
        <hr />

        <div className={Style.firstBox}>

          <div className={Style.iconMenu}>
            <div className={Style.iconMenuContent}>
              <p>SETTINGS</p>
              {/* < GoChevronRight ize={24} /> */}
            </div>
          </div>
          <div className={Style.iconMenu}>
            <div className={Style.iconMenuContent}>
              <SiShortcut />
              <p>Report History</p>
            </div>
          </div>
          <div className={Style.iconMenu}>
            <div className={Style.iconMenuContent}>
              <SiShortcut />
              <p>Help</p>
            </div>
          </div>
          <div className={Style.iconMenu}>
            <div className={Style.iconMenuContent}>
              <SiShortcut />
              <p>Send feedback</p>
            </div>
          </div>
          
          

        </div>

      </div>
    </>
  )
}

export default Sidenav
