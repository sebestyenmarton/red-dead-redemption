import React, { useState, useEffect } from "react";
/* import { animateScroll as scroll } from "react-scroll";*/

import RedHomePage from "../components/home-page/red-home-page";
import RedInfoPage from "../components/info-page/red-info-page";
import RedNavbarSection from "../components/navbar-section/red-navbar-section";
import RedStartPage from "../components/start-page/red-start-page";

import "./index.scss";

const Pages = () => {
  const [startPageDissolve, setStartPageDissolve] = useState(false);
  const [startPageVisibility, setStartPageVisibility] = useState(false);
  const [timerValue, setTimerValue] = useState(false);

  //  Az alábbi függvénnyel beállítható az, hogy mikortól legyen kattintható a startPage
  //  Például 3000 millisecundum megfelel 1 másodpercnek (jelen esetben 1500ms van)
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimerValue(!timerValue);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Az alábbi függvénnyel beállítható az, hogy mikortól töltődjön be a home-page, nemigazán ajánlatos az állítgatása
  // Min. 2000-2500 millisecundum szükséges, míg eltűnik a start page és onnantól kezdve betöltődhet a home-page
  const dissolve = () => {
    if (timerValue) {
      setStartPageDissolve(!startPageDissolve);
      setTimeout(() => {
        setStartPageVisibility(!startPageVisibility);
      }, 2300);
    }
  };

  /*   const toggleHome = () => {
    scroll.scrollToTop();
  }; */

  return (
    <div className={`pages ${startPageVisibility ? "active" : ""}`}>
      <RedStartPage
        startPageDissolve={startPageDissolve}
        startPageVisibility={startPageVisibility}
        dissolve={dissolve}
      />
      {startPageDissolve && (
        <RedHomePage startPageVisibility={startPageVisibility} />
      )}
      {startPageDissolve && <RedInfoPage />}
      {startPageDissolve && <RedNavbarSection />}
    </div>
  );
};

export default Pages;
