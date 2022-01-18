/* import React, { Component, useRef, useEffect } from "react"; */

import "./red-info-page.scss";

const RedInfoPage = () => {
  /*   const myRef = useRef(null);
  const executeScroll = () => myRef.current.scrollIntoView(); */

  return (
    <div className="info-page">
      <div className={`home-page-packground`}>
        <div className="cim">American Wildwest</div>
        <div className="alcim">
          <div className="arrow" />
          <div className="alcim-szoveg">Csatlakozz discord szerverünkre</div>
          <div className="arrow" />
        </div>
        <div className="discord-gomb" onClick={executeScroll}>
          DISCORD
        </div>
      </div>
    </div>
  );
};

export default RedInfoPage;

//https://stackblitz.com/edit/react-ls1dwp
