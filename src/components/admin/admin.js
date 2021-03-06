import React, { useEffect, useState } from "react";
import Input from "../shared/input/Input";
import { Link } from "react-router-dom";
import Button from "../shared/button/button";
import Firebase from "../../service/firebase/firebase";
import { ADMIN, ADMIN_PAGE } from "../../constant/urls";
import "./admin.css";

const Admin = () => {
  const [admin, setAdmin] = useState([]);
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    Firebase.getAdminInfo().then((res) => {
      setAdmin([...res]);
    });
  }, []);

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
    const isUsername = admin[0].username === login.username;
    const isPassword = admin[0].password === login.password;
    if (isUsername && isPassword) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  };

  return (
    <div className="login">
      <div className="loginContainer">
        {login.password || (login.username && !isAdmin) ? (
          <p className="error-isAdmin">You are not the site administrator</p>
        ) : (
          ""
        )}
        <label>Username</label>
        <Input
          placeholder="Username..."
          type="text"
          name="username"
          onChange={(e) => handleChange(e)}
        />
        <label>Password</label>
        <Input
          placeholder="Password ..."
          type="password"
          name="password"
          onChange={(e) => handleChange(e)}
        />
        <Link to={isAdmin ? ADMIN_PAGE : ADMIN}>
          <Button context="Sign In" onClick={handleClick} />
        </Link>
      </div>
    </div>
  );
};

export default Admin;
