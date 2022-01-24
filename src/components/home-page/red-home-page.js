import React from "react";
import { animateScroll as scroll } from "react-scroll";

import "./red-home-page.scss";

const RedHomePage = ({ startPageVisibility }) => {
  return [
    <div className="home-page">
      <div
        className={`home-page-packground ${
          startPageVisibility ? "activated" : ""
        }`}
      >
        <div className="cim">American Wildwest</div>
        <div className="alcim">
          <div className="arrow" />
          <div className="alcim-szoveg">Csatlakozz discord szerverünkre</div>
          <div className="arrow" />
        </div>
        <a
          className="discord-gomb"
          href="#secondPage" /* onClick={toggleHome} */
        >
          DISCORD
        </a>
      </div>
    </div>,
    <div className="second-page">
      <div className="second-page-background" id="secondPage"></div>
    </div>,
  ];
};

export default RedHomePage;
