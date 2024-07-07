import React from "react";
import Style from "../../CSS styles/top.module.css";

const TopNav = () => {
  return (
    <>
      <div className={Style.topNavContainer}>

        <div className={Style.emptyDiv}>  

        </div>
        <div className={Style.btnBox}>
          <div className={Style.btns}>
            {" "}
            <a href="/"> All</a>
          </div>
          <div className={Style.btns}>
            {" "}
            <a href="www.new">Music </a>
          </div>
          <div className={Style.btns}>
            {" "}
            <a href='www.shprince.netlify.app'>Live </a>{" "}
          </div>
          <div className={Style.btns}>
            {" "}
            <a href='www.shprince.netlify.app'>Nollywood</a>
          </div>
          <div className={Style.btns}> News</div>
          <div className={Style.btns}>Gaming</div>
          <div className={Style.btns}>Contemporary Worship Music</div>
          <div className={Style.btns}>Sketch comedy</div>
          <div className={Style.btns}>News</div>
          <div className={Style.btns}>Gaming</div>
          <div className={Style.btns}>Contemporary Worship Music</div>
          <div className={Style.btns}>Sketch comedy</div>
          <div className={Style.btns}>News</div>
          <div className={Style.btns}>Gaming</div>
          <div className={Style.btns}>Contemporary Worship Music</div>
          <div className={Style.btns}>Sketch comedy</div>
          <div className={Style.btns}>News</div>
          <div className={Style.btns}>Gaming</div>
          <div className={Style.btns}>Contemporary Worship Music</div>
          <div className={Style.btns}>Sketch comedy</div>
        </div>
      </div>
    </>
  );
};

export default TopNav;
