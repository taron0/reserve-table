import React from "react";

const RestaurantsAboutText = ({ restaurants }) => {
  return (
    <div className="restaurants-about-content">
      <div>
        <img
          src={restaurants.urlImg}
          className="img-style"
          alt="img-about-text"
        />
      </div>
      <div className="about-context-desc">
        <div>
          <p className="restaurant-name-s">{restaurants.name}</p>
        </div>
        <div>
          <p className="restaurant-open">Open 12:00-02:00</p>
        </div>
        <div>
          <p>{restaurants.description}</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantsAboutText;
