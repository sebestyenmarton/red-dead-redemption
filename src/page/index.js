import React, { useState, useEffect } from "react";
import { FaHandPointer } from "react-icons/fa";
import "./red-start-page.scss";
import "./red-home-page.scss";

const Home = () => {
  const [startPageDissolve, setStartPageDissolve] = useState(false);
  const [startPageVisibility, setStartPageVisibility] = useState(false);
  const [timerValue, setTimerValue] = useState(false);

  //  Az alábbi függvénnyel beállítható az, hogy mikortól legyen kattintható a startPage
  //  Például 3000 millisecundum megfelel 1 másodpercnek
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimerValue(!timerValue);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Az alábbi függvénnyel beállítható az, hogy mikortól töltődjön be a home-page
  // Min. 2000-2500 millisecundum szükséges, míg eltűnik a start page és onnantól kezdve betöltődhet a home-page
  const dissolve = () => {
    if (timerValue) {
      setStartPageDissolve(!startPageDissolve);
      setTimeout(() => {
        setStartPageVisibility(!startPageVisibility);
        console.log("Helloooobello");
      }, 2300);
    }
  };

  return [
    <div
      className={`start-page ${startPageDissolve ? "deactivated" : ""} 
      ${startPageVisibility ? "displayNone" : ""}`}
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
    </div>,
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
        <div className="discord-gomb">DISCORD</div>
      </div>
    </div>,
  ];
};

export default Home;
