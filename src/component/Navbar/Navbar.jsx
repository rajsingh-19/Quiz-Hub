import React from "react";
import "../Navbar/nav.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleAuthClick = () => {
    if (token) {
      localStorage.clear();
    }
    navigate("/auth/login");
  };

  return (
    <div className="height-15 sticky top-0 z-100">
      <div className="flex dir-row nav items-center width-100">
        <div className="brand-div width-50">
          <Link to="/" className="link text1 bold p-l quiz-color italic">
            Quiz<span className="hub-color">Hub</span>
          </Link>
        </div>
        <div className="log-div width-50">
          <ul className="flex dir-row list-style-none float-r p-r15">
            <li className="">
              <button className="brandname p8 m-r10">
                <Link to="/" className="link text-primary-color text12">
                  Home
                </Link>
              </button>
            </li>
            <li className="">
              <button className="brandname p8">
                <Link
                  to="/auth/login"
                  className="link text-primary-color text12"
                  onClick={handleAuthClick}
                >
                  {token ? "Logout" : "Login"}
                </Link>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
