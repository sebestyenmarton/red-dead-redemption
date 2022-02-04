import React from "react";

import "./red-gyik-page.scss";

const RedGyikPage = () => {
  return (
    <div className="gyik-page" id="gyikPage">
      <div className="gyik-page-background">
        <div className="gyik-content">
          <div className="gyik-text-box">
            <div className="gyik-title">GY.I.K. Title</div>
            <ul className="gyik-description">
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </li>
              <li>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </li>
              <li>
                {" "}
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedGyikPage;
