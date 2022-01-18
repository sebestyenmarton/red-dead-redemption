import React, { useState, useEffect } from "react";
import { FaHandPointer } from "react-icons/fa";
import "./red-start-page.scss";

const RedStartPage = () => {
  const [startPageDissolve, setStartPageDissolve] = useState(false);
  const [startPageVisibility, setStartPageVisibility] = useState(false);
  const [timerValue, setTimerValue] = useState(false);

  //  Az alábbi függvénnyel beállítható az, hogy mikortól legyen kattintható a startPage
  //  Például 3000 millisecundum megfelel 1 másodpercnek
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimerValue(!timerValue);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const dissolve = () => {
    if (timerValue) {
      setStartPageDissolve(!startPageDissolve);

      setTimeout(() => {
        setStartPageVisibility(!startPageVisibility);
        console.log("Helloooobello");
      }, 2500);
    }
  };

  return (
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
    </div>
  );
};

export default RedStartPage;
