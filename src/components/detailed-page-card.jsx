import React from "react";
import Style from "../CSS styles/detailed-page-card.module.css";
import Test from "../images/test.jpeg";

const DetailedPageCard = () => {
  return (
    
      <div className={Style.container}>
    
        <div className={Style.textDetailedBox}>
          <div>
            <h3>The Witcher</h3>
          </div>
          <div>
            <p>Rate</p>
          </div>

          <div className={Style.overView}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
              quaerat ab libero facere. Laboriosam dolores ullam, voluptatibus
              veritatis quis molestiae!

              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis rem impedit magni, architecto eaque iusto autem tenetur consequatur earum repellat aspernatur dicta ipsum recusandae consequuntur. Quidem repellendus velit totam vero, necessitatibus fuga doloremque in corrupti voluptatibus non sit est temporibus, laudantium perferendis repudiandae sapiente asperiores culpa ad fugiat voluptatem ipsum. Quod animi velit autem labore vel fugiat expedita facilis asperiores repudiandae tenetur, cumque, architecto iste quo a facere aliquam? Dolor quasi, nisi esse soluta deserunt ullam hic quo illum. Cum accusamus labore at sint quia reprehenderit deserunt consequatur ab ullam excepturi. Impedit laborum ab id, molestiae sunt blanditiis quae optio?
            </p>
          </div>
        </div>

        <div className={Style.imageBox}>
          <img src={Test} alt="" />
        </div>
        </div>
       
    
    
  );
};

export default DetailedPageCard;
