import React from "react";
import "./Hero.css";

import doge from "../../images/head.png";
import telegram from "../../images/logotelegram.png";
import twitter from "../../images/twitter.svg";

const Hero = () => {
  return (
    <div className="HSuper" id="hero">
      <div className="HContainer">
        <div className="HLeft">
          <img src={doge} />
        </div>
        <div className="HRight">
          <h1>AntiDoge:</h1>
          <h2>
            The profetized $DOGE that will bring <span>the end of days</span>{" "}
            (of you having no money)
          </h2>
          <p>
            Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
            Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
            Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper
            libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc,
            blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio
            et ante tincidunt tempus.
            <br />
            Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
            Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
            Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper
            libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc,
            blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio
            et ante tincidunt tempus.
          </p>
          <div className="HButtons">
            <div className="HBuyButton">🔥 BUY 🔥</div>
            <div className="HSocials">
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
    </div>
  );
};

export default Hero;
