import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
const [scrollHeader, setScrollHeader] = useState(false);
  window.onscroll = () => {
    if (window.scrollY > 1) {
      setScrollHeader(true);
    } else {
      setScrollHeader(false);
    }
  };
  return (
    <>
        {
      scrollHeader ? (<header className="header_section sticky-top bg-light rounded-bottom">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container d-block">
          <div className="d-flex ">
            <Link to='/' className="text-dark font-weight-bold mr-3 " >Brand Name</Link>
            <Link to='/login' className="text-warning" >Login</Link>
          </div>
          <div className='d-flex mt-3'>
            <Link to='/' className="text-dark mr-3" >About</Link>
            <Link to='/blog' className="text-dark mr-3" >Blog</Link>
            <Link to='/testimonial' className="text-dark mr-3" >Testimonial</Link>
            <Link to='/gallery' className="text-dark" >Gallery</Link>
          </div>
        </nav>
      </div>
    </header >): (<header className="header_section sticky-top">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container d-block">
          <div className="d-flex ">
            <Link to='/' className="text-white font-weight-bold mr-3 " >Brand Name</Link>
            <Link to='/login' className="text-warning" >Login</Link>
          </div>
          <div className='d-flex mt-3'>
            <Link to='/' className="text-warning mr-3" >About</Link>
            <Link to='/blog' className="text-warning mr-3" >Blog</Link>
            <Link to='/testimonial' className="text-warning mr-3" >Testimonial</Link>
            <Link to='/gallery' className="text-warning" >Gallery</Link>
          </div>
        </nav>
      </div>
    </header >)
    }

    </>

    
  )
}

export default Header