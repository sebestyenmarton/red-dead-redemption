import React from "react";
import { Link as LinkS } from "react-scroll";

import "./red-navbar-section.scss";

//  SCROLL DURATION
//  Az alábbi navbar Linkeken állíthatod a duration értékét, ami azt szabályozza, hogy milyen gyorsan
//  törtéjnek meg az átváltások egyik lapról a másikra. Ajánlatos minden Links "duration" értékét egyformára állítani

//  VERTICAL/HORIZONTAL SCROLLING
//  A vízszintes weboldal és vízszintes scrollozás eléréséhez a "horizontal" értéke "true" kell legyen ( horizontal={true} )
//  A függőleges weboldal és függőleges scrollozás eléréséhez a "horizontal" értéke "false" kell legyen ( horizontal={false} )
//  Váltáskor kötelezően kell a `page/index.scss` file-ban is változtatni a kódban a kommentek alapján

const RedNavbarSection = () => {
  return (
    <div className="navbar-section">
      <div className="navbar">
        <LinkS
          className="navbar-logo"
          duration={500}
          to="homePage"
          spy={true}
          exact="true"
          smooth={true}
          horizontal={true}
        />
        <div className="navbar-line first" />
        <div className="navbar-menu">
          <LinkS
            className="menu-item"
            activeClass="active"
            horizontal={true}
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
            horizontal={true}
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
            horizontal={true}
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
            horizontal={true}
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
