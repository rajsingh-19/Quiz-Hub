import React from 'react'
import "../Navbar/nav.css";
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleAuthClick = () => {
      if(token) {
        localStorage.clear();
      }
      navigate('/auth/login');
  };

  return (
    <div className='flex dir-row nav items-center width-100'>
      <div className='brand-div width-50'>
        <Link to="/" className='text-primary-color link text1 p-l'>Quiz Hub</Link>
      </div>
      <div className='log-div width-50'>
        <ul className='flex dir-row list-style-none float-r pr-20'>
          <li className=''>
            <Link to="/" className='text-primary-color link text3 p-r' >Home</Link>
          </li>
          <li className=''>
            <Link to="/auth/login" className='text-primary-color link p-r text3' onClick={handleAuthClick}>{token ? "Logout" : "Login"}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
