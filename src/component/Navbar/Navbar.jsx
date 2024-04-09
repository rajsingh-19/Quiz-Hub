import React from 'react'
import "./nav.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex dir-row nav items-center width-100'>
      <div className='brand-div width-50'>
        <Link to="/" className='text-primary-color link heading3 pl-20'>Quiz Hub</Link>
      </div>
      <div className='log-div width-50'>
        <ul className='flex dir-row ul float-r pr-20'>
          <li className=''>
            <Link to="/" className='text-primary-color link heading5 pr-20' >Home</Link>
          </li>
          <li className=''>
            <Link to="/auth/login" className='text-primary-color link heading5' >Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
