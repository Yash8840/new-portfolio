import React from "react";
import "./footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import {BiMoviePlay} from 'react-icons/bi'

const Footer = () => {
  return (
    <footer>
      <a href="https://yashreactmovies.netlify.app" className="footer__logo" target='_blank'>
        <BiMoviePlay/>
       
      </a>
      
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>

        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/yash-shekhar-b0559922a/" target="blank">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/yash_shekhar__/" target="blank">
          <FaInstagram />
        </a>
        <a href="https://twitter.com/Shekhar_Yash_" target="blank">
          <FaTwitter />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Yash Shekhar. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;