import React from "react";

import "./red-home-page.scss";

const RedHomePage = ({ startPageVisibility }) => {
  return (
    <div className="home-page" id="homePage">
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
        <div className="discord-gomb">DISCORD</div>
      </div>
    </div>
  );
};

export default RedHomePage;
