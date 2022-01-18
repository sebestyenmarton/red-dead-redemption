import "./red-home-page.scss";

const RedHomePage = () => {
  return (
    <div className="home-page">
      <div
        /*         className={`home-page-packground ${
          startPageVisibility ? "displayNone" : ""
        }`} */
        className={`home-page-packground`}
      >
        <div className="cim">American Wildwest</div>
        <div className="alcim">
          <div className="arrow" />
          <div className="alcim-szoveg">Csatlakozz discord szerverünkre</div>
          <div className="arrow" />
        </div>
        <div className="discord-gomb">DISCORD</div>
      </div>
    </div>
  );
};

export default RedHomePage;
