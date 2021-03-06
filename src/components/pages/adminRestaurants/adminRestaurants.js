import React, { useEffect, useState } from "react";
import imgContact from "../../../assets/cover-image.jpg";
import Posts from "../../pagination/posts";
import Pagination from "../../pagination/pagination";
import Firebase from "../../../service/firebase/firebase";
import Button from "../../shared/button/button";
import Modal from "../../modalWindow/modalWindow";
import SVG from "../../../assets/cancel.png";
import Input from "../../shared/input/Input";
import { ADMIN_RESTAURANTS_PAGE } from "../../../constant/urls";
import "../../modalWindow/modalWindow.css";
import "../adminPages/adminPage.css";

const AdminRestaurants = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(9);
  const [isopenModal, setIsOpenModal] = useState(false);
  const [newRestaurants, setNewRestaurants] = useState({
    name: "",
    description: "",
    urlImg: "",
    id: 0,
    Cuisine: "",
  });
  const openModal = () => setIsOpenModal(true);
  const closeModal = () => setIsOpenModal(false);

  useEffect(() => {
    setLoading(true);
    Firebase.getRestaurants().then((val) => {
      setData(val);
      setLoading(false);
    });
  }, []);

  const handleChangeRestaurants = (e) => {
    setNewRestaurants({
      ...newRestaurants,
      [e.target.name]: e.target.value,
      id: data.length,
    });
  };

  const handleClick = async () => {
    await Firebase.addNewRestaurant(newRestaurants, data.length);
    closeModal();
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = loading
    ? []
    : data?.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div
        className="wrapper-restaurants"
        style={{ backgroundImage: `url(${imgContact})` }}
      >
        <div className="contact-text">
          <h1>RESTAURANTS</h1>
          <p>Booking online is Easy.</p>
        </div>
      </div>
      <div className="btns-admin">
        <Button context="ADD" onClick={() => openModal()} />
      </div>
      <Modal isOpen={isopenModal} onClose={() => closeModal()}>
        <div className="modal-text">
          <span onClick={closeModal} className="close-modal-window">
            <img src={SVG} alt="svg-img" />
          </span>
        </div>
        <div>
          <Input
            placeholder="URL IMG"
            onChange={(e) => handleChangeRestaurants(e)}
            name="urlImg"
          />
          <Input
            placeholder="Name"
            onChange={(e) => handleChangeRestaurants(e)}
            name="name"
          />
          <Input
            placeholder="Cuisine"
            onChange={(e) => handleChangeRestaurants(e)}
            name="Cuisine"
          />
          <span className="textarea-for-booking">
            <textarea
              onChange={(e) => handleChangeRestaurants(e)}
              placeholder="Description"
              name="description"
            ></textarea>
          </span>
          <div className="btn-add-restaurants">
            <Button context="Add" onClick={handleClick} />
            <Button context="Cancel" onClick={closeModal} />
          </div>
        </div>
      </Modal>
      <div className="container-rees">
        {!loading ? (
          <>
            <div className="post-data">
              <Posts posts={currentPosts} loading={loading} />
            </div>
            <div className="pagination-pages">
              <Pagination
                paginate={paginate}
                postsPerPage={postsPerPage}
                totalPosts={data?.length}
                url={ADMIN_RESTAURANTS_PAGE}
              />
            </div>
          </>
        ) : (
          "Loading..."
        )}
      </div>
    </>
  );
};
export default AdminRestaurants;
