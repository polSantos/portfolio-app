import React from "react";
import ReactDOM from "react-dom";
import './Nav.css';
import { SocialIcon } from "react-social-icons";

const Nav = () =>{
  return (
    <nav className="Nav">
      <a className="link" href="/">
        <div className="monogram">PS</div>
      </a>
      <a className="link" href="/#about">
        {" "}
        About
      </a>
      <a className="link" href="/#projects">
        {" "}
        Projects
      </a>
      <a className="link" href="/#trajectory">
        {" "}
        Trajectory
      </a>
      <a className="link" href="/#abilities">
        {" "}
        Abilites
      </a>

      <div className="socials">
        <SocialIcon
          className="socialIcon"
          url="https://linkedin.com/in/jaketrent"
          bgColor="#90aab7"
          style={{ height: 25, width: 25 }}
        />
        <SocialIcon
          className="socialIcon"
          url="https://github.com/Polamen02"
          bgColor="#90aab7"
          style={{ height: 25, width: 25 }}
        />
      </div>
    </nav>
  );
};

export default Nav;