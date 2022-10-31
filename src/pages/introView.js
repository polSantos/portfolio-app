import React from "react";
import Skate from "../skate.png";
import Start from "../start.png"
import './styles.css'

const introView = () => {
  return (
    <div className="intro">
      <header className="introHeader">
        <h1 className="introTitle">
          <small className="introSubtitle">espacio personal de</small>
          <br />
          <span className="myName">POL SANTOS</span>
        </h1>
      </header>
      <main>
        <div className="introImg">
          <img src={Skate} width="100px" height="100px" />
        </div>
      </main>
      <button className="introButton">Start</button>
    </div>
  );
};

export default introView;
