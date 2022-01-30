import React from "react";
import { FaHandPointer } from "react-icons/fa";
/* import { animateScroll as scroll } from "react-scroll"; */

import "./red-start-page.scss";

const RedStartSection = ({
  startPageDissolve,
  startPageVisibility,
  dissolve,
}) => {
  return (
    <div
      className={`start-page ${startPageDissolve ? "deactivated" : ""} ${
        startPageVisibility ? "displayNone" : ""
      }`}
      onClick={dissolve}
    >
      <div className="cim-background" />
      <div className="lovas-background" />
      <div className="kattints-felirat">
        Kattints, hogy
        <br /> a főoldalra lépj
        <FaHandPointer className="pointer-icon" />
      </div>
      <div className="foszereplo-background" />
    </div>
  );
};

export default RedStartSection;
