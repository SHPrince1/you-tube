import React from "react";
import Style from "../CSS styles/detailed-page-card.module.css";
// import Test from "../images/test.jpeg";

const DetailedPageCard = (props) => {
  return (
    
      <div className={Style.container}>
    
        <div className={Style.textDetailedBox}>
          <div>
            <h3>{props.title}</h3>
          </div>
          <div>
            <h4>Vote Count: {props.vote_count}</h4>
          </div>

          <div className={Style.overView}>
            <p>
             {props.overview}
            </p>
          </div>

          <h3>
             {props.release_date}
            </h3>
        </div>

        <div className={Style.imageBox}>
          <img  src={props.poster_path}
               alt="" />
        </div>
       
        </div>
       
    
    
  );
};

export default DetailedPageCard;
