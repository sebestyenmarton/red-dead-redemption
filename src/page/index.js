import React, { useState, useEffect } from "react";

import ReactPlayer from "react-player/youtube";

import RedHomePage from "../components/pages/home-page/red-home-page";
import RedInfoPage from "../components/pages/info-page/red-info-page";
import RedNavbarSection from "../components/navbar-section/red-navbar-section";
import RedStartSection from "../components/start-section/red-start-section";
import RedGyikPage from "../components/pages/gyik-page/red-gyik-page";
import RedMediaPage from "../components/pages/media-page/red-media-page";

import "./index.scss";

const RedPages = () => {
  const [startPageDissolve, setStartPageDissolve] = useState(false);
  const [startPageVisibility, setStartPageVisibility] = useState(false);
  const [timerValue, setTimerValue] = useState(false);
  const [youtubePlayer, setYoutubePlayer] = useState(false);
  const [nextPlaylist, setNextPlaylist] = useState(false);

  //Ha horizontális scrollozást szeretnénk, akkor horizontalScrolling = true kell legyen
  //Ha vertikális scrollozást vagyis függőleges weboldalt szeretnénk, akkor horizontalScrolling = false
  var horizontalScrolling = true;

  const setPlayerFunction = () => {
    setYoutubePlayer(!youtubePlayer);
  };

  const switchFunction = () => {
    setNextPlaylist(!nextPlaylist);
  };

  const mediaQuery = window.matchMedia("(max-width: 650px)");
  // Check if the media query is true
  if (mediaQuery.matches) {
    // A mobilokon függőleges szkollozást állítunk be ha a képernyő szélessége mobilfelbontásban kissebb 650px-n;l
    horizontalScrolling = false;
  }

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
        setPlayerFunction();
      }, 2300);
    }
  };

  return (
    <div
      className={`pages ${startPageVisibility ? "active" : ""} ${
        horizontalScrolling ? "" : "horizontal-scrolling"
      }`}
    >
      <RedStartSection
        startPageDissolve={startPageDissolve}
        startPageVisibility={startPageVisibility}
        dissolve={dissolve}
      />
      {startPageDissolve && (
        <RedHomePage startPageVisibility={startPageVisibility} />
      )}
      {startPageDissolve && <RedInfoPage />}
      {startPageDissolve && <RedGyikPage />}
      {startPageDissolve && <RedMediaPage />}
      {startPageDissolve && (
        <RedNavbarSection
          setPlayerFunction={setPlayerFunction}
          youtubePlayer={youtubePlayer}
          switchFunction={switchFunction}
          horizontalScrolling={horizontalScrolling}
        />
      )}
      <ReactPlayer
        url={[
          "https://www.youtube.com/watch?v=T80B7s7ekGo",
          "https://www.youtube.com/watch?v=6MZw_Iv0wdU",
          "https://www.youtube.com/watch?v=jNgP6d9HraI",
        ]}
        className="youtube-music-player"
        width={0}
        // Itt állítható a hangerő 0.00 és 0.1 közötti értékekkel
        volume={0.03}
        playing={youtubePlayer}
      />
    </div>
  );
};

export default RedPages;
