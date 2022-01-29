import React from "react";
import { Link as LinkS } from "react-scroll";

import "./red-navbar-section.scss";

//  Az alábbi navbar Linkeken állíthatod a duration értékét, ami azt szabályozza, hogy milyen gyorsan
//  törtéjnek meg az átváltás egyik lapról a másikra. Ajánlatos minden Links duration értékét egyformán állítani

const RedNavbarSection = () => {
  return (
    <div className="navbar-section">
      <div className="navbar">
        <div className="navbar-logo" />
        <div className="navbar-line first" />
        <div className="navbar-menu">
          <LinkS
            className="menu-item"
            activeClass="active"
            duration={500}
            to="homePage"
            spy={true}
            exact="true"
            smooth={true}
          >
            Főoldal
            <div className="navbar-background elso active" />
          </LinkS>
          <LinkS
            className="menu-item"
            to="infoPage"
            spy={true}
            smooth={true}
            exact="true"
            duration={500}
          >
            Információk
            <div className="navbar-background masodik" />
          </LinkS>
          <LinkS
            className="menu-item"
            to="gyikPage"
            spy={true}
            smooth={true}
            exact="true"
            duration={500}
          >
            Gyik
            <div className="navbar-background harmadik" />
          </LinkS>
          <LinkS
            className="menu-item"
            to="mediaPage"
            spy={true}
            smooth={true}
            exact="true"
            duration={500}
          >
            Média
            <div className="navbar-background negyedik" />
          </LinkS>
        </div>
        <div className="navbar-line" />
        <div className="navbar-top-right">Rádio</div>
      </div>
      <div className="navbar-center"></div>
      <div className="navbar-bottom"></div>
    </div>
  );
};

export default RedNavbarSection;
