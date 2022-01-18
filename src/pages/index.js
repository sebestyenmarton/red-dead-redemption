import React from "react";
import RedStartPage from "../components/StartPage/red-start-page";
import RedHomePage from "../components/HomePage/red-home-page";
import RedInfoPage from "../components/HomePage/red-home-page";

const Home = () => {
  return [<RedStartPage />, <RedHomePage />, <RedInfoPage />];
};

export default Home;
