import React from "react";
import "./auth.css";
import { useAuth } from "../../context/Auth-context";
import loginHandler from "../../services/auth-services";
import { useNavigate } from "react-router-dom";

const Authlogin = () => {
  const navigate = useNavigate();

  const { email, password, authDispatch } = useAuth();
  console.log({ email, password });

  const handlEmailChange = (e) => {
    authDispatch({
      type: "EMAIL",
      payload: e.target.value,
    });
  };

  const handlePasswordChange = (e) => {
    authDispatch({
      type: "PASSWORD",
      payload: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const token = loginHandler(email, password);
    console.log(token);
    if (token) {
      navigate("/");
    }
    authDispatch({
      type: "TOKEN",
      payload: token,
    });
    authDispatch({
      type: "CLEAR_CREDENTIALS",
    });
  };

  const handleLoginTestCredential = () => {
    const token = loginHandler("suresh123@gmail.com", "9876543210");
    authDispatch({
      type: "TOKEN",
      payload: token,
    });
    if (token) {
      navigate("/");
    }
  };

  return (
    <div className="">
      <p>Login</p>
      <div>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label>Email</label>
            <input
              type="text"
              placeholder="full name"
              onChange={handlEmailChange}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="text"
              placeholder="*******"
              onChange={handlePasswordChange}
            />
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
      <div>
        <button onClick={handleLoginTestCredential}>
          Login with Test Credential
        </button>
      </div>
    </div>
  );
};

export default Authlogin;
