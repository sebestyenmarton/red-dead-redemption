import React, { useState, useEffect } from "react";
import { FaHandPointer } from "react-icons/fa";
import "./red-start-page.scss";

const RedStartPage = () => {
  const [startPageVisibility, setStartPageVisibility] = useState(false);
  const [timerValue, setTimerValue] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Működik");
      setTimerValue(!timerValue);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const dissolve = () => {
    if (timerValue) {
      setStartPageVisibility(!startPageVisibility);
    }
  };

  return (
    <div
      className={`start-page ${startPageVisibility ? "deactivated" : ""}`}
      onClick={dissolve}
    >
      <div className="cim-background dragElement" />
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