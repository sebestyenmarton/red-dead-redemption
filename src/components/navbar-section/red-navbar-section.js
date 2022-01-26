import React from "react";

import "./red-navbar-section.scss";

const RedNavbarSection = () => {
  return (
    <div className="navbar-section">
      <div className="navbar">
        <div className="navbar-logo" />
        <div className="navbar-line" />
        <ul className="navbar-menu">
          <li>Főoldal</li>
          <li>Információk</li>
          <li>Gyik</li>
          <li>Média</li>
        </ul>
        <div className="navbar-line" />
        <div className="navbar-top-right">S.Márton</div>
      </div>
      <div className="navbar-line"></div>
      <div className="navbar-bottom"></div>
    </div>
  );
};

export default RedNavbarSection;
