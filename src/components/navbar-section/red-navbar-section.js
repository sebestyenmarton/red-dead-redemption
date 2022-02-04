import React, { useState } from "react";
import { Link as LinkS } from "react-scroll";
import {
  FaPlayCircle,
  FaPauseCircle,
  FaCircleNotch,
  FaAngleRight,
} from "react-icons/fa";

import "./red-navbar-section.scss";

//  SCROLL DURATION
//  Az alábbi navbar Linkeken állíthatod a duration értékét, ami azt szabályozza, hogy milyen gyorsan
//  törtéjnek meg az átváltások egyik lapról a másikra. Ajánlatos minden Links "duration" értékét egyformára állítani

//  VERTICAL/HORIZONTAL SCROLLING
//  A vízszintes weboldal és vízszintes scrollozás eléréséhez a "horizontal" értéke "true" kell legyen ( horizontal={true} )
//  A függőleges weboldal és függőleges scrollozás eléréséhez a "horizontal" értéke "false" kell legyen ( horizontal={false} )
//  Váltáskor kötelezően kell a `page/index.scss` file-ban is változtatni a kódban a kommentek alapján

const RedNavbarSection = ({
  setPlayerFunction,
  youtubePlayer,
  switchFunction,
  horizontalScrolling,
}) => {
  const [firstTimeIsActive, setFirstTimeIsActive] = useState(false);

  const setActive = () => {
    if (!firstTimeIsActive) {
      setFirstTimeIsActive(!firstTimeIsActive);
      console.log("Is active? ...:", firstTimeIsActive);
    }
  };

  return (
    <div className="navbar-section">
      <div className="navbar">
        <LinkS
          onClick={setActive}
          className="navbar-logo"
          duration={500}
          to="homePage"
          spy={true}
          exact="true"
          smooth={true}
          horizontal={horizontalScrolling}
        />
        <div className="navbar-line first" />
        <div className="navbar-menu">
          <LinkS
            onClick={setActive}
            className={`menu-item ${firstTimeIsActive ? "activated" : "first"}`}
            activeClass={false}
            horizontal={horizontalScrolling}
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
            onClick={setActive}
            s
            className={`menu-item ${firstTimeIsActive ? "activated" : ""}`}
            horizontal={horizontalScrolling}
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
            onClick={setActive}
            className={`menu-item ${firstTimeIsActive ? "activated" : ""}`}
            horizontal={horizontalScrolling}
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
            onClick={setActive}
            className={`menu-item ${firstTimeIsActive ? "activated" : ""}`}
            horizontal={horizontalScrolling}
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
        <div className="navbar-top-right" onClick={setPlayerFunction}>
          {youtubePlayer ? (
            <FaPauseCircle className="pause-button" />
          ) : (
            <FaPlayCircle className="play-button" />
          )}
          <FaCircleNotch
            className={`spinner ${youtubePlayer ? "active" : ""}`}
          />
          <FaAngleRight className="next" onClick={switchFunction} />
        </div>
      </div>
      <div className="navbar-center"></div>
      <div className="navbar-bottom"></div>
    </div>
  );
};

export default RedNavbarSection;
