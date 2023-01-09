import React from "react";
import "./Footer.css";

import doge from "../../images/head.png";
import telegram from "../../images/logotelegram.png";
import twitter from "../../images/twitter.svg";

const Footer = () => {
  return (
    <div className="FSuper">
      <div className="FContainer">
        <img src={doge} />
        <div className="FTrick">
          <div className="FContent">
            <h1>Antidoge</h1>
            <h2>
              Quote of the Day:
              <br />
              "Woof Woof" - Doge
            </h2>
            <p>COPYRIGHT © 2022 ANTIDOGE TEAM | ALL RIGHTS RESERVED</p>
          </div>
          <div className="FSocials">
            <a href="https://web.telegram.org/k/" target="_blank">
              <img src={telegram} />
            </a>
            <a href="https://twitter.com" target="_blank">
              <img src={twitter} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
