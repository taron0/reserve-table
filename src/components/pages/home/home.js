import React from "react";
import Header from "../../header/header";
import background from "../../../assets/cover-image.jpg";
import useTranslation from "../../../hooks/useTranslation";
import Button from "../../shared/button/button";
import { RESTAURANTS } from "../../../constant/urls";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <div
        className="wrapper"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="hero-title-holder">
          <Header />
          <div className="overlay">
            <div className="hero-title">
              <div className="text-content">
                <h3>{t("discover")}</h3>
                <span className="border-span"></span>
                <h4>{t("in_yerevan_restaurants")}</h4>
                <span className="border-span"></span>
              </div>
              <div className="hero-decor b-dec">
                <div className="half-circle"></div>
              </div>
              <div className="btn-book">
                <Link to={RESTAURANTS}>
                  <Button context="Book Now" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
