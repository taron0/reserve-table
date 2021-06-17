import React from "react";
import background from "../../../assets/cover-image.jpg";
import { Link } from "react-router-dom";
import Button from "../../shared/button/button";
import { ADMIN_RESTAURANTS, ADMIN_ORDERS } from "../../../constant/urls";
import "./adminPage.css";

const AdminPage = () => {
  return (
    <div className="wrapper" style={{ backgroundImage: `url(${background})` }}>
      <div className="hero-title-holder">
        <div className="overlay">
          <div className="hero-title">
            <div className="text-content">
              <h3>Discover and book tables</h3>
              <span className="border-span"></span>
              <h4>IN YEREVAN RESTAURANTS</h4>
              <span className="border-span"></span>
            </div>
            <div className="hero-decor b-dec">
              <div className="half-circle"></div>
            </div>
            <div className="admin-book">
              <div className="btn-book">
                <Link to={ADMIN_RESTAURANTS}>
                  <Button context="Book Now" />{" "}
                </Link>
              </div>
              <div className="btn-book">
                <Link to={ADMIN_ORDERS}>
                  <Button context="Orders" />{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
