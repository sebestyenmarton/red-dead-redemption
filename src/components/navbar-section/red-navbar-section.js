import React from "react";

import "./red-navbar-section.scss";

const RedNavbarSection = () => {
  return (
    <div className="navbar-section">
      <div className="navbar">
        <div className="navbar-logo" />
        <div className="navbar-line first" />
        <ul className="navbar-menu">
          <li>
            Főoldal
            <div className="navbar-background elso active" />
          </li>
          <li>
            Információk
            <div className="navbar-background masodik" />
          </li>
          <li>
            Gyik
            <div className="navbar-background harmadik" />
          </li>
          <li>
            Média
            <div className="navbar-background negyedik" />
          </li>
        </ul>
        <div className="navbar-line" />
        <div className="navbar-top-right">S.Márton</div>
      </div>
      <div className="navbar-center"></div>
      <div className="navbar-bottom"></div>
    </div>
  );
};

export default RedNavbarSection;
