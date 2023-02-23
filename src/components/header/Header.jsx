import React from "react";
import CTA from "./CTA";
import ME from "../../assets/me.jpg";
import HeaderSocials from "./HeaderSocials";
import "./header.css";
import { useParallax } from "react-scroll-parallax";

const Header = () => {
  const parallax = useParallax({speed : -10});

  return (
    <header>
      <div ref={parallax.ref} className="container header__container">
        <h5 >Hello I'm</h5>
        <h1 >Yash Shekhar</h1>
        <h5 className="text-light">Frontend-Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
