import React, { useState } from "react";
import "./Navbar.css";
import { Link, animateScroll as scroll } from "react-scroll";
import { useNavigate } from "react-router-dom";

import telegram from "../../images/logotelegram.png";
import twitter from "../../images/twitter.svg";
import hamburger from "../../images/hamburger.png";
import close from "../../images/close-button.png";
import logo from "../../images/logoh.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuImg, setMenuImg] = useState(hamburger);
  let navigate = useNavigate();

  function openMenu() {
    if (isMenuOpen) {
      setMenuImg(hamburger);
    } else {
      setMenuImg(close);
    }

    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className="NBSuper">
      <div className="NBContainer">
        <div className="Logo">
          <Link
            to="hero"
            activeClass="active"
            smooth={true}
            duration={700}
            spy={true}
            exact="true"
            offset={-74}
          >
            <img src={logo} />
          </Link>
        </div>
        <div className="Links">
          <div className="NavLink">
            <Link
              to="toke"
              smooth={true}
              duration={700}
              spy={true}
              exact="true"
              offset={-74}
            >
              <p>Tokenomics</p>
            </Link>
          </div>
          <div className="NavLink">
            <Link
              to="rm"
              smooth={true}
              duration={700}
              spy={true}
              exact="true"
              offset={-74}
            >
              <p>Roadmap</p>
            </Link>
          </div>
        </div>
        <div className="NBButtons">
          <div className="NBBuyButton">🔥 BUY 🔥</div>
          <a href="https://web.telegram.org/k/" target="_blank">
            <img src={telegram} />
          </a>
          <a href="https://twitter.com" target="_blank">
            <img src={twitter} />
          </a>
        </div>
        <div className="MovilBtn" onClick={() => openMenu()}>
          <img src={menuImg} />
        </div>
      </div>
      <div className={"NavPanel-" + (isMenuOpen ? "Open" : "Closed")}>
        <div className="PanelLinks">
          <div className="PLogo">
            <Link
              to="hero"
              smooth={true}
              duration={700}
              spy={true}
              exact="true"
              offset={-74}
            >
              <img src={logo} />
            </Link>
          </div>
          <div className="PanelSocials">
            <a
              href="https://t.me/dogesofthecaribbean"
              target="_blank"
              onClick={() => openMenu()}
            >
              <img src={telegram} height="40" />
            </a>
            <a
              href="https://twitter.com/CaribbeanDoges"
              target="_blank"
              onClick={() => openMenu()}
            >
              <img src={twitter} height="40" />
            </a>
          </div>
          <div className="PNavButtons">
            <a href="https://dogeswap.org/#" target="_blank">
              <div className="PNavBuyBtn" onClick={() => openMenu()}>
                🔥 BUY 🔥
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
