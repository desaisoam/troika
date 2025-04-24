import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = (currentPage) => {

  return (
    <>
    <section id="top">
        <img src="troika.png" id="logo"/>
        <h5>Undergraduate Journal in Eastern European, Eurasian and Slavic Studies at UC Berkeley</h5>
    </section>
        
      <section className='header-section'>
          <Link to="/" className={`nav-button ${currentPage === "home" ? "active" : ""}`} id="home">
            <div className='nav-text'>Home</div>
          </Link>
          <Link to="/issues" className={`nav-button ${currentPage === "issues" ? "active" : ""}`} id="issues">
            <div className='nav-text'>Issues</div>
          </Link>
          <Link to="/featured" className={`nav-button ${currentPage === "featured" ? "active" : ""}`} id="featured">
            <div className='nav-text'>Featured</div>
          </Link>
          <Link to="/joinus" className={`nav-button ${currentPage === "joinus" ? "active" : ""}`} id="joinus">
            <div className='nav-text'>Join Us</div>
          </Link>
          <Link to="/submit" className={`nav-button ${currentPage === "submit" ? "active" : ""}`} id="submit">
            <div className='nav-text'>Submit</div>
          </Link>


        {/* <Link to="/">Home</Link> 
        <Link to="/">Home</Link> 
        <Link to="/">Home</Link> 
        <Link to="/">Home</Link>    */}
      </section>
    </>
  );
}

export default Header;

