import React from "react";

import "./red-home-page.scss";

const RedHomePage = ({ startPageVisibility }) => {
  return (
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
          /* href="#secondPage" onClick={toggleHome} */
          to="secondPage"
        >
          DISCORD
        </a>
      </div>
    </div>
  );
};

export default RedHomePage;
