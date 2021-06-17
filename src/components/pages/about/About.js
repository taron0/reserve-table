import React from "react";
import img from "../../../assets/cover-image.jpg";
import Header from "../../header/header";
import aboutImg from "../../../assets/El-Sky-Bar.jpg";
import useTranslation from "../../../hooks/useTranslation";
import "./about.css";

const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="wrapper-about" style={{ backgroundImage: `url(${img})` }}>
        <Header />
        <div className="about-title">
          <h1 className="h3">{t("about")}</h1>
          <p className="h4">
            {t("trust_us_the_organization_of_your_leisure")} .
          </p>
        </div>
      </div>
      <div className="about-context">
        <div className="about-text">
          <h2>{t("about")}</h2>
          <p>{t("about_us_text")}</p>
        </div>
        <div className="about-img">
          <img src={`${aboutImg}`} alt="img-about" />
        </div>
      </div>
    </>
  );
};
export default About;
