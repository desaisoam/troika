import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';


const Footer = () => {

  return (
    <>

      <section className='footer-section'>
        <img src='horse.png' alt="Footer" className="footer-image1" />

        <div className='footerinfo'>
            <img src='troika-white.png'/>
            <div className='ocf'>
            <img src='ocf.png' alt="Footer" className="oc-image1" />
            </div>

            <div className="social-icons">
                <img src='instagram-logo.png' alt="Footer" className="footer-image2" />
                <img src='mail-logo.png' alt="Footer" className="footer-image2" />
            </div>

        </div>


      </section>

    </>
  );
}


export default Footer; 