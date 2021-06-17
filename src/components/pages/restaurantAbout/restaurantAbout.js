import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Firebase from "../../../service/firebase/firebase";
import Dropdown from "../../shared/dropdown/dropdown";
import Button from "../../shared/button/button";
import { DATE, PART_SIZE, TIME } from "../../../constant/dataDropdown";
import imgDiner from "../../../assets/cutlery.png";
import RestaurantsAboutText from "../../restaurantsAbouthText/restaurantsAbouthText";
import Modal from "../../modalWindow/modalWindow";
import SVG from "../../../assets/cancel.png";
import Input from "../../shared/input/Input";
import Header from "../../header/header";
import "./restaurantAbout.css";

const RestaurantAbout = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [isopenModal, setIsOpenModal] = useState(false);
  const [customer, setCustomer] = useState({
    person: "",
    date: "",
    time: "",
    name: "",
    email: "",
    lastname: "",
    telephone: "",
    preferences: "",
  });

  const [count, setCount] = useState(0);
  const openModal = () => setIsOpenModal(true);
  const closeModal = () => setIsOpenModal(false);

  useEffect(() => {
    Firebase.getRestaurants().then((val) => {
      setData(val);
    });
    Firebase.getReserveTable().then((res) => setCount(res.length));
  }, []);

  const restaurant = data.length && data[id];
  const handleChangeReserve = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = async () => {
    await Firebase.addReserveTables(customer, count);
    setIsOpenModal(false);
  };

  return (
    <>
      <div
        className="wrapper-restaurants-about"
        style={{ backgroundImage: `url(${restaurant.urlImg})` }}
      >
        <Header />
        <div className="contact-text">
          <h1>{restaurant.name}</h1>
          <p>Order online is easy</p>
        </div>
      </div>
      <div className="reserve-table">
        <div className="dropdown-container">
          <div className="dropdown-select">
            <Dropdown title="Party Size" values={PART_SIZE} name="person" />
          </div>
          <div className="dropdown-select">
            <Dropdown title="Date" values={DATE} name="date" />
          </div>
          <div className="dropdown-select">
            <Dropdown title="Time" values={TIME} name="time" />
          </div>

          <div className="modal-button">
            <Button
              context="Bok Now"
              className="button-modal-open-close"
              onClick={() => openModal()}
            />
          </div>
          <Modal isOpen={isopenModal} onClose={() => closeModal()}>
            <div className="modal-text">
              <p className="text-content">
                Find a reservation at MEZZO CLASSIC HOUSE CLUB
              </p>
              <span onClick={() => closeModal()} className="close-modal-window">
                <img src={SVG} alt="img-logo-dinner" />
              </span>
            </div>
            <div className="dropdown-modal">
              <span>
                <Dropdown
                  values={PART_SIZE}
                  name="person"
                  onChange={(e) => handleChangeReserve(e)}
                />
              </span>
              <span>
                <Dropdown
                  values={DATE}
                  name="date"
                  onChange={(e) => handleChangeReserve(e)}
                />
              </span>
              <span>
                <Dropdown
                  values={TIME}
                  name="time"
                  onChange={(e) => handleChangeReserve(e)}
                />
              </span>
            </div>
            <div className="fields-box">
              <span>
                <Input
                  type="name"
                  placeholder="Name"
                  name="name"
                  onChange={(e) => handleChangeReserve(e)}
                />
              </span>
              <span>
                <Input
                  type="text"
                  placeholder="Lastname"
                  name="lastname"
                  onChange={(e) => handleChangeReserve(e)}
                />
              </span>
            </div>
            <div className="contact-fields-input">
              <span>
                <Input
                  type="text"
                  placeholder="Email"
                  name="email"
                  onChange={(e) => handleChangeReserve(e)}
                />
              </span>
              <span>
                <Input
                  type="text"
                  placeholder="Telephone"
                  name="telephone"
                  onChange={(e) => handleChangeReserve(e)}
                />
              </span>
              <span className="textarea-for-booking">
                <textarea
                  placeholder="Preferences on booking"
                  name="preferences"
                  onChange={(e) => handleChangeReserve(e)}
                ></textarea>
              </span>
            </div>
            <div className="reserve-table-btn">
              <span>
                <Button context="Book Now" onClick={() => handleClick()} />
              </span>
            </div>
          </Modal>
        </div>
      </div>
      <div className="diner-icon">
        <p className="icon">
          <img src={imgDiner} alt="img-dinner" />
        </p>
        <p className="cuisine-text">Cuisine</p>
        <p>{restaurant.Cuisine}</p>
      </div>
      <div>
        <RestaurantsAboutText restaurants={restaurant} />
      </div>
    </>
  );
};

export default RestaurantAbout;
